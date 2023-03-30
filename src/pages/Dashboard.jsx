import { logout } from "../config/firebase";

const Dashboard = () => {
    
    const handleLogOut = async() => {
        try {
            await logout();
        } catch(error){
            console.log(error)
        }
    }
    
    return <>

        <h1 className="my-5 text-center">Dashboard</h1>
        <h2>Bienvenido Usuario</h2>
        <p>Esta es una ruta protegida a la que solo tienen acceso los usuarios que han iniciado sesión correctamente</p>

        <button onClick={handleLogOut} className="btn btn-success" >Cerrar sesión</button>
        <div className="bg-div"></div>
    </>
}

export default Dashboard