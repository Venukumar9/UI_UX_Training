import React, { Component } from 'react'

export default class CounterClass extends Component {
  constructor(props){
    super(props);
    this.state={
        count:0
    }
  }
  increment=()=>{
    this.setState({count:this.state.count+1})
  }
  decrement=()=>{
    this.setState({count:this.state.count-1})
  }

  render() {
    return (
      
      <div>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <h2>Count :{this.state.count}</h2>
      </div>

    )
  }
}
