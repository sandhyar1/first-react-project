import React from "react"
import person from './person'
//list rendering and lists and keys16
// function NameList() {
//     const persons = [
//         {
//             id:1,
//             name:"bruce",
//             age:19,
//             skill:"react"
//         },
//         {
//              id :2,
//             name:"diruce",
//             age: 19,
//             skill:"react"
//         },
//         {
//             id: 3,
//             name:"bce",
//             age:19,
//             skill:"react"
//         }
//     ]
// //   const names = ["bruce", "diana", "clark"];
// //   const namelist = names.map((name) => <h2>{name}</h2>);
// const personlist = persons.map( person  => 
//     <person key ={person.name} person={person}  />)
//      return <div>{personlist}</div>
// }

// export default NameList;
function NameList(){
    const names =['bruce','clark','diana']
    const persons = [...
    const nameList = names.map((name,index) => <h2 key ={index}>{index} {name}</h2>)
    return <div>{nameList}</div>
}
export default NameList;

