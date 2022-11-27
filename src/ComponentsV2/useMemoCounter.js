import React,{useState} from 'react'

function useMemoCounter() {
    const [Counterone,setCounterone] =useState(0)
    const[counterTwo,setCounterTwo] = useState(0)

    const incrementOne= () =>{
        setCounterone(Counterone+1)
    }
    const incrementTwo =() =>{
        setCounterTwo(counterTwo+1)
    }
  return (
    <div>
    <div>
    <button onClick ={incrementOne}>Counterone -{Counterone}</button>
    </div>
    <div>
    <button onClick ={incrementTwo}>CounterTwo -{counterTwo}</button>
    
    
    </div>
    </div>
  )
}

export default useMemoCounter