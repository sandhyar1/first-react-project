import React,{useState}from 'react'

function useCounter(intialState = 0) {
    const [count,setCount] =useState(intialState)
const increment = ()  =>{
    setCount(prevCount => prevCount+1)
}
const decrement = ()  =>{
    setCount(prevCount => prevCount-1)
}
const Reset = ()  =>{
    setCount(0)
}


  return [count,increment,decrement,Reset]
}

export default useCounter