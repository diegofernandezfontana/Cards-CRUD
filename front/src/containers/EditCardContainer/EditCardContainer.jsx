import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewCard from '../../components/NewCard';

import { editCard } from '../../redux/actions/CardActions'

import _ from 'lodash'

export class EditCardContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titulo: '',
            descripcion: '',
            img: '',
            id: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        var cardIdToEdit = this.props.cardID
        if (this.state.titulo == '') {
            let cardToEdit = _.find(this.props.cardsList, function (card) {
                //Le asigna a cardToEdit los valores de la card que coincida con el id
                if (parseInt(card.id) == parseInt(cardIdToEdit)) {
                    return card;
                }
            })
            this.setState({
                titulo: cardToEdit.titulo,
                descripcion: cardToEdit.descripcion,
                img: cardToEdit.img,
                id: cardIdToEdit
            })
        }
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        this.props.editCard(this.state)
        this.props.closeModal()

    }

    render() {
        console.log(this.props)
        //console.log(this.props, 'THIS.PROPS')
        return (
            <div>
                {
                    <NewCard
                        editCard={this.editCard}
                        handleChange={this.handleChange}
                        titulo={this.state.titulo}
                        descripcion={this.state.descripcion}
                        img={this.state.img}
                        handleSubmit={this.handleSubmit}
                        headerH1={'Editar tarjeta'}
                        button={"Editar"} 
                        closeModal={this.props.closeModal}
                        />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cardsList: state.cardsReducer.cards
})

const mapDispatchToProps = dispatch => {
    return {
        editCard: function (card) {
            dispatch(editCard(card))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCardContainer)
