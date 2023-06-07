import { useState } from 'react'; 

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className="flex items-center justify-center h-[85vh]">
      <div className="  mx-auto  w-11/12 max-w-[25rem] rounded-md bg-gray-300  shadow-md p-10 text-center">
        <h1 class="text-center text-gray-600 text-2xl">{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form>
          <div className=" mb-2">
            <label className='block text-gray-600 font-bold mb-2' htmlFor='email'>Your Email</label>
            <input className='w-full font-inherit bg-[#FFABAB] text-[#070A52] rounded-md border border-white p-1' type='email' id='email' required />
          </div>
          <div className="  mb-2">
            <label className='block text-gray-600 font-bold mb-2' htmlFor='password'>Your Password</label>
            <input className='w-full font-inherit bg-[#FFABAB] text-[#070A52] rounded-md border border-white p-1' type='password' id='password' required />
          </div>
          <div className=" mt-6 flex flex-col items-center">
            <button className='cursor-pointer font-inherit text-white text-red-800  bg-[#ED2B2A] hover:bg-[#820000] border border-pink rounded-md py-2 px-10'>{isLogin ? 'Login' : 'Create Account'}</button>
            <button
              type='button'
              className="  mt-4 bg-transparent text-[#ED2B2A] border-none py-1 px-6 hover:text-[#820000]"
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </div>
    </div>
    
  );
};

export default AuthForm;
