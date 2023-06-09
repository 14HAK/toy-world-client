const Hero = () => {
  return (
    <>
      <div className='hero mb-5 p-10 bg-red-100 border-base-100 rounded-lg '>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='animate-bounce text-5xl font-devFont tracking-widest font-bold'>
              OUR DREAM, KIDS HAPPINESS!
            </h1>
            <p className='py-6 font-semibold'>
              we are fully cofortable for your kids happiness to join toys
              world, wellcome{' '}
              <span className='animate-ping flex'>
                <svg
                  width={30}
                  clipRule='evenodd'
                  fillRule='evenodd'
                  strokeLinejoin='round'
                  strokeMiterlimit='2'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z'
                    fillRule='nonzero'
                  />
                </svg>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
