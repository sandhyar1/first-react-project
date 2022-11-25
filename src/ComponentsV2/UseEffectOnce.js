import React ,{useState,useEffect}from 'react'

function UseEffectOnce() {
    const [x,setX] =useState(0)
    const [y,setY] =useState(0)

    const logMousePosition = e =>{
        console.log('Mouse event')
        setX(e.ClientX)
        setY(e.ClientY)
    }

    useEffect(() =>{
        console.log('useEffect called')
        window.addEventListener('mousemove',logMousePosition)

        //for clean up function,
        return() =>{
            console.log('componentunmounting code')
            window.removeEventListener('mousemove',logMousePosition)
        }
        },[])
  return (
    <div>
    HOOKs X-{x} Y-{y}
    </div>
  )
}

export default UseEffectOnce