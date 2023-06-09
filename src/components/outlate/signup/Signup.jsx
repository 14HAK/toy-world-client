import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/ContextPass';

const Signup = () => {
  const { createUser, updateUser, setUser } = useContext(UserContext);

  const handleSignup = (event) => {
    event.preventDefault();

    const form = event.target;
    const userName = form.userName.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          callBackUpdateProfile(userName, photoUrl);
        }
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const callBackUpdateProfile = (userName, photoUrl) => {
    const profile = {
      displayName: userName,
      photoURL: photoUrl,
    };
    updateUser(profile).then().catch();
  };

  return (
    <div className=''>
      <div className='p-10'>
        <section className='max-w-lg mx-auto bg-[#F6E1E1] p-8 rounded-xl shadow shadow-slate-300'>
          <h1 className='text-4xl font-medium'>Sign up</h1>
          <p className='text-slate-500 pt-1'>Hey, Welcome!</p>

          <form onSubmit={handleSignup} className='my-10'>
            <div className='flex flex-col space-y-5'>
              <label htmlFor='userName'>
                <p className='font-medium text-slate-700 pb-2'>User name</p>
                <input
                  id='userName'
                  name='userName'
                  type='text'
                  required
                  className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                  placeholder='your name'
                />
              </label>
              <label htmlFor='photoUrl'>
                <p className='font-medium text-slate-700 pb-2'>Photo url</p>
                <input
                  id='photoUrl'
                  name='photoUrl'
                  type='text'
                  required
                  className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                  placeholder='profile photo url'
                />
              </label>
              <label htmlFor='email'>
                <p className='font-medium text-slate-700 pb-2'>Email</p>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                  placeholder='sample.email@gmail.com'
                />
              </label>
              <label htmlFor='password'>
                <p className='font-medium text-slate-700 pb-2'>Password</p>
                <input
                  id='password'
                  name='password'
                  type='password'
                  required
                  className='w-full py-3 border border-slate-200  rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                  placeholder='******'
                />
              </label>
              {/* <small className='text-red-700 font-light'>{error}</small> */}

              <button className='w-full py-3 font-medium  text-slate-700 bg-[#DEB4B4] hover:bg-[#F6E1E1] rounded-lg border-slate-400 hover:shadow inline-flex space-x-2 items-center justify-center'>
                <span>Sign up</span>
              </button>
              <div className='text-center'>
                Already have an account?{' '}
                <button className='text-indigo-600 font-medium inline-flex space-x-1 items-center'>
                  <Link to={'/sign_in'}>
                    <span className='hover:underline'>Sign in</span>
                  </Link>
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Signup;
