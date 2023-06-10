import { Link } from 'react-router-dom';
import SiteLogo from '../../assets/SiteLogo.svg';
import { useContext } from 'react';
import { UserContext } from '../context/ContextPass';

const SideBar = () => {
  const { user } = useContext(UserContext);
  return (
    <nav>
      <div className='font-devFont grid grid-row-12 gap-2 lg:gap-16  pt-0 lg:pt-10  justify-center items-center text-center'>
        <Link to={'/home'} className='w-56 hover:cursor-pointer'>
          <img src={SiteLogo} alt='store-logo' />
        </Link>

        <section className='grid grid-row-12 text-[#d68081] text-left ps-10'>
          <Link
            to={'/home'}
            className='mb-2 text-xl hover:underline hover:cursor-pointer hover:text-[#2b2b2b]'
          >
            Home
          </Link>
          <Link
            to={'/shop'}
            className='mb-2 text-xl hover:underline hover:cursor-pointer hover:text-[#2b2b2b]'
          >
            Shop
          </Link>
          <Link
            to={'/cart'}
            className='mb-2 text-xl hover:underline hover:cursor-pointer hover:text-[#2b2b2b]'
          >
            Cart
          </Link>
          {!user ? (
            <></>
          ) : (
            <Link
              to={'/add_toy'}
              className='mb-2 text-xl hover:underline hover:cursor-pointer hover:text-[#2b2b2b]'
            >
              Add-Toy
            </Link>
          )}
          {!user ? (
            <></>
          ) : (
            <Link
              to={'/my_toy'}
              className='mb-2 text-xl hover:underline hover:cursor-pointer hover:text-[#2b2b2b]'
            >
              My-Toy
            </Link>
          )}
          <Link
            to={'/blog'}
            className='mb-2 text-xl hover:underline hover:cursor-pointer hover:text-[#2b2b2b]'
          >
            Blog
          </Link>
        </section>
      </div>
    </nav>
  );
};

export default SideBar;
