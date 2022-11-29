import React,{useState,useMemo} from 'react'
//it only recomputes the cached value that one of the depebndency gonna change and that avoida the expensive calculation.
//on every render.It is use for performance optimization.
//cache the function -useCallback
//cache the result-useMemo

function UseMemoCounter() {
    const [counterOne,setcounterOne] =useState(0)
    const[counterTwo,setcounterTwo] = useState(0)

    const incrementOne= () =>{
        setcounterOne(counterOne+1)
    }
    const incrementTwo =() =>{
        setcounterTwo(counterTwo+1)
    }
   const isEven= useMemo(() => {
      let i=0
       while(i<2000000) i++
       return counterOne %2 === 0
    },[counterOne])
  
    //   const isEven =>{
    //   let i=0
    //   while(i<2000000) i++//in this ui is getting slow and ui updates and both the counter slow because it is rendering.
    //                        //by usingmemo hook it is solved.
    //   return counterOne %2 === 0
    // }
  return (
    <div>
    <div>
    <button onClick ={incrementOne}>Counterone -{counterOne}</button>
    <span>{isEven  ? 'Even' : 'odd'}</span>
    </div>
    <div>
    <button onClick ={incrementTwo}>CounterTwo -{counterTwo}</button>
    
    
    </div>
    </div>
  )
}

export default UseMemoCounter