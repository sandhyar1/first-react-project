import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
    //     this.clickHandler=this.clickHandler.bind(this)
    // }
    // clickHandler(){
    //     this.setState({
    //         message:'goodbye!'
    //     })
    //     console.log(this)//it is related to js
    // }
      }
    clickHandler = () => {
        this.setState({
            message:'goodbye!!'
        })
    }//bonding in classproperty using arrow functions
    
// render( ) {
//     return (
//       <div>
//       <div>{this.state.message}</div>
//     {/*<button onClick ={this.clickHandler.bind(this)}>Click</button>*/}
//     {/*<button onClick ={()=> this.clickHandler()}>Click</button>//using arrow function*/}
//     {/*<button onClick ={()=> this.clickHandler()}>Click</button>//binding in constructor*/}
//     </div>
//     )
//   }
}
}
export default EventBind