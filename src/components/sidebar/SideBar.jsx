import SiteLogo from '../../assets/SiteLogo.svg';

const SideBar = () => {
  return (
    <nav>
      <div className='font-devFont grid grid-row-12 gap-16 pt-10 justify-center items-center text-center'>
        <a className='w-56 hover:cursor-pointer'>
          <img src={SiteLogo} alt='store-logo' />
        </a>

        <section className='grid grid-row-12 text-[#d68081] text-left ps-10'>
          <a className='mb-2 text-xl hover:underline hover:cursor-pointer hover:text-gray-900'>
            Home
          </a>
          <a className='mb-2 text-xl hover:underline hover:cursor-pointer hover:text-gray-900'>
            Shop
          </a>
          <a className='mb-2 text-xl hover:underline hover:cursor-pointer hover:text-gray-900'>
            Cart
          </a>
          <a className='mb-2 text-xl hover:underline hover:cursor-pointer hover:text-gray-900'>
            Blog
          </a>
        </section>
      </div>
    </nav>
  );
};

export default SideBar;
