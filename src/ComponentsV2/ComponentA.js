import React ,{useContext} from 'react'
import {CountContext} from '../App'

function ComponentA() {
    const CountContext =useContext(CountContext)
  return (
    <div>ComponentA
    <button onClick ={()=> CountContext.countdispatch('increment')}>Increment</button>
    <button onClick= {()=> CountContext.countdispatch('decrement')}>Decrement</button>
    <button onClick ={()=> CountContext.countdispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA