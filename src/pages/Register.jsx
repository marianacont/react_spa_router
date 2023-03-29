import { useState } from "react"
import { register } from "../config/firebase"
import { useUserContext } from "../context/UserContext"
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser"
import { Formik } from "formik"
import * as Yup from 'yup';


const Register = () => {

    const {user} = useUserContext()

    useRedirectActiveUser(user, "/dashboard")

    const onSubmit = async ({email, password}, {setSubmiting, setErrors, resetForm}) => {
        try {
            const credentialUser = await register({email, password})
            console.log(credentialUser);
            resetForm;
        } catch (error) {
            console.log(error.code)
            if (error.code === 'auth/email-already-in-use'){
                setErrors({email: 'Usuario ya registrado. Ingrese nuevo email'})
            }
        } finally {
            setSubmiting(false)
        }
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Email no válido').required('Email requerido'),
        password: Yup.string().trim().min(6, 'Mínimo 6 caracteres').required('Contraseña requerida')
    });

    return (
        <>
        <div className="container vh-100 d-inline-block">
            <h1 className="py-5 text-primary">Nuevo usuario</h1>

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
                    {/* <div className="mb-3">
                        <label htmlFor="password2" className="form-label">Ingrese nuevamente su contraseña</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password2"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            ></input>
                    </div> */}

                    <button type="submit" className="btn btn-primary">Enviar</button>

                  
                </form>
            )
        }

        </Formik>


        </div>
        

        </>
    )
}

    
    export default Register