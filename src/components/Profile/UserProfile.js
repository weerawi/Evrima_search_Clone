import ProfileForm from './ProfileForm';

const UserProfile = () => {
  return (
    <div className="flex mt-48 p-8 bg-red-100 rounded-md border-2 border-red-400  ">
      <div class="m-auto">
      <h1 className='text-5xl flex justify-center'> User Profile</h1>
      <ProfileForm />
      </div>
      
    </div>
  );
};

export default UserProfile;
