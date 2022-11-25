 import React ,{useState,useEffect} from 'react'
 //codintinally  run component we have to second parameter in useEffect
 // second is the array of values on ehich the effect depends upon
 //if the value don not vhange between renders simply effect don not run.



function UseEffect() {
    const [count,setCount] = useState(0) 
    const [name,setName] = useState('')
    useEffect(() =>{
        console.log("useEffect -Updating documnet title")
        document.title =`You clicked ${count} times`
    },[count])

  return (
    <div>
    <input type="text"value={name} onChange={e =>setName(e.target.value)}/>
    <button onClick={() => setCount(count+1)}>Click {count} times</button>
    </div>
  )
}

export default UseEffect