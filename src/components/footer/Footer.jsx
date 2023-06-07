import { Link } from 'react-router-dom';
import SiteLogo from '../../assets/SiteLogo.svg';

const Footer = () => {
  return (
    <footer className=''>
      <div className='flex justify-center items-center'>
        <div className=''>
          <Link to={'/home'} className=' flex flex-col'>
            <img src={SiteLogo} alt='' className='w-32' />
            <span>figmaRule&#169;, DulonMahadi-2023</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
