import React, { Component } from 'react'

export class ClickCounter2 extends Component {
    
    
  render() {
    const {count,incrementCount} = this.state
    return (
      <div>
      <button onClick={incrementCount}>Click {count }  times</button>
      </div>
    )
  }
}

export default ClickCounter2