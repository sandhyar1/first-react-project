import React,{useState} from 'react'

function UseStateprev() {
    const intialCount = 0
    const[Count, setCount] = useState(intialCount)
    
    
    const increamentFive = () =>{
        for(let i=0;i<5;i++){
            setCount(prevCount => prevCount +1)
        }
    }
 
 
    return (
    <div>
    Count:{Count}
      <button onClick ={()  =>setCount(intialCount)}>Reset</button>
      <button onClick ={()  =>setCount(prevCount => prevCount +1)}>Increment</button>
      <button onCli={()  =>setCount(prevCount => prevCount -1)}>Decrement</button>
      <button onClick={increamentFive}>increamentFive</button>
    </div>
  )
}

export default UseStateprev