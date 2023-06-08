import { useLoaderData } from 'react-router-dom';
import DetailsProduct from './detailsProduct/DetailsProduct';

const Shop = () => {
  const data = useLoaderData();

  return (
    <div className='overflow-y-auto h-[40rem]'>
      <div className='p-10 grid grid-cols-3 gap-5'>
        {data?.map((product, index) => (
          <DetailsProduct key={index} product={product}></DetailsProduct>
        ))}
      </div>
    </div>
  );
};

export default Shop;
