import { useContext } from 'react';
import { UserContext } from '../context/ContextPass';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  const location = useLocation();

  if (user) {
    return children;
  } else {
    return (
      <Navigate
        to='/sign_in'
        state={{ from: location }}
        replace={true}
      ></Navigate>
    );
  }
};

export default PrivateRoute;
  