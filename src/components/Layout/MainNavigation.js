import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react'; 
import AuthContext from '../../store/auth-context';

const MainNavigation = () => {

  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const handleLogout = () => {
    authCtx.logout();
    history.replace('/auth'); // Redirect to the login page after logout
  };


  return (
    <header style={{backdropFilter: 'blur(4px)', background: 'rgba(139, 172, 170 , 0.7)',  borderBottom: '1px solid rgba(255, 255, 255, 0.45)'} } className=" w-full h-24  flex justify-between items-center">
      <Link to='/'>
        <div className=" ml-2 text-3xl text-white m-0">Evrima</div>
      </Link>
      <nav>
        <ul className='m-0 p-0 md:text-lg  text-red-700 flex items-baseline  font-medium'>
          {!isLoggedIn && (
            <li className='mx-4 hover:text-red-900'>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li className='mx-4 hover:text-red-900'>
              <Link to='/about'>About</Link>
            </li>
          )}
          {isLoggedIn && (
            <li className='mx-4 hover:text-red-900'>
              <Link to='/profile'>Profile</Link>
            </li>
          )}
          
          {isLoggedIn && (
            <li className='mx-4 hover:text-red-900'>
              <Link to='/contact'>Contact</Link>
            </li>
          )}
          {isLoggedIn && (
            <li className='mx-4'>
              <button className='bg-transparent text-red-700 font-bold rounded-md cursor-pointer hover:bg-red-900 p-2 hover:text-red-200' onClick={handleLogout}>Logout</button>
            </li>
          )}  
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
