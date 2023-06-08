import { Link } from 'react-router-dom';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { UserContext } from '../context/ContextPass';

const Header = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <header>
      <header className='lg:px-16 px-8 bg-[#DEB4B4] shadow-md py-4 md:py-0'>
        <div className='container mx-auto flex flex-wrap items-center'>
          <div className='flex-1 flex justify-between items-center'>
            <form
              action='/search'
              className='flex flex-wrap justify-between md:flex-row'
            >
              <input
                type='search'
                name='query'
                placeholder='Search'
                required='required'
                className='md:w-[40rem] sm:w-full h-10 px-4 text-xl text-slate-500 bg-white border border-[#DEB4B4] rounded-md xl:transition-all xl:duration-300 dark:bg-gray-600 dark:text-gray-200 dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring focus:ring-[tomato] dark:placeholder-gray-400'
              />
            </form>
          </div>

          <label
            htmlFor='menu-toggle'
            className='md:hidden block hover:cursor-pointer'
          >
            <svg
              className='fill-current text-slate-600 hover:text-[#F6E1E1]'
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 20 20'
            >
              <title>menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
            </svg>
          </label>
          <input className='hidden' type='checkbox' id='menu-toggle' />

          <div
            className='hidden md:flex md:items-center md:w-auto w-full'
            id='menu'
          >
            <nav>
              <ul className='md:flex items-center justify-between text-base pt-4 md:pt-0'>
                <li>
                  <Link
                    to={'/cart'}
                    className='md:px-4 py-2 md:py-4 px-0 block text-slate-700 hover:text-[#F6E1E1] '
                    href=''
                  >
                    <span className='text-2xl'>
                      <FaShoppingCart></FaShoppingCart>
                    </span>
                  </Link>
                </li>
                <li>
                  <button className='bg-transparent hover:bg-[#f6e1e1] hover:text-slate-700 font-semibold py-2 px-4 border border-slate-500 hover:border-transparent rounded'>
                    Sign out
                  </button>
                </li>

                <li>
                  <div
                    href=''
                    className='md:ml-4 flex items-center justify-start pointer-cursor'
                  >
                    <img
                      className='rounded-full w-10 h-10 bg-green-800'
                      src='https://w1.pngwing.com/pngs/537/559/png-transparent-person-avatar-user-symbol-user-profile-face-black-white.png'
                    />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </header>
  );
};

export default Header;
