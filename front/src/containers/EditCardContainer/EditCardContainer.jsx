import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewCard from '../../components/NewCard';

import { editCard } from '../../redux/actions/CardActions'

import _ from 'lodash'

export class EditCardContainer extends Component {
    constructor(props){
        super(props)
        this.state ={
            titulo: '',
            descripcion: '',
            img: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt){
        evt.preventDefault()
        let finalCard = this.state
        let id = this.props.match.url.split('/')
        finalCard.id = parseInt(id[2])
        this.props.editCard(finalCard)
        this.props.history.push('/')
        
    }

    editCard(){
        //Entra aca cuando this.props.cardsList.length > 0
        //El this.state.titulo siempre va a estar vacio => ENtra
            // lodash (_) encuentra en this.props.cardsList donde el id == al url
                //Retorna el objeto entero
                //Setea el this.state con el objeto retornado
        let cardIdToEdit = this.props.match.url.split('/')
        if(this.state.titulo == ''){
            let cardToEdit =_.find(this.props.cardsList, function(card){
                //Le asigna a cardToEdit los valores de la card que coincida con el id
                if(parseInt(card.id) == parseInt(cardIdToEdit[2])){
                    return card 
                }
            })
            if(cardToEdit){
                this.setState({
                    titulo: cardToEdit.titulo,
                    descripcion: cardToEdit.descripcion,
                    img: cardToEdit.img
                })
            }
        }
    }

    render() {
        return (
            <div>
                {   
                    this.props.cardsList.length > 0 ? this.editCard() : null
                }
                { 
                    this.state.titulo != '' ? 
                        <NewCard  
                            editCard={this.editCard} 
                            handleChange={this.handleChange} 
                            titulo={this.state.titulo}
                            descripcion={this.state.descripcion}
                            img={this.state.img} 
                            handleSubmit={this.handleSubmit} 
                            headerH1={'Editar tarjeta'}
                            button={"Editar"} />
                    : <h1>No Puedes acceder aca</h1>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cardsList: state.cardsReducer.cards
})

const mapDispatchToProps = dispatch => {
    return{
        editCard:function(card){
            dispatch(editCard(card))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCardContainer)
