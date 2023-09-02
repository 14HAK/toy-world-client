import Hero from './hero/Hero';
import SliderComp from './sliderComp/SliderComp';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-10 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h3 className='font-devFont text-5xl mb-2'>
              Cute<span className='text-[#C05B51]'> Toys</span> for<br></br>{' '}
              Cute
              <span className='text-[#C05B51]'> Kids</span>
            </h3>
            <p className='mb-4 leading-relaxed'>
              Buy all kinds of intellectual games, toys, puzzles in our online
              store and give your child the pleasure of love & entertainment.
            </p>
            <div className='flex justify-center'>
              <button className='inline-flex text-white bg-[#C05B51] border-0 py-2 px-6 focus:outline-none hover:bg-[#d68081]  hover:text-slate-700 rounded-lg text-lg'>
                Order Now
              </button>
            </div>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 opacity-70'>
            <SliderComp></SliderComp>
          </div>
        </div>
      </section>
      <div className='mx-auto max-w-screen-xl bg-red-100 rounded-md px-4 py-12 sm:px-6 md:py-16 lg:px-8'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='text-3xl font-bold text-slate-600 sm:text-4xl'>
            Build In Trashed
          </h2>
          <p className='mt-4 sm:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            dolores laborum labore provident impedit esse recusandae facere
            libero harum sequi.
          </p>
        </div>
        <div className='mt-8 sm:mt-12 text-slate-600'>
          <dl className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
            <div className='flex flex-col rounded-lg border border-red-200 px-4 py-8 text-center'>
              <dt className='order-last text-lg font-medium text-gray-400'>
                Total Sales
              </dt>
              <dd className='text-4xl font-extrabold md:text-5xl'>$4.8m</dd>
            </div>
            <div className='flex flex-col rounded-lg border border-red-200 px-4 py-8 text-center'>
              <dt className='order-last text-lg font-medium text-gray-400'>
                Official Addons
              </dt>
              <dd className='text-4xl font-extrabold md:text-5xl'>24</dd>
            </div>
            <div className='flex flex-col rounded-lg border border-red-200 px-4 py-8 text-center'>
              <dt className='order-last text-lg font-medium text-gray-400'>
                Total Addons
              </dt>
              <dd className='text-4xl font-extrabold md:text-5xl'>86</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className='discount flex justify-center items-center my-10 '>
        <div className=' text-center py-8 md:px-20 md:w-11/12 w-full bg-red-100 rounded-md outline-dotted outline-white outline-4 outline-offset-8'>
          <h2 className='text-slate-500 text-xl font-bold tracking-wide'>
            Get 25% Discount
          </h2>
          <p className='font-bold tracking-wide text-3xl text-slate-500 my-5'>
            Get the best toys for your Princess Toy
          </p>
          <div className='h-16 flex items-center justify-center'>
            <a to={'/'}>
              <button className='bg-red-300 text-white px-5 py-3 font-bold rounded-2xl tracking-wide hover:bg-red-400 hover:text-lg ease-in-out duration-300'>
                Show All Items
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className='py-16 px-10 bg-red-100 rounded-md'>
        <div className='text-center text-slate-600 mb-10 tracking-wide'>
          <h2 className='mb-3 text-3xl font-bold'>Our Toys Image Galley</h2>
          <p className='text-xl'>
            Your Little Princess deserve the best. <br />
            So search the best Toy Place which will be surprising for her.
          </p>
        </div>
        <div className=' space-x-4 h-60 w-full carousel carousel-center  p-6  bg-red-200 rounded-box'>
          <div className='carousel-item'>
            <img src='' className='rounded-box' />
          </div>
          <div className='carousel-item'>
            <img
              src='https://image.made-in-china.com/202f0j00wBQhspGlAncP/4-4-Meter-Electric-Rail-Car-Kids-Toys.jpg'
              className='rounded-box'
            />
          </div>
          <div className='carousel-item'>
            <img
              src='https://i.ytimg.com/vi/ELrahkq7g5g/maxresdefault.jpg'
              className='rounded-box'
            />
          </div>
          <div className='carousel-item'>
            <img
              src='https://img.fruugo.com/product/8/69/325114698_max.jpg'
              className='rounded-box'
            />
          </div>
        </div>
      </div>

      <div className='mx-auto w-full sm:px-6 bg-red-100 rounded-md text-slate-600 lg:px-8 lg:py-16'>
        <div className='md:flex md:items-end md:justify-between'>
          <div className='max-w-xl'>
            <h2 className='text-4xl font-bold tracking-tight sm:text-5xl'>
              Read trusted reviews from our customers
            </h2>
            <p className='mt-6 max-w-lg leading-relaxed text-slate-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur praesentium natus sapiente commodi. Aliquid sunt
              tempore iste repellendus explicabo dignissimos placeat, autem
              harum dolore reprehenderit quis! Quo totam dignissimos earum.
            </p>
          </div>
          <a
            href='#'
            className='mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-red-200 px-5 py-3 text-white-600 transition hover:bg-red-400 hover:text-white md:mt-0'
          >
            <span className='font-medium'> Read all reviews </span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 rtl:rotate-180'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M14 5l7 7m0 0l-7 7m7-7H3'
              ></path>
            </svg>
          </a>
        </div>
        <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-3'>
          <blockquote className='flex h-full flex-col bg-[#EDD4D5] rounded-md text-slate-600 justify-between p-6 shadow-sm sm:p-8'>
            <div>
              <div className='flex gap-0.5 text-red-300'>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
              </div>
              <div className='mt-4'>
                <p className='text-2xl font-bold sm:text-3xl'>
                  {"Stayin' Alive"}
                </p>
                <p className='mt-4 leading-relaxed text-slate-500'>
                  No, Rose, they are not breathing. And they have no arms or
                  legs … Where are they? You know what? If we come across
                  somebody with no arms or legs, do we bother resuscitating
                  them? I mean, what quality of life do we have there?
                </p>
              </div>
            </div>
            <footer className='mt-4 text-sm font-medium text-slate-400 sm:mt-6'>
              — Michael Scott
            </footer>
          </blockquote>
          <blockquote className='flex h-full flex-col bg-[#EDD4D5] rounded-md text-slate-600 justify-between p-6 shadow-sm sm:p-8'>
            <div>
              <div className='flex gap-0.5 text-red-300'>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
              </div>
              <div className='mt-4'>
                <p className='text-2xl font-bold sm:text-3xl'>
                  {"Stayin' Alive"}
                </p>
                <p className='mt-4 leading-relaxed text-slate-500'>
                  No, Rose, they are not breathing. And they have no arms or
                  legs … Where are they? You know what? If we come across
                  somebody with no arms or legs, do we bother resuscitating
                  them? I mean, what quality of life do we have there?
                </p>
              </div>
            </div>
            <footer className='mt-4 text-sm font-medium text-slate-400 sm:mt-6'>
              — Michael Scott
            </footer>
          </blockquote>
          <blockquote className='flex h-full flex-col bg-[#EDD4D5] rounded-md text-slate-600 justify-between p-6 shadow-sm sm:p-8'>
            <div>
              <div className='flex gap-0.5 text-red-300'>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                </svg>
              </div>
              <div className='mt-4'>
                <p className='text-2xl font-bold sm:text-3xl'>
                  {"Stayin' Alive"}
                </p>
                <p className='mt-4 leading-relaxed text-slate-500'>
                  No, Rose, they are not breathing. And they have no arms or
                  legs … Where are they? You know what? If we come across
                  somebody with no arms or legs, do we bother resuscitating
                  them? I mean, what quality of life do we have there?
                </p>
              </div>
            </div>
            <footer className='mt-4 text-sm font-medium text-slate-400 sm:mt-6'>
              — Michael Scott
            </footer>
          </blockquote>
        </div>
      </div>
      <div className='text-center my-28'>
        <h1 className='text-4xl font-bold text-slate-500'>
          SUBSCRIBE FOR OUR NEWSLETTER
        </h1>
        <div className='mt-10'>
          <input
            className='px-3 rounded-s-md py-3'
            type='text'
            placeholder='example@email.com'
            data-temp-mail-org='1'
          />
          <button className='p-3 rounded-e-md bg-red-100 hover:bg-red-300 text-stale-200 font-semibold'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
