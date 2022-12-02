import {NavLink} from 'react-router-dom'


export const Navbar = () =>{
    const navLinkStyles = ({isActive}) =>{
        return {
            fontweight :isActive ? 'bold' : 'normal',
           textDecoration : isActive ? 'none' : 'underline'
        }

    }
    return(
        <nav className='primary'>
        <NavLink style={navLinkStyles}to ='/'>Home</NavLink>
        <NavLink style ={navLinkStyles}to ='/about'>About</NavLink>
        <NavLink style ={navLinkStyles}to ='/products'>Products</NavLink>
    </nav>
    )
}