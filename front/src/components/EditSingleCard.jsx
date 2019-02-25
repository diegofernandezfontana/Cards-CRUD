import React, { Component } from 'react'
import Modal from 'react-modal';

import styles from '../containers/DisplayCardsContainer/styles.css'

import EditCardContainer from '../containers/EditCardContainer/EditCardContainer'


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


class EditSingleCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this)
    }


    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        var {card, removeCard} = this.props
        return (
            <React.Fragment>
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
                        <button className={styles.editCard} onClick={() => this.openModal(card.id)}>
                            Editar tarejta
                            <Modal
                                isOpen={this.state.modalIsOpen}
                                onAfterOpen={this.afterOpenModal}
                                onRequestClose={this.closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >
                                <EditCardContainer closeModal={this.closeModal} cardID={card.id} card={card} />
                            </Modal>
                            
                        </button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default EditSingleCard;