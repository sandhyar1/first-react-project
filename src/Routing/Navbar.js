import {NavLink} from 'react-router-dom'
import {useAuth} from './Auth'


export const Navbar = () =>{
    const navLinkStyles = ({isActive}) =>{
        return {
            fontweight :isActive ? 'bold' : 'normal',
           textDecoration : isActive ? 'none' : 'underline'
        }

    }
    const auth=useAuth()
    return(
        <nav className='primary'>
        <NavLink style={navLinkStyles}to ='/'>Home</NavLink>
        <NavLink style ={navLinkStyles}to ='/about'>About</NavLink>
        <NavLink style ={navLinkStyles}to ='/products'>Products</NavLink>
        <NavLink style ={navLinkStyles}to ='/profile'>Profile</NavLink>
        {
            (!auth.user) && (
                <NavLink style ={navLinkStyles}to ='/login'>Login</NavLink>

            )
        }
    </nav>
    )
}