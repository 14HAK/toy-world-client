const Blog = () => {
  return (
    <section className='w-full h-full bg-[#EDD4D5] px-12 py-5 overflow-x-hidden'>
      <div className=''>
        <div className='flex flex-col items-center sm:px-5 mb-5 md:flex-row'>
          <div className='flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2'>
            <div
              className='flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5'
            >
              <div
                className='bg-green-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
              uppercase inlineBlock'
              >
                <p className='inline'>
                  <svg
                    className='w-3.5 h-3.5 mr-1'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                  00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                  1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                  0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                    />
                  </svg>
                </p>
                <p className='inline text-xs font-medium'>New</p>
              </div>
              <a className='text-xl font-bold leading-none lg:text-3xl xl:text-5xl'>
                Happiness kids journey :)
              </a>
              <div className='pt-2 pr-0 pb-0 pl-0'>
                <p className='text-sm font-medium inline'>author:</p>
                <a className='inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline'>
                  DULON
                </a>
                <p className='inline text-sm font-medium mt-0 mr-1 mb-0 ml-1'>
                  · 23rd, April 2023 ·
                </p>
                <p className='text-slate-500 text-sm font-medium inline mt-0 mr-1 mb-0 ml-1'>
                  1hr 20min. read
                </p>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            <div className='block'>
              <img
                src='https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMHRveXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
                className='object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full'
              />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 sm:px-5 gap-5'>
          <div className='flex flex-col items-start space-y-3 '>
            <img
              src='https://media.4rgos.it/i/Argos/2621-m007-25-01-8298481-lamborghini-v2'
              className='object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-'
            />
            <p
              className='bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase inlineBlock'
            >
              last corner
            </p>
            <a className='text-lg font-bold sm:text-xl md:text-2xl'>
              DESSERT, GENERAL CHINESE, RECIPES
            </a>
            <p className='text-sm text-black'>
              To make sure this recipe is truly foolproof, I have done extensive
              testing (i.e. many slices of the same cake) so you have my words
              that if you follow the recipe carefully you’d be able to make the
              same cake as pictured!
            </p>
            <div className='pt-2 pr-0 pb-0 pl-0'>
              <a className='inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline'>
                ciki daw
              </a>
              <p className='inline text-xs font-medium mt-0 mr-1 mb-0 ml-1'>
                · JUNE 26, 2020 ·
              </p>
              <p className='inline text-xs font-medium text-slate-500 mt-0 mr-1 mb-0 ml-1'>
                20min. read
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start space-y-3 '>
            <img
              src='https://media.istockphoto.com/id/1019966450/photo/enjoying-his-new-christmas-present.jpg?s=612x612&w=0&k=20&c=E68TzB3gtQnnpFR_5D-ADga2b5f6JAyrTSak0BcEqEY='
              className='object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-'
            />
            <p
              className='bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase inlineBlock'
            >
              lemeon desper
            </p>
            <a className='text-lg font-bold sm:text-xl md:text-2xl'>
              China Sichuan Food
            </a>
            <p className='text-sm text-black'>
              Sichuan is famous for its hot and peppery approach to food and
              while it’s not as spicy as, say, Hainanese food, you do need to
              watch how much chili you’re adding to the mix at times.
              <p></p>
              There’s no denying though that this blog will teach you all you
              need to know about delicious Sichuan food.
            </p>
            <div className='pt-2 pr-0 pb-0 pl-0'>
              <a className='inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline'>
                seli maw
              </a>
              <p className='inline text-xs font-medium mt-0 mr-1 mb-0 ml-1'>
                · 21st, may 2023 ·
              </p>
              <p className='inline text-xs font-medium text-slate-500 mt-0 mr-1 mb-0 ml-1'>
                30 min. read
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start space-y-3 '>
            <img
              src='https://static-01.daraz.com.bd/p/fee97e6e741dbd728d283cc6c7be5531.png'
              className='object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-'
            />
            <p
              className='bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase inlineBlock'
            >
              maniul fital
            </p>
            <a className='text-lg font-bold sm:text-xl md:text-2xl'>
              The Woks Of Life
            </a>
            <p className='text-sm text-black'>
              We love the name of this blog, if it were a cookbook, it might
              even make it to our top cookbooks of all time for the sheer
              ingenuity of it all.
              <br />
              It’s not a trick though, The Woks of Life is packed with tasty
              Chinese food that you won’t be able to resist.
            </p>
            <div className='pt-2 pr-0 pb-0 pl-0'>
              <a className='inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline'>
                makaw boly
              </a>
              <p className='inline text-xs font-medium mt-0 mr-1 mb-0 ml-1'>
                · 19, Sep 2023 ·
              </p>
              <p className='inline text-xs font-medium text-slate-500 mt-0 mr-1 mb-0 ml-1'>
                10min. read
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
