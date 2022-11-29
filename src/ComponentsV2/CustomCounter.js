import React, {useState}from 'react'
import useCounter from '../Custom Hooks/useCounter'

function CustomCounter() {
    const [count,increment,decrement,Reset] =useCounter()
  return (
    <div>
    <h2>Count={count}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default CustomCounter