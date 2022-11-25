import React ,{useState,useEffect} from 'react'
//UseEffect runs every Render its is placed inside the component 
//placed inside the component by using this we can easily access props and stateswithout having to right any additional codes

function UseEffect() {
    const {count,setCount} = useState(0) 
    useEffect(() =>{
        document.title =`You clicked ${count} times`
    })

  return (
    <div>
    <button onClick={() => setCount(count+1)}>Click {count} times</button>
    </div>
  )
}

export default UseEffect