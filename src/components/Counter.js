//state in class component
//never chnage the state directly beacuse it change sin cosole but not in ui it will not re-rendered the method 
//by using setstate method we can make changes in ui it will rendered the method in ui
import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count :0
        }
    }
    increment(){
        // this.state.count = this.state.count+1
        // console.log(this.state.count)
        //setstate method has 2 parameters a callback function and then 1 parameter
        //if we first update the value then want to change then we use callback faunction 
    //     this.setState({
    //         count:this.state.count+1
    //     },
    //     () => {
    //         console.log('callback value'+this.state.count)
    //     }
    //     )
   this.setState((prevState ,props) => ({
    count :prevState.count + 1
   }))
   console.log(this.state.count)
}
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
  render() {
    return (
        <div>
        <div>Count -{this.state.count}</div>
        <button onClick = {() => this.incrementFive()}>Increment</button>
        </div>
    
    )
  }
}

export default Counter