const Home = () => {
  return (
    <div className='overflow-y-auto h-[27.5rem]'>
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
            <img
              className='object-cover object-center rounded'
              alt='hero'
              src='https://cdn.pixabay.com/photo/2017/02/12/16/19/autos-2060420_1280.jpg'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
