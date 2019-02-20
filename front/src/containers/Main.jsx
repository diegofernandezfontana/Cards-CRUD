import React, { Component } from 'react';
import { connect } from 'react-redux'

class Main extends Component {
    constructor(props) {
        super(props);   
    }
    
    render() {
        return (
            <div>
                <h1>Funciona!</h1>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);



