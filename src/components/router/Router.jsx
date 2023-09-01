import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from '../outlate/home/Home';
import Shop from '../outlate/shop/Shop';
import Cart from '../outlate/cart/Cart';
import Blog from '../outlate/blog/Blog';
import ErrorPage from '../errorPage/ErrorPage';

import Signin from '../outlate/signin/Signin';
import Signup from '../outlate/signup/Signup';
import Details from '../outlate/shop/detailsProduct/productDetails/Details';
import PrivateRoute from '../Private/PrivateRoute';
import AddToy from '../outlate/addToy/AddToy';
import MyToy from '../outlate/my-toy/MyToy';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/shop',
        element: <Shop></Shop>,
        loader: () => {
          return fetch('http://localhost:5000/products');
        },
      },
      {
        path: '/product/details/:id',
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/products/${params.id}`);
        },
      },
      {
        path: '/cart',
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/add_toy',
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: '/my_toy',
        element: (
          <PrivateRoute>
            <MyToy></MyToy>
          </PrivateRoute>
        ),
      },
      {
        path: '/sign_in',
        element: <Signin></Signin>,
      },
      {
        path: '/sign_up',
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>,
  },
]);
