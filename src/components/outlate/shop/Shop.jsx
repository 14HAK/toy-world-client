import { useLoaderData } from 'react-router-dom';
import DetailsProduct from './detailsProduct/DetailsProduct';
import { useState } from 'react';

const Shop = () => {
  const data = useLoaderData();
  const [allData, setAllData] = useState(data);

  const handleALLData = async () => {
    setAllData(data);
  };
  const handleTruckData = async () => {
    const AllTruck = await data?.filter((item) => item?.category === 'truck');
    setAllData(AllTruck);
  };

  const handleSportsCarData = async () => {
    const allSportsCar = await data?.filter(
      (item) => item?.category === 'sports-car'
    );
    setAllData(allSportsCar);
  };

  const handleArmCarData = async () => {
    const allArmCar = await data?.filter(
      (item) => item?.category === 'arm-car'
    );
    setAllData(allArmCar);
  };

  return (
    <div>
      <div className='p-2 text-center'>
        <div className='max-w-lg mx-auto'>
          <div className='inline-flex shadow-sm rounded-md mb-5' role='group'>
            <button
              onClick={handleALLData}
              type='button'
              className='rounded-l-lg border-y border-[#C05B51] bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:ring-1 focus:ring-[tomato] focus:text-slate-700'
            >
              ALL
            </button>
            <button
              onClick={handleTruckData}
              type='button'
              className='border border-[#C05B51] bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:ring-1 focus:ring-[tomato] focus:text-slate-700'
            >
              truck
            </button>
            <button
              onClick={handleSportsCarData}
              type='button'
              className='border-y border-[#C05B51] bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:ring-1 focus:ring-[tomato] focus:text-slate-700'
            >
              sports-car
            </button>

            <button
              onClick={handleArmCarData}
              type='button'
              className='rounded-r-md border border-[#C05B51] bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:ring-1 focus:ring-[tomato] focus:text-slate-700'
            >
              arm-car
            </button>
          </div>
        </div>
      </div>
      <div className='p-10 grid grid-cols-3 gap-5'>
        {allData?.map((product, index) => (
          <DetailsProduct key={index} product={product}></DetailsProduct>
        ))}
      </div>
    </div>
  );
};

export default Shop;
