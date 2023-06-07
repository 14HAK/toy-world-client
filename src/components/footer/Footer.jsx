import SiteLogo from '../../assets/SiteLogo.svg';

const Footer = () => {
  return (
    <footer className=''>
      <div className='flex justify-center items-center'>
        <div className=''>
          <a className=' flex flex-col'>
            <img src={SiteLogo} alt='' className='w-32' />
            <span>figmaRule&#169;, DulonMahadi-2023</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
