import {useAuth }  from './Auth'
import {useNavigate} from 'react-router-dom'

export const Profile = () =>{
    const auth =useAuth()
    const   Navigate = useNavigate();
    

const handleLogout = () =>{
    auth.logout()
    Navigate('/')

}

    return <div>Welcome {auth.user}
    <button onClick={handleLogout}>Logout</button></div>
}