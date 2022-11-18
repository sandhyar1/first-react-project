import React, { Component } from "react";
//condition rendering
class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    //short circuit operator if we want to something or nothing
    
     return this.state.isLoggedIn && <div>Welcome sandhya</div>

    //ternary conditional operator

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Sandhya</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
    //using element variables

    //  let message
    //  if(this.state.isLoggedIn){
    //     message  =<div>welcome Sandhya</div>
    //  }else{
    //     message = <div> Welcome Guest</div>
    //  }
    //  return <div>{message}</div>

    //usindg if-else

    //     if(this.state.isLoggedIn){
    //         message  = <div>welcome Sandhya</div>
    //   }else{
    //         message = <div> Welcome Guest</div>
    //      }
    //     return (
    //         <div>
    //         <div>Welcome guest</div>
    //       <div>Welcome sandhya </div>
    //       </div>
    //     )*\}
  }
}

export default UserGreeting;
