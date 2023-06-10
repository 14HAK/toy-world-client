import { useContext } from 'react';
import { UserContext } from '../../context/ContextPass';
import addToy from './PostToy';
import toast, { Toaster } from 'react-hot-toast';

const AddToy = () => {
  const { user } = useContext(UserContext);

  const handleAddToyData = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.productName.value;
    const details = form.productDetails.value;
    const img = form.productImg.value;
    const price = form.productPrice.value;
    const category = form.productCategory.value;
    const ratings = form.productRatings.value;
    const addToyData = {
      uid: user?.uid,
      name,
      details,
      img,
      price,
      category,
      ratings,
    };

    addToy(addToyData, user);
    form.reset();
  };

  return (
    <div className='p-10'>
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
      <section className='w-full mx-auto bg-[#F6E1E1] p-8 rounded-xl shadow shadow-slate-300'>
        <h1 className='animate-bounce text-5xl font-devFont tracking-widest font-bold '>
          add your product...
        </h1>
        <form onSubmit={handleAddToyData} className='my-10'>
          <div className='grid grid-cols-2 gap-5'>
            <label htmlFor='productName'>
              <input
                id='productName'
                name='productName'
                type='text'
                className='w-full py-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                placeholder='product name'
                required
              />
            </label>
            <label htmlFor='productDetails'>
              <input
                id='productDetails'
                name='productDetails'
                type='text'
                className='w-full py-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                placeholder='product details'
                required
              />
            </label>
            <label htmlFor='productImg'>
              <input
                id='productImg'
                name='productImg'
                type='text'
                className='w-full py-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                placeholder='product image url'
                required
              />
            </label>
            <label htmlFor='productPrice'>
              <input
                id='productPrice'
                name='productPrice'
                type='number'
                className='w-full py-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                placeholder='product price'
                required
              />
            </label>
            <label htmlFor='productCategory'>
              <select
                id='productCategory'
                name='productCategory'
                className='w-full py-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow select select-bordered'
                required
              >
                <option selected value='sports-car'>
                  sports-car
                </option>
                <option value='truck'>truck</option>
                <option value='arm-car'>arm-car</option>
              </select>
            </label>
            <label htmlFor='productRatings'>
              <input
                id='productRatings'
                name='productRatings'
                type='number'
                className='w-full py-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                placeholder='product ratings'
                required
              />
            </label>
          </div>
          <button className='w-full mt-5 py-2 font-medium text-slate-700 bg-[#DEB4B4] hover:bg-[#F6E1E1] rounded-lg border-slate-400 hover:shadow inline-flex space-x-2 items-center justify-center'>
            <span>ADD PRODUCT</span>
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddToy;
