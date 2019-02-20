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
    }

    orderAsc(cardsList){
        let cardsOrderAsc = _.orderBy(cardsList, ['titulo'],['asc'])
        this.props.orderList(cardsOrderAsc)
        this.props.history.push('/')

    }

    orderDesc(cardsList){
        let cardsOrderDesc = _.orderBy(cardsList, ['titulo'],['desc'])
        this.props.orderList(cardsOrderDesc)

    }

    removeCard(cardID){
        this.props.removeCard(cardID)
        this.props.history.push('/')
    }

    render() {
        console.log(this.props)
        return (
            <div className={styles.container}>
                <button className={styles.agregarCarta}>  
                    <Link to='/Agregar'><i className="fas fa-plus"></i> Agregar carta</Link> 
                </button>
                <button className={styles.agregarCarta} onClick={() => this.orderAsc(this.props.cardsList)}>  
                   Ordenar Ascendente
                </button>
                <button className={styles.agregarCarta} onClick={() => this.orderDesc(this.props.cardsList)} >  
                    <i className="fas fa-plus"></i> Ordenar Descendiente 
                </button>

                {this.props.cardsListOrder.length > 0 && this.props.cardsListOrder.length == this.props.cardsList.length ? 
                <CardsList cardsList={this.props.cardsListOrder} removeCard={this.removeCard}/>
                : 
                <CardsList cardsList={this.props.cardsList} removeCard={this.removeCard}/>
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
