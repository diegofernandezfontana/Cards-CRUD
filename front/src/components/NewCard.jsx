import React from 'react';
import { Link } from 'react-router-dom'

import styles from '../containers/NewCardContainer/styles.css'

export default ({handleSubmit, handleChange, titulo, img, descripcion, button, headerH1, closeModal}) => (
    <React.Fragment>

    <div className={styles.newCardContainer}>
        <div className={styles.singleCard}>

            <form onSubmit={(evt) => handleSubmit(evt)}>
                <h1> { headerH1 } </h1>

                <input value={titulo} name="titulo" placeholder="Titulo" onChange={(evt) => handleChange(evt)}/>               
                <input value={descripcion} name="descripcion"  placeholder="Descripcion" onChange={(evt) => handleChange(evt)}/>
                <input value={img} name="img" placeholder="Image" onChange={(evt) => handleChange(evt)}/>

                <button className={styles.botonsubmit} type='submit'>
                    <p>{button} </p>
                </button>
                <button className={styles.botonBack} onClick={closeModal}>
                    Cerrar
                </button>
                
            </form>
        </div>
    </div>
    </React.Fragment>
)