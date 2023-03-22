import { useRouteError, Link } from "react-router-dom"

const NotFound = () => {
    const error = useRouteError()
    return (
        <div className="container">
        <div className="m-3 p-3 border border-danger border-3 text-center">
            <h1 className="">404</h1>
            <p>Página no encontrada</p>
            <p>{error.statusText || error.message}</p>
            <button className="btn btn-danger">
                <Link to="/" className="text-light">
                    Volver al home</Link></button>
        </div>
        </div>
    )
}

export default NotFound