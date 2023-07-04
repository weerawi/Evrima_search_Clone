

import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context'; 

const ProfileForm = () => {
  const history = useHistory();

  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // add validation

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD-zjXyGJ6PfDkMLGc-VY4Q_s_T5j8dFSY', {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      // assumption: Always succeeds!

      history.replace('/');
    });
  };

  return (
     <form className="bg-gray-400   rounded-md m-3 p-3" onSubmit={submitHandler}>
      <div className=" mb-2">
        <label className="font-medium" htmlFor='new-password '>New Password</label>
        <input className="ml-2 bg-red-100 rounded-md border-2 border-red-400" type='password' id='new-password' minLength="7" ref={newPasswordInputRef}  />
      </div>
      <div className="mt-1">
        <button className="bg-red-900 text-white p-2 rounded-md mt-4 hover:bg-red-800 cursor-pointer">Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
