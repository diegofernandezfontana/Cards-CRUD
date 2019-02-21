import React, { Component } from 'react'
import { connect } from 'react-redux'

import NewCard from '../../components/NewCard'

import { addCard } from '../../redux/actions/CardActions'


export class NewCardContainer extends Component {
    constructor(props){
        super(props)
        this.state ={
            titulo: '',
            descripcion: '',
            img: '',
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(evt){
        evt.preventDefault();
        //SETEO DE KEY UNICA
        let key = Math.floor(Math.random() * 100000000000) + 1  
        
        let formulario = this.state
        if(formulario.titulo != ''){
            if(formulario.descripcion != ''){
                if(formulario.img == ''){
                    formulario.img = 'https://www.biography.com/.image/t_share/MTQ4MDU5NDU0MzgwNzEzNDk0/lionel_messi_photo_josep_lago_afp_getty_images_664928892_resizedjpg.jpg'
                }
                formulario.titulo = formulario.titulo.toLocaleLowerCase();
                formulario.id = key
                this.props.addCard(formulario)
                this.props.history.push('/')
            }else{
                alert('Por favor ingrese descripcion')
            }
        }else{
            alert('Por favor ingrese titulo')
        }
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        return (
            <div>
                <NewCard 
                    handleSubmit={this.handleSubmit} 
                    handleChange={this.handleChange}
                    titulo={this.state.titulo}
                    descripcion={this.state.descripcion}
                    img={this.state.img}  
                    headerH1={'Agregar tarjeta'}
                    button={"Agregar"}  
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
    return{

        addCard:function(card){
            dispatch(addCard(card))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCardContainer)
