

import React, { Component } from 'react'

export class ClassMOuse extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       x:0,
       y:0
    }
  }
  logMousePosition = e =>{
    this.setState({x:e.clienX ,y:e.clienY})
  }
  componentDidMount(){
    window.addEventListener('mousemove',this.logMousePosition)
  }
  componentWillUnmount(){
    window.removeEventListener('mousemove',this.logMousePosition)
  }
  render() {
    return (
      <div>
         X-{this.state.x} Y-{this.state.y}
      </div>
    )
  }
}

export default ClassMOuse