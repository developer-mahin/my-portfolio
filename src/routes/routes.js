import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import ContactPage from "../Pages/ContactPage/ContactPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Portfolio from "../Pages/Portfolio/Portfolio";
import PortfolioDetails from "../Pages/PortfolioDetails/PortfolioDetails";
import Resume from "../Pages/Resume/Resume";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
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
                path: "/portfolio-details/:id",
                element: <PortfolioDetails></PortfolioDetails>,
                
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/contact",
                element: <ContactPage></ContactPage>
            },
        ]
    }
])