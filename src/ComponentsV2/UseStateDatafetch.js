import React,{useEffect,useState} from 'react'
import axios from 'axios'

function UseStateDatafetch() {
    const [loading,setLoading] =useState(true)
    const[error,setError] =useState('')
    const [ post ,setPost] = useState({})
//we are using three state variables.
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response =>{
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(error =>{
            setLoading(false)
            setPost({})
            setError('Something went wrong')
        })

    } ,[])
  return (
    <div>
    {loading ?'Loading': post.title}
    {error ? error : null}
    
    
    </div>
  )
}

export default UseStateDatafetch