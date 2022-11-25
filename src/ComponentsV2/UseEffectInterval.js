import React ,{useState,useEffect} from 'react'

function UseEffectInterval() {
    const [count ,setcount] =useState(0)
    
    const tick = () =>{
        //setcount(count+1)
        setcount(prevCount => prevCount +1)
    }
    
    useEffect(() => {
        const interval =setInterval(tick,1000)
        
        
        return () =>{
            clearInterval(interval)
        }
    },[])
    //},[count])//dependency list


    // function doSomething(){
    //     console.log(someprop)
    // }
    //Whenever we have to call a function in a useeffect just  define the function in useEffect don't call it i useeffect.
    // useEffect(() =>{
    // function doSomething(){
    //     console.log(someprop)
     // }
    //     
    //     const interval =setInterval(tick,1000)
    //     return () =>{
    //         clearInterval(interval)
    //     }
    // },[somprop])

  return (
    <div>{count}</div>
  )
}

export default UseEffectInterval