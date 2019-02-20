import React, { Component } from 'react'
import { connect } from 'react-redux'

import {Link} from 'react-router-dom'

export class DisplayCardsContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Lista de cartas</h1>
                <button> <Link to='/Agregar'> Agregar carta</Link> </button>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCardsContainer)
