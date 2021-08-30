import React, { Component } from 'react'

export class Homepage extends Component {
    constructor(props){
        super(props)
        this.props.setProgress(0);
    }
    render() {
        return (
            <>
                <h1 style={{marginTop:"80px"}}>Top News - Homepage</h1>   
            </>
        )
    }
}

export default Homepage
