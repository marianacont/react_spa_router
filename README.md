# react_spa_router

Esta es una app o SPA creada con React en la que utilizamos React Router.
Incluimos página de error con el hook de React Router llamado useRouteError.
Creo un Layout general, que pasará a ser la página de inicio y en router envuelve al resto de los componentes. En su estructura, para llamar a las distintas secciones, utilizo Outlet de React Router.
Loader: Una de las ventajas de React Router es que tiene incorporado unas funcionalidades para cargar datos: Loader y useLoaderData. Se hace mediante una función que debe devolver una promesa. Se configura dentro del archivo de configuración (router).
useNavigation: Otro hook que utilizamos es useNavigation, que permite acceder a la navegación. Crea indicadores de navegación pendientes.
React Context API: Context provee una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel. Si se busca una solución más robusta, se recomienda Redux.
Create Context: Crea un objeto Context. Cuando React renderiza un componente que se suscribe a este objeto Context, este leerá el valor de contexto actual del Provider más cercano en el árbol.
UseNavigate: un hook brindado por react router dom especializado, que permite hacer el redireccionamiento dentro del componente.

---

Aclaración: Este sitio simula un inicio de sesión, pero no contiene ninguna funcionalidad de backend, por lo que sólo se trata de un ejercicio práctico para comprender el uso de rutas privadas.