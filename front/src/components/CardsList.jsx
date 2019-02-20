import React from 'react'

import styles from '../containers/DisplayCardsContainer/styles.css'

export default ({cardsList}) => (
    <div className={styles.cardsContainer}>
            {
                cardsList.map(card =>{
                    return(
                        <div className={styles.singleCard}>  
                            <div>
                                <img src={card.img}></img>
                            </div>
                            <div>
                                <h1 >{ card.titulo } </h1>
                                <p> {card.descripcion} </p>
                            </div>                
                        </div>
                    )
                })
            }
    </div>
)