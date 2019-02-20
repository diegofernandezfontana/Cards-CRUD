import React from 'react'
import styles from '../containers/DisplayCardsContainer/styles.css'

export default ({cardsList, removeCard, editCard}) => (
    <div className={styles.cardsContainer}>
            {
                cardsList.map((card) =>{
                    return(
                        <div className={styles.singleCard} key={card.id}>  
                            <div>
                                <img src={card.img}></img>
                            </div>
                            <div className={styles.cardDescripcion}>
                                <h1 >{ card.titulo } </h1>
                                <p> {card.descripcion} </p>         
                            </div>     
                            <div className={styles.botones}>
                                <button className={styles.deleteCard} onClick={() => removeCard(card.id)}>
                                    <i className="fas fa-trash"> Eliminar </i>
                                </button>      
                                <button className={styles.editCard} onClick={() => editCard()}>
                                    Editar tarejta
                                </button>      
                            </div>
                        </div>
                    )
                })
            }
    </div>
)