import React, { Component } from 'react'
import ComponentE from './ComponentE'
//Context only work with class components
//you can subscribe only single context using contextType.
 class ComponentC extends Component {
  render() {
    return (
      <div>
       <ComponentE />
      </div>
    )
  }
}

export default ComponentC