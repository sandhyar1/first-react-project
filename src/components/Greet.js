import React from 'react'

// function Greet(){
//     return <h1> Hello Sandhya </h1>
// }
//this is called named export in importing use the component in{} it works correcltly
//  export const Greet = (props) => {
//     console.log(props)
//     return (
//         <div>
//     <h1>
//     Hello  {props.name} a.k.a {props.heroName}
//     </h1>
//     {props.children}
//     </div>
//     )
//  }

// export default  Greet
//DEstructing of props and state
//it is a paarameter destructuring
//  const Greet = (name,heroName) => {
//     return (
//      <div>
//     <h1>
//     Hello  {name} a.k.a {heroName}
//     </h1>
//     </div>
//     )
//  }
//  export default Greet
 //2.methid fro destructrrunting

 const Greet = props => {
    const {name,heroName} = props
    return (
     <div>
    <h1>
    Hello  {name} a.k.a {heroName}
    </h1>
    </div>
    )
 }
 export default Greet