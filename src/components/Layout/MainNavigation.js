import { Link } from 'react-router-dom';
 

const MainNavigation = () => {
  return (
    <header className=" w-full h-24 bg-gray-800 flex justify-between items-center">
      <Link to='/'>
        <div className=" ml-2 text-3xl text-white m-0">Evrima</div>
      </Link>
      <nav>
        <ul className='m-0 p-0 text-red-700 flex items-baseline hover:text-red-900 font-medium'>
          <li className='mx-4'>
            <Link to='/auth'>Login</Link>
          </li>
          <li className='mx-4'>
            <Link to='/profile'>Profile</Link>
          </li>
          <li className='mx-4'>
            <button className='bg-transparent text-red-700 font-bold rounded-md cursor-pointer hover:bg-red-900 p-2 hover:text-red-200'>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
