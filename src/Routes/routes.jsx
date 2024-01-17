import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../Layout/Layout";
import Services from "../pages/Services/Services";
import Entreprise from "../pages/Entreprise/Entreprise";
import Contact from "../pages/Contact/Contact";
import SearchResults from "../components/Home/SearchBanner/SearchResults";
import UserProfile from './../pages/UserProfile/UserProfile';
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import AllBookings from "../pages/AllBookings/AllBookings";
import UpdateUserProfile from "../pages/UpdateUserProfile/UpdateUserProfile";
import DistanceCalculator from "../components/DistanceCalculator/DistanceCalculator";
import PrivateRoute from "./PrivateRoute";

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

                element: (
                    <PrivateRoute>
                        <SearchResults />
                    </PrivateRoute>
                ),

            },
            {
                path: "/updateUserProfile",
                element: <PrivateRoute> <UpdateUserProfile /></PrivateRoute>
            },
            {
                path: "/userProfile",
                element: <PrivateRoute><UserProfile /></PrivateRoute>
            },
            {
                path: "/allBookings",
                element: <PrivateRoute><AllBookings /></PrivateRoute>
            },
            {
                path: "/distance",
                element: <DistanceCalculator />
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