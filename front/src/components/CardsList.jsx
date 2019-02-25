import React, { Component } from 'react'
import styles from '../containers/DisplayCardsContainer/styles.css'

import { Link } from 'react-router-dom'


export class CardsList extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        let {cardsList, removeCard, editCard, orderDesc, orderAsc} = this.props;
        return (

            <React.Fragment>
                <div className={styles.containerBotones}>
                    <button className={styles.agregarCarta}>
                        <Link to='/Agregar'><i className="fas fa-plus"></i> Agregar carta</Link>
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