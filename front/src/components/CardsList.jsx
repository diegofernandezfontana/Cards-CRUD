import React, { Component } from 'react'
import styles from '../containers/DisplayCardsContainer/styles.css'

import { Link } from 'react-router-dom'

import Modal from 'react-modal';
import NewCardContainer from '../containers/NewCardContainer/NewCardContainer'
//# Agregado de Modal al DOM
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')


export class CardsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }


    render() {
        let { cardsList, removeCard, editCard, orderDesc, orderAsc } = this.props;
        return (

            <React.Fragment>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <NewCardContainer closeModal={this.closeModal}/>
                </Modal>
                <div className={styles.containerBotones}>
                    <button className={styles.agregarCarta} onClick={this.openModal}>
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
                                <div className={styles.singleCard} key={card.id}>
                                    <div>
                                        <img src={card.img}></img>
                                    </div>
                                    <div className={styles.cardDescripcion}>
                                        <h1 >{card.titulo} </h1>
                                        <p> {card.descripcion} </p>
                                    </div>
                                    <div className={styles.botones}>
                                        <button className={styles.deleteCard} onClick={() => removeCard(card.id)}>
                                            Eliminar
                                    </button>
                                        <button className={styles.editCard}>
                                            <Link to={`/EditCard/${card.id}`}>
                                                Editar tarejta
                                        </Link>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </React.Fragment>

        )
    }
}

export default CardsList;