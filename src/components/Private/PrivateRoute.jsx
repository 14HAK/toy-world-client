import { useContext } from 'react';
import { UserContext } from '../context/ContextPass';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  console.log(location);

  if (!user) {
    return (
      <Navigate to='/sign_in' state={{ from: location }} replace></Navigate>
    );
  } else {
    return children;
  }
};

export default PrivateRoute;
