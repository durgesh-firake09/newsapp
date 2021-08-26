
import React, { Component } from 'react'

export class App extends Component {
  name = "Durgesh";
  render() {
    return (
      <div>
        <h1>First Class Based Component {this.name}</h1>
      </div>
    )
  }
}

export default App

