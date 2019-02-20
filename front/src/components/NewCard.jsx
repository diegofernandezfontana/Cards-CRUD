import React from 'react';

import styles from '../containers/NewCardContainer/styles.css'

export default ({handleSubmit, handleChange, titulo, img, descripcion}) => (
    <div className={styles.newCardContainer}>
        <div className={styles.singleCard}>

            <form onSubmit={(evt) => handleSubmit(evt)}>
                <h1>Nueva Tarjeta</h1>

                <input value={titulo} name="titulo" placeholder="Titulo" onChange={(evt) => handleChange(evt)}/>               
                <input value={descripcion} name="descripcion"  placeholder="Descripcion" onChange={(evt) => handleChange(evt)}/>
                <input value={img} name="img" placeholder="Image" onChange={(evt) => handleChange(evt)}/>

                <button type='submit'>
                    Agregar
                </button>
                
            </form>
        </div>
    </div>
)