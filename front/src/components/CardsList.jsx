import React, { Component } from 'react'
import styles from '../containers/DisplayCardsContainer/styles.css'

import { Link } from 'react-router-dom'

import Modal from 'react-modal';
import NewCardContainer from '../containers/NewCardContainer/NewCardContainer'
import EditSingleCard from '../components/EditSingleCard'

//# Agregado de Modal al DOM
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0px',
        border: '0px'
    }
};

Modal.setAppElement('#root')


export class CardsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen1: false
        };
        this.openModal1 = this.openModal1.bind(this);
        this.closeModal1 = this.closeModal1.bind(this);
    }

    openModal1() {
        this.setState({ modalIsOpen1: true });
    }

    closeModal1() {
        this.setState({ modalIsOpen1: false });
    }



    render() {
        let { cardsList, removeCard, editCard, orderDesc, orderAsc } = this.props;
        return (

            <React.Fragment>
                {/* Modal para Agregar card */}
                <Modal
                    isOpen={this.state.modalIsOpen1}
                    onAfterOpen={this.afterOpenModal1}
                    onRequestClose={this.closeModal1}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <NewCardContainer closeModal={this.closeModal1} />
                </Modal>

                <div className={styles.containerBotones}>
                    <button className={styles.agregarCarta} onClick={this.openModal1}>
                        <i className="fas fa-plus"></i> Agregar carta {/* <Link to='/Agregar'></Link> */}
                    </button>
                    <button className={styles.agregarCarta} onClick={() => orderAsc(cardsList)}>
                        <i className="fas fa-arrow-up"></i> Ordenar Ascendente
                    </button>
                    <button className={styles.agregarCarta} onClick={() => orderDesc(cardsList)} >
                        <i className="fas fa-arrow-down"></i> Ordenar Descendiente
                    </button>
                </div>
                <div className={styles.cardsContainer}>
                    {
                        cardsList.map((card) => {
                            return (
                                <EditSingleCard card={card} removeCard={removeCard}/>
                            )
                        })
                    }
                </div>
            </React.Fragment>

        )
    }
}

export default CardsList;