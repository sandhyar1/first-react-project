import React, { Component } from 'react'
import Memo from './Memo'
import PureComp from './PureComp'
import RegComp from './RegComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Sandhya'
        }
    }
componentDidMount(){
    setInterval(() =>{
        this.setState({
       name:'Sandhya'
})
},2000)
}
  render() {
    console.log('******************Parent componet render****************************************')
    return (
      <div>ParentComp
      <Memo  name ={this.state.name} />
      {/* <RegComp name={this.state.name}></RegComp>
    // <PureComp name={this.state.name}></PureComp>*/}
      </div>
    )
  }
}

export default ParentComp