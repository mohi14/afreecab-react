import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
const auth= localStorage.getItem('token')
    
    const location = useLocation();
    return auth ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;