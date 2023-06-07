 

const ProfileForm = () => {
  return (
    <form className="bg-gray-400 rounded-md m-3 p-3">
      <div className=" mb-2">
        <label className="font-medium" htmlFor='new-password '>New Password</label>
        <input className="ml-2 bg-red-100 rounded-md border-2 border-red-400" type='password' id='new-password' />
      </div>
      <div className="mt-1">
        <button className="bg-red-900 text-white p-2 rounded-md mt-4 hover:bg-red-800 cursor-pointer">Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
