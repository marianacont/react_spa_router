import { NavLink } from "react-router-dom"
import { useUserContext } from "../context/UserContext"

const Navbar = () =>{
    const {user, setUser} = useUserContext()
    return (
        <>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <NavLink to="/" className="btn btn-outline-primary">Home</NavLink>

                {
                    user && (
                        <>
                        <NavLink to="/dashboard" className="btn btn-outline-primary">Dashboard</NavLink>
                        <button className="btn btn-info btn-sm" onClick={() => {
                            
                            setUser(false)
                        }}>
                            Log out</button>
                        </>
                    )
                }


                <NavLink to="/blog" className="btn btn-outline-primary">Blog</NavLink>


            </div>
        
        </nav>
        
        </>
    )
}

export default Navbar