import React ,{useEffect,useRef}from 'react'
//this hook is help us toh access dom node directly in functional component.

function UseRef1() {

const inputRef=useRef(null)//create a ref


    useEffect(() =>{
        //focus on input element
   inputRef.current.focus()
    },[])
  return (
    <div>
    <input ref={inputRef} type='text' />
   </div>
  )
}

export default UseRef1