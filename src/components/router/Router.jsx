import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from '../outlate/home/Home';
import Shop from '../outlate/shop/Shop';
import Cart from '../outlate/cart/Cart';
import Blog from '../outlate/blog/Blog';
import ErrorPage from '../errorPage/ErrorPage';
import AddToy from '../outlate/addToy/AddToy';

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
        path: '/cart',
        element: <Cart></Cart>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/add_toy',
        element: <AddToy></AddToy>,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>,
  },
]);
