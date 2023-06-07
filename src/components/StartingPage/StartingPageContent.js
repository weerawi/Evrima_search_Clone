 
import Typed from 'react-typed';


const StartingPageContent = () => {
  return (
    <div className=" flex justify-center items-center h-96  bg-gray-200">
      <h2 className='text-xl bg-red-400  '>Welcome on Evrima!</h2>
      <Typed
                strings={[
                    'Search for products',
                    'Search for categories',
                    'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text"/>
                </Typed>
    </div>
  );
};

export default StartingPageContent;
