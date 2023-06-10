import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';

function App() {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-12'>
        <Header></Header>
      </div>
      <div className=' sm:grid-span-12 lg:col-span-3 h-[15rem] lg:h-[45rem] w-[45.5rem] lg:w-full p-5 bg-[#f6e1e1]'>
        <SideBar></SideBar>
      </div>
      <div className=' sm:col-span-12 lg:col-span-9 p-5 h-[45rem] overflow-y-auto  bg-[#EDD4D5] font-sans'>
        <Outlet></Outlet>
      </div>
      <div className='col-span-12 p-5 bg-[#DEB4B4] '>
        {' '}
        <Footer></Footer>{' '}
      </div>
    </div>
  );
}

export default App;
