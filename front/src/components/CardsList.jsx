import React from 'react'

import styles from '../containers/DisplayCardsContainer/styles.css'

export default ({cardsList, removeCard}) => (
    <div className={styles.cardsContainer}>
            {
                cardsList.map((card, idx) =>{
                    return(
                        <div className={styles.singleCard} key={idx}>  
                            <div>
                                <img src={card.img}></img>
                            </div>
                            <div>
                                <h1 >{ card.titulo } </h1>
                                <p> {card.descripcion} </p>
                                <button onClick={() => removeCard(idx)}>
                                    Eliminar tarejta
                                </button>           
                            </div>     
                        </div>
                    )
                })
            }
    </div>
)