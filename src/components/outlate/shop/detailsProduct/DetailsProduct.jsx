import React from 'react';
import Full from '../../../../assets/Full.svg';
import Empty from '../../../../assets/Empty.svg';
import Half from '../../../../assets/Half.svg';

import { Link } from 'react-router-dom';
import Rating from 'react-rating';
React.createElement(Rating);

const DetailsProduct = ({ product }) => {
  return (
    <>
      <div className='h-full bg-[#DEB4B4] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
        <img
          className='lg:h-48 md:h-36 w-full object-cover object-center'
          src={product?.img}
          alt='blog'
        />
        <div className='p-6'>
          <h2 className='tracking-widest text-xs title-font font-medium text-slate-600 mb-1'>
            {product?.category}
          </h2>
          <h1 className='title-font text-lg font-medium text-gray-900'>
            {product?.name}
          </h1>
          <p className='leading-relaxed mb-3'>
            {product?.details.slice(0, 20)}.....
          </p>
          <p className='text-md font-bold text-2xl grid grid-cols-10 items-center pb-2'>
            <span className='underline text-[#4b4b4b]'>$-</span>
            <span className='text-[#4b4b4b]'>{product?.price}</span>
          </p>

          <p className='flex gap-1'>
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

          <div className='flex items-center flex-wrap mt-2 '>
            <button>
              <Link
                to={`/product/details/${product?._id}`}
                className='text-slate-700 hover:text-[#F6E1E1] cursor-pointer hover:underline inline-flex items-center md:mb-2 lg:mb-0'
              >
                View Details
                <svg
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M5 12h14'></path>
                  <path d='M12 5l7 7-7 7'></path>
                </svg>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsProduct;
