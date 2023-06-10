import React, { useContext } from 'react';
import Full from '../../../../../assets/Full.svg';
import Empty from '../../../../../assets/Empty.svg';
import Half from '../../../../../assets/Half.svg';

import { Link, useLoaderData } from 'react-router-dom';
import Rating from 'react-rating';
import { UserContext } from '../../../../context/ContextPass';
import addToy from '../../../addToy/PostToy';
React.createElement(Rating);
import toast, { Toaster } from 'react-hot-toast';
const Details = () => {
  const { user } = useContext(UserContext);
  // console.log(user);
  const product = useLoaderData();

  const handlePostCart = (product) => {
    product['displayName'] = user.displayName;
    if (user && product) {
      addToy(product, user);
      toast('Product added to cart!');
    }
  };

  return (
    <>
      {/* toaster hot toest  */}
      <Toaster
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <div className='h-auto m-20  bg-[#DEB4B4] border-2 border-red-200 rounded-lg overflow-hidden'>
        <img
          className='lg:h-96 md:h-36 w-full object-cover object-center'
          src={product?.img}
          alt='blog'
        />
        <div className='p-6'>
          <h2 className='tracking-widest text-2xl title-font font-medium text-slate-600 mb-1'>
            {product?.category}
          </h2>
          <h1 className='title-font text-3xl font-medium text-gray-900'>
            {product?.name}
          </h1>
          <p className='leading-relaxed text-xl my-3'>
            {product?.details}.....
          </p>
          <p className='text-md font-bold text-5xl grid grid-cols-4 items-center pb-2'>
            <span className='underline text-[#4b4b4b]'>PRICE : </span>
            <span className='text-[#4b4b4b]'>
              {product?.price}
              <sup>($)</sup>
            </span>
          </p>

          <p className='flex gap-1 my-10 text-3xl'>
            <span className='underline text-[#4b4b4b]'>
              ({product?.ratings})
            </span>
            <Rating
              initialRating={product?.ratings}
              readonly
              fullSymbol={<img src={Full} />}
              placeholderSymbol={<img src={Half} />}
              emptySymbol={<img src={Empty} className='icon' />}
            />
          </p>

          <div className='flex items-center flex-wrap '>
            <Link
              to={`/product/details/${product?._id}`}
              className='text-slate-700 hover:text-[#F6E1E1] cursor-pointer inline-flex items-center md:mb-2 lg:mb-0'
            >
              <button
                onClick={() => handlePostCart(product)}
                className='rounded-md hover:bg-red-300 font-semibold hover:text-slate-700 px-6  py-2 focus:ring-1 border border-[#e0e0e0] '
              >
                Add to cart
              </button>
            </Link>
            <Link
              to={`/shop`}
              className='text-slate-700 hover:text-[#F6E1E1] cursor-pointer inline-flex items-center md:mb-2 lg:mb-0'
            >
              <button className='rounded-md ms-2 hover:bg-red-300 font-semibold hover:text-slate-700 px-6  py-2 focus:ring-1 border border-[#e0e0e0] '>
                back to shop
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
