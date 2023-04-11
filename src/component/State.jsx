import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 2,
      }
    }
    plus = () => {
        this.setState({
            count : this.state.count + 1
        })
    }
    minus = () => {
        this.setState({
            count : this.state.count - 2
        })
    }
    
  render() {
    const {count} = this.state
    return (
      <div>
        <h1>State : {count}</h1>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    )
  }
}
