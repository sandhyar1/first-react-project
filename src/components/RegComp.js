import React, { Component } from 'react'

class RegComp extends Component {
    
  render() {
    console.log("regular method render")
    return (
      <div>RegComp {this.props.name}
      </div>
    )
  }
}

export default RegComp