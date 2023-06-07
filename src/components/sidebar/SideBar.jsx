import { Link } from 'react-router-dom';
import SiteLogo from '../../assets/SiteLogo.svg';

const SideBar = () => {
  return (
    <nav>
      <div className='font-devFont grid grid-row-12 gap-16 pt-10 justify-center items-center text-center'>
        <Link to={'/home'} className='w-56 hover:cursor-pointer'>
          <img src={SiteLogo} alt='store-logo' />
        </Link>

        <section className='grid grid-row-12 text-[#d68081] text-left ps-10'>
          <Link
            to={'/home'}
            className='mb-2 text-xl hover:underline hover:cursor-pointer hover:text-gray-900'
          >
            Home
          </Link>
          <Link
            to={'/shop'}
            className='mb-2 text-xl hover:underline hover:cursor-pointer hover:text-gray-900'
          >
            Shop
          </Link>
          <Link
            to={'/cart'}
            className='mb-2 text-xl hover:underline hover:cursor-pointer hover:text-gray-900'
          >
            Cart
          </Link>
          <Link
            to={'/blog'}
            className='mb-2 text-xl hover:underline hover:cursor-pointer hover:text-gray-900'
          >
            Blog
          </Link>
        </section>
      </div>
    </nav>
  );
};

export default SideBar;
