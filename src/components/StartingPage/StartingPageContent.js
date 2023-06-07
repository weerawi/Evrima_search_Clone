 
import Typed from 'react-typed';


const StartingPageContent = () => {
  return (
    <div className="h-[85vh] flex items-center justify-center">
      <div className=" mx-auto w-10/12 lg:w-90  rounded-md  shadow-md p-10 text-center  flex-row justify-center items-center   my-5 mx-5 bg-gray-200">
        <h2 className='my-8 text-4xl md:text-6xl text-red-800  '>Welcome on Evrima!</h2>
        <Typed
                  strings={[
                      '  Search for products',
                      '  Search for categories',
                      '  Search for brands']}
                      typeSpeed={40}
                      backSpeed={50}
                      attr="placeholder"
                      loop >
                      <input className="ml-2 bg-transparent text-gray-800  text-2xl md:text-4xl  " type="text"/>
                  </Typed>
      </div>
    </div>
    
  );
};

export default StartingPageContent;
