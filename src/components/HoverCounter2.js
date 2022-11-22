import React, { Component } from 'react'


class HoverCounter2 extends Component {
    
  render() {
    const {count,incrementCount} = this.state
    return (
     <h2 onMouseOver={incrementCount}>Hover {count} times </h2>
    )
  }
}

export default HoverCounter2