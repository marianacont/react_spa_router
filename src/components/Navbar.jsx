import { NavLink } from "react-router-dom"
import { useUserContext } from "../context/UserContext"

const Navbar = () =>{
    const {user, setUser} = useUserContext()
    return (
        <>
        <nav className="navbar navbar-dark bg-dark sticky-top">
            <div className="container col-lg-6 mx-auto">
                <div>
                    <NavLink to="/" className="btn btn-outline-primary">Inicio</NavLink>
                    <NavLink to="/blog" className="btn btn-outline-primary mx-2">Blog</NavLink></div>
                
                <div> <NavLink to="/login" className="btn btn-outline-success mx-2">Ingresar</NavLink>
                <NavLink to="/register" className="btn btn-outline-success">Registro</NavLink></div>
               



            </div>
        
        </nav>
        
        </>
    )
}

export default Navbar