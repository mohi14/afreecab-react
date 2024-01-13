import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../Layout/Layout";
import Services from "../pages/Services/Services";
import Entreprise from "../pages/Entreprise/Entreprise";
import Contact from "../pages/Contact/Contact";
import SearchResults from "../components/Home/SearchBanner/SearchResults";
import OrderList from "../pages/OrderList/OrderList";
import UserProfile from './../pages/UserProfile/UserProfile';
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import AllBookings from "../pages/AllBookings/AllBookings";
import UpdateUserProfile from "../pages/UpdateUserProfile/UpdateUserProfile";

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
                path: "/updateUserProfile",
                element: <UpdateUserProfile />
            },
            {
                path: "/userProfile",
                element: <UserProfile />
            },
            {
                path: "/allBookings",
                element: <AllBookings />
            },

        ]
    }, {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    }
])