import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/Navbar"

const LayoutRoot = () => {
    const navigation = useNavigation()

    return (
        <>
        <Navbar></Navbar>
        <main className="container col-lg-6 mx-auto">
            {
                navigation.state === 'loading' && (
                    <div className="alert alert-info my-5">Loading...</div>
                )
            }
            <Outlet ></Outlet>
        </main>
        <footer className="container text-bg-primary p-3 mt-5 text-center">Diseñado por <a className="text-white " href="https://marianaconti.vercel.com">Mariana Conti</a></footer>
        </>
    )
}

export default LayoutRoot