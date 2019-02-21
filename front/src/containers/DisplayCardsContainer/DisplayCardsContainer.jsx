import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { removeCard,orderList } from '../../redux/actions/CardActions'

import _ from 'lodash'

import CardsList from '../../components/CardsList'

import styles from './styles.css'

export class DisplayCardsContainer extends Component {
    constructor(props) {
        super(props)
        this.removeCard = this.removeCard.bind(this) 
        this.orderAsc = this.orderAsc.bind(this)
        this.orderDesc = this.orderDesc.bind(this)
    }

    orderAsc(cardsList){
        //Ordena el estado de forma asc
        let cardsOrderAsc = _.orderBy(cardsList, ['titulo'],['asc'])
        this.props.orderList(cardsOrderAsc)
    }

    orderDesc(cardsList){
        //Ordena el estado de forma desc
        let cardsOrderDesc = _.orderBy(cardsList, ['titulo'],['desc'])
        this.props.orderList(cardsOrderDesc)
    }

    removeCard(cardID){
        //Elimina la carta con el ID de la carta
        this.props.removeCard(cardID)
        this.props.history.push('/')
    }

    render() {
        return (
            <div className={styles.container}>

                {
                    this.props.cardsListOrder.length > 0 && this.props.cardsListOrder.length == this.props.cardsList.length ? 
                        <CardsList 
                            cardsList={this.props.cardsListOrder}
                            removeCard={this.removeCard} 
                            editCard={this.editCard}
                            orderAsc={this.orderAsc}
                            orderDesc={this.orderDesc}
                        />
                    : 
                        <CardsList cardsList={this.props.cardsList} 
                            removeCard={this.removeCard} 
                            editCard={this.editCard}
                            orderAsc={this.orderAsc}
                            orderDesc={this.orderDesc}
                        />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cardsList: state.cardsReducer.cards,
    cardsListOrder: state.cardsReducer.cardsOrdered
})

const mapDispatchToProps = dispatch => {
    return{
        removeCard:function(cardIdx){
            dispatch(removeCard(cardIdx))
        },
        orderList: function(arryOrdered){
            dispatch(orderList(arryOrdered))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCardsContainer)
