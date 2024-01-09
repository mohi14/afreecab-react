import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../Layout/Layout";
import Services from "../pages/Services/Services";
import Entreprise from "../pages/Entreprise/Entreprise";
import Contact from "../pages/Contact/Contact";
import SearchResults from "../components/Home/SearchBanner/SearchResults";
import OrderList from "../pages/OrderList/OrderList";
import UserProfile from './../pages/UserProfile/UserProfile';

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/entreprise",
                element: <Entreprise />
            },
            {
                path: "/contact",
                element: <Contact />
            }
            ,
            {
                path: "/searchResults",
                element: <SearchResults />
            }
            ,
            {
                path: "/orderList",
                element: <OrderList />
            }
            ,
            {
                path: "/userProfile",
                element: <UserProfile />
            }
        ]
    }


])