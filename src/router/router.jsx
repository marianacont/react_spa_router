import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layout/LayoutRoot"
import Inicio from "../pages/Inicio"
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard";
import Blog from "../pages/Blog";
import Post, { loaderPost } from "../pages/Post";
import NotFound from "../pages/NotFound";
import loaderBlog from "../components/LoaderBlog";
import LayoutPrivate from "../layout/LayoutPrivate";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutRoot></LayoutRoot>,
        errorElement: <NotFound />,
        children: [
            {
                errorElement: <NotFound></NotFound>,
                children: [
                    {
                        index: true,
                        element: <Inicio></Inicio>,
                    },
                    {
                        path: "/login",
                        element: <Login/>,
                    },
                    {
                        path:"/register",
                        element: <Register />
                    },
                    {
                        path: "/blog",
                        element: <Blog></Blog>,
                        loader: loaderBlog
                    },
                    {
                        path: "/blog/:id",
                        element: <Post />,
                        loader: loaderPost,
                    },
                    {
                        path: "/dashboard",
                        element: < LayoutPrivate/>,
                        children: [
                            {    
                                index: true,
                                element: <Dashboard />
                            },
                        ]
                    }    
                ]
            },
               
        ]
    }
    
])