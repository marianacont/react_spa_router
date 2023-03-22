import { useNavigate } from "react-router-dom"
import { useUserContext } from "../context/UserContext"

const Inicio = () => {

    const {setUser} = useUserContext()
    const navigate = useNavigate()

    const handleLogin = () => {
        setUser(true);
        navigate('/dashboard')
    }

    return <>
        <h1 className="py-5 text-center">Bienvenidos</h1>

        <div className="text-center m-2 mb-5 p-4 border border-info border-3 rounded">
            <button 
            onClick={handleLogin} 
            className="btn btn-info" 
            type="button">
                Iniciar sesión</button>
        </div>


        <p>Esta es una app o SPA creada con React en la que utilizamos React Router.
        <br />
        Incluimos página de error con el hook de React Router llamado useRouteError.
        <br />
        Creo un Layout general, que pasará a ser la página de inicio y en router envuelve al resto de los componentes. En su estructura, para llamar a las distintas secciones, utilizo Outlet de React Router.
        <br />
        <strong>Loader:</strong> Una de las ventajas de React Router es que tiene incorporado unas funcionalidades para cargar datos: Loader y useLoaderData. Se hace mediante una función que debe devolver una promesa. Se configura dentro del archivo de configuración (router).
        <br />
        <strong>useNavigation:</strong> Otro hook que utilizamos es useNavigation, que permite acceder a la navegación.  Crea indicadores de navegación pendientes.
        <br />
        <strong>React Context API:</strong> Context provee una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel. Si se busca una solución más robusta, se recomienda Redux. 
        <br />
        <strong>Create Context:</strong> Crea un objeto Context. Cuando React renderiza un componente que se suscribe a este objeto Context, este leerá el valor de contexto actual del Provider más cercano en el árbol.
        <br />
        <strong>UseNavigate:</strong> un hook brindado por react router dom especializado, que permite hacer el redireccionamiento dentro del componente.
        </p>
        <hr />
        <p>
        <strong>Aclaración:</strong> Este sitio simula un inicio de sesión, pero no contiene ninguna funcionalidad de backend, por lo que sólo se trata de un ejercicio práctico para comprender el uso de rutas privadas.
        </p>
    </>
}

export default Inicio