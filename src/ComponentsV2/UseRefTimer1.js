import React ,{useState,useEffect,useRef} from 'react'
//useREf refrence to the dom node.value will persist

function UseRefTimer1() {
    const {timer,setTimer}  =useState(0)
    const intervalRef = useRef()

    useEffect(() =>{
        intervalRef.current  = setInterval(() =>{
            setTimer(PrevTimer =>PrevTimer+1)
        },1000)
    return ()  =>{
        clearInterval(intervalRef.cureent)
    };
},[])


  return (
    <div>
    Hook Timer -{timer}
    <button onClick= {() => clearInterval(intervalRef.current)}>ClearInterval</button>
    
    </div>
  )
}

export default UseRefTimer1