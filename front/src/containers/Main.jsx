import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import DisplayCardsContainer from './DisplayCardsContainer/DisplayCardsContainer'
import NewCardContainer from './NewCardContainer/NewCardContainer'
import NotFound from './NotFound/NotFound'

class Main extends Component {
    constructor(props) {
        super(props);
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

})

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(Main);



