import React ,{useState} from 'react'


function UseStateCounter() {
const[count,setCount]  =  useState(0)//Array destructruing

  return (
    <div>
    <button onClick= {() => setCount(count+1)}>Count {count}</button>
    </div>
  )
}

export default UseStateCounter