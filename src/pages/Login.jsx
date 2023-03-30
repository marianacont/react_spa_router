import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { loginAuth } from "../config/firebase"
import { useUserContext } from "../context/UserContext"
import { Formik } from "formik";
import * as Yup from 'yup';


const Login = () => {

    const navigate = useNavigate()
    const {user} = useUserContext()

    useEffect(() => {
        if(user) {
            navigate('/dashboard')
        }
    }, [user])


    const onSubmit = async ({email, password}, {setSubmiting, setErrors, resetForm}) => {
        try {
            const credentialUser = await loginAuth({email, password});
            console.log(credentialUser);
            resetForm();
        } catch (error) {
            console.log(error.code);
            if (error.code === 'auth/user-not-found'){
                setErrors({email:'Usuario no registrado'})
            }
            if(error.code === 'auth/wrong-password'){
                setErrors({password: 'Contraseña incorrecta'})
            }

        } finally {
            setSubmiting(false);
        }
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Email no válido').required('Email requerido'),
        password: Yup.string().trim().min(6, 'Mínimo 6 caracteres').required('Contraseña requerida')
    })

    return (
        <>
        <div className="container vh-75 w-75 mt-5">
        <div className="row align-items-stretch">
            <div className="img-log col d-none d-md-block col-md-5 col-md-5 col-xl-6">
            </div>

            <div className="col">
            <h1 className="py-5 text-primary">Login</h1>

            {/* Formik */}
            <Formik
                initialValues={{email: '', password:''}}
                onSubmit={onSubmit}
                validationSchema={validationSchema}>

                {
                    ({values, handleSubmit, handleChange, errors, touched, handleBlur, isSubmitting}) => (
                        <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email"
                                value={values.email}
                                onChange={handleChange}
                                name='email'
                                onBlur={handleBlur}
                                ></input>
                            {
                                errors.email && touched.email && errors.email
                            }
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password"
                                value={values.password}
                                onChange={handleChange}
                                name='password'
                                onBlur={handleBlur}
                                ></input>

                            {
                                errors.password && touched.password && errors.password
                            }
                        </div>
    
                        <button type="submit"
                            disabled={isSubmitting}
                            className="btn btn-primary">
                                Enviar</button>
    
                        <div className="blockquote-footer py-5">Para probar el login, ingresá los datos iguientes:
                            <br />Email: juan@test.com
                            <br />Contraseña: 123456
                            <br />O bien <Link to='/Register'>creá un nuevo usuario</Link> 
                        </div>
                    </form>
                    )
                }
            </Formik>
            </div>
            </div>
        </div>
        

        </>
    )
}

    
    export default Login