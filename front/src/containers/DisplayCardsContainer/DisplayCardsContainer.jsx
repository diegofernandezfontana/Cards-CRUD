import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import CardsList from '../../components/CardsList'

import { removeCard } from '../../redux/actions/CardActions'

import styles from './styles.css'

export class DisplayCardsContainer extends Component {
    constructor(props) {
        super(props)

        this.removeCard = this.removeCard.bind(this)
    }

    removeCard(idx){
        this.props.removeCard(idx)
    }

    render() {
        return (
            <div className={styles.container}>
            <button className={styles.agregarCarta}>  <Link to='/Agregar'><i class="fas fa-plus"></i> Agregar carta</Link> </button>
                <CardsList cardsList={this.props.cardsList} removeCard={this.removeCard}/>
                
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
