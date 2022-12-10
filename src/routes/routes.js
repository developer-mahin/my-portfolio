import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Portfolio from "../Pages/Contact/Portfolio/Portfolio";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Resume from "../Pages/Resume/Resume";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>, 
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/", 
                element: <Home></Home>
            },
            {
                path: "/home", 
                element: <Home></Home>
            },
            {
                path: "/resume", 
                element: <Resume></Resume>
            },
            {
                path: "/portfolio", 
                element: <Portfolio></Portfolio>
            },
            {
                path: "/blog", 
                element: <Blog></Blog>
            },
            {
                path: "/contact", 
                element: <Contact></Contact>
            },
        ]
    }
])