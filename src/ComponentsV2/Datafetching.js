import React,{useState,useEffect} from 'react'
import axios from 'axios'
//datafetching by useEffect posts by empty dependecy 

// function Datafetching() {
//     const [post,setPost] = useState([])

    

//     useEffect(() =>{
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then(res  =>{
//             console.log(res)
//             setPost(res.data)
//         })
//         .catch(err =>{
//             console.log(err)
//         })

//     },[])
//   return (
//     <div>
//     
//     <ul>
//     {
//         post.map(post => <li key={post.id}>{post.title}</li>
//     )}
//     </ul>
//     </div>
//   )
// }

// export default Datafetching


//how to post invidual data using http post fetch 
// function Datafetching() {
//     const [post,setPost] = useState({})
//     const [id,setId] = useState(1)
    
    

//     useEffect(() =>{
//         axios.get(`https://jsonplaceholder.typicode.com/posts/1${id}`)
//         .then(res  =>{
//             console.log(res)
//             setPost(res.data)
//         })
//         .catch(err =>{
//             console.log(err)
//         })

//     },[id])
//   return (
//     <div>
//     <input type="text" value={id} onChange={e => setId(e.target.value)}/>
//     <div>{post.title}</div>
//     {/*<ul>
//     {
//         post.map(post => <li key={post.id}>{post.title}</li>
//     )}
//     </ul>*/}

//     </div>
//   )
// }

// export default Datafetching


//how to trigger the button in usEffect
function Datafetching() {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClck] = useState(1)

    const handleClick= () =>{
        setIdFromButtonClck(id)
    }
    
    

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1${idFromButtonClick}`)
        .then(res  =>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })

    },[idFromButtonClick])
  return (
    <div>
    <input type="text" value={id} onChange={e => setId(e.target.value)}/>
    <button type="button" onClick={handleClick}>Fetch Post</button>
    <div>{post.title}</div>
    {/*<ul>
    {
        post.map(post => <li key={post.id}>{post.title}</li>
    )}
    </ul>*/}

    </div>
  )
}

export default Datafetching