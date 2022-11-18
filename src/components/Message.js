import React, { Component } from 'react'
//claass compoent use of staate  is amethod that is rpvately influcend  in the component 
//that is changed within a component for change the we use set state method and click handler 
//in this exmaple.
class Message extends Component{
    constructor(){
        super()
        this.state ={
            message : 'welcome visitor'

        }
    }
    changeMessage(){
        this.setState({
           message:'Thankyou for subscribing' //A state can influence what is rendered in the browser.
        })
    }
    render(){
        return( 
            <div>
         <h1> {this.state.message}</h1>
        <button onClick={()=> this.changeMessage()}>Subscribe</button>
        </div>
        )
    }
}
export default Message