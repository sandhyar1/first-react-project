import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    incrementCount =() =>{
        this.setState({
            count:this.state.count+1
        })
    }
    componentDidMount() {
      document.title=`Clicked ${this.state.count} times`
    }
    //Conditionally ru  componet
    componentDidUpdate(prevProps,prevState){
        //document.title =`Clicked ${this.state.count} times`
        if(prevState.count === this.state.count)
        console.log("Updated document title")
      document.title =`Clicked ${this.state.count} times`
    }

  render() {
    return (
      <div>
      <input type="text" value={this.state.name} onChange={e =>{
        this.setState({name:e.target.value})
      }}
      />
      <button onClick={this.incrementCount}>Click {this.state.count +1 }  times </button>
      </div>
    )
  }
}

export default ClassCounter