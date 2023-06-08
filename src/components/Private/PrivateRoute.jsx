import React, { useContext } from 'react';
import { UserContext } from '../context/ContextPass';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to={'/sign_in'}></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;
