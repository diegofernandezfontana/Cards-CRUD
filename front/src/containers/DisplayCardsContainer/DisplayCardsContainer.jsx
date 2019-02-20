import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import CardsList from '../../components/CardsList'

import { removeCard } from '../../redux/actions/CardActions'

export class DisplayCardsContainer extends Component {
    constructor(props) {
        super(props)

        this.removeCard = this.removeCard.bind(this)
    }

    removeCard(idx){
        console.log(idx)
        this.props.removeCard(idx)
    }

    render() {
        return (
            <div>
                <h1>Lista de cartas</h1>
                <CardsList cardsList={this.props.cardsList} removeCard={this.removeCard}/>
                <button> <Link to='/Agregar'> Agregar carta</Link> </button>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cardsList: state.cardsReducer.cards
})

const mapDispatchToProps = dispatch => {
    return{
        removeCard:function(cardIdx){
            dispatch(removeCard(cardIdx))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCardsContainer)
