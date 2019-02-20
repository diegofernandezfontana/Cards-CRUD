import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import DisplayCardsContainer from './DisplayCardsContainer/DisplayCardsContainer'
import NewCardContainer from './NewCardContainer/NewCardContainer'
import NotFound from './NotFound/NotFound'

import { setStateByStorage } from '../redux/actions/CardActions'

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
       this.getLocalStorage()
    }

    getLocalStorage(){
        //Se corre en el didMount
        //Se fija si auxStorage esta dentro del localStorage con la key 'cardslist'
        var auxStorage= JSON.parse(localStorage.getItem("cardsList"))
        if(auxStorage && this.props.cardsList.length == 0){
            this.props.setStateByStorage(auxStorage.cardsReducer.cards  )
        }
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/Agregar' component={NewCardContainer} />
                    <Route exact path='/' component={DisplayCardsContainer} />
                    <Route path='/' component={NotFound} />
                    
                </Switch>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    cardsList: state.cardsReducer.cards
})

const mapDispatchToProps = dispatch => {
    return{
        setStateByStorage:function(localStorageCards){
            dispatch(setStateByStorage(localStorageCards))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);



