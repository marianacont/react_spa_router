import { useState } from "react"
import { register } from "../config/firebase"
import { useUserContext } from "../context/UserContext"
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser"


const Register = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const {user} = useUserContext()

    useRedirectActiveUser(user, "/dashboard")

    const handleSubmit = async (e) => {
        e.preventDefault() 
        try {
            const credentialUser = await register({email, password})
            console.log(credentialUser)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <div className="container vh-100 d-inline-block">
            <h1 className="py-5 text-primary">Nuevo usuario</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            ></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            ></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password2" className="form-label">Ingrese nuevamente su contraseña</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password2"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            ></input>
                    </div>

                    <button type="submit" className="btn btn-primary">Enviar</button>

                  
                </form>
        </div>
        

        </>
    )
}

    
    export default Register