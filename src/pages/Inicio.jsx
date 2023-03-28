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
        <hr />
        <h2>Firebase</h2>
        <p>Firebase es una plataforma de desarrollo de apps que te ayuda a compilar y desarrollar las apps
        <br /> Permite trabajar con base de datos y autenticación. También provee hosting de proyectos.
            <br />
        Firebase ofrece un backend ya configurado y vamos a poder administrarlo sin necesidad de tener que configurarlo ya que no demanda conocimientos de backend.
        <br />
        Mediante Firebase puedo seleccionar un método de autenticació para los usuarios que visiten mi página: email y contraseña, teléfono, Google, Facebook, etc. Creé un método simple con email y contraseña y registré un usuario para hacer pruebas. Con los métodos <span>createUserWithEmailAndPassword</span> y <span> signInWithEmailAndPassword</span> puedo registrar un usuario e iniciar sesión respectivamente.
        
        </p>
    </>
}

export default Inicio