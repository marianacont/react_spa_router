import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginAuth } from "../config/firebase"
import { useUserContext } from "../context/UserContext"


const Login = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate()
    const {user} = useUserContext()

    useEffect(() => {
        if(user) {
            navigate('/dashboard')
        }
    }, [user])


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('submit')
        try {
            const credentialUser = await loginAuth({email, password})
            console.log(credentialUser)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <div className="container vh-100 d-inline-block">
            <h1 className="py-5 text-primary">Login</h1>
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

                    <button type="submit" className="btn btn-primary">Enviar</button>

                    <div className="blockquote-footer py-5">Para probar el login, ingresá los datos iguientes:
                        <br />Email: juan@test.com
                        <br />Contraseña: 123456
                    </div>
                </form>
        </div>
        

        </>
    )
}

    
    export default Login