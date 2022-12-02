import {Outlet,useSearchParams} from 'react-router-dom'
export const Users = () =>{
    const [SearchParams,setSearchParams] =useSearchParams()
    const showActiveUsers =SearchParams.get('filter')==='active'
    return(
        <div>
        <h1>User 1</h1>
        <h1>User 2</h1>
        <h1>User 3</h1>
        <Outlet/>
        <div>
        <button onClick= {() =>setSearchParams({filters:'active'})}>Active User</button>
        <button onClick={() =>setSearchParams({})}>Reset Filter</button>
        </div>
        {
            showActiveUsers? (
                <h2>show ActivenUsers</h2>
             ) :(
                <h2>Showing all users</h2>
             )
        }
        </div>

    )
}