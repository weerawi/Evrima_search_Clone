import ProfileForm from './ProfileForm';

const UserProfile = () => {
  return (
    <div className="h-[85vh] flex items-center justify-center">
      <div className="flex my-12 p-8 bg-red-100 rounded-md border-2 border-red-400 max-w-[45rem] mx-auto ">
        <div class="m-auto">
        <h1 className='text-5xl flex justify-center'> User Profile</h1>
        {/* <ProfileForm /> */}
        </div>
        
      </div>
    </div>
    
  );
};

export default UserProfile;
