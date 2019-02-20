import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import CardsList from '../../components/CardsList'
import cardsReducer from '../../redux/reducers/cardsReducer';

export class DisplayCardsContainer extends Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        return (
            <div>
                <h1>Lista de cartas</h1>
                <CardsList cardsList={this.props.cardsList}/>
                <button> <Link to='/Agregar'> Agregar carta</Link> </button>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cardsList: state.cardsReducer.cards
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCardsContainer)
