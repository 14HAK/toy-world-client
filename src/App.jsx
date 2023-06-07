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
      <div className='col-span-3 h-[45rem] p-5 bg-[#f6e1e1]'>
        <SideBar></SideBar>
      </div>
      <div className='col-span-9 p-5 bg-[#EDD4D5] font-sans'>
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
