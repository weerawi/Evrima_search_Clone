 
import Typed from 'react-typed'; 
import Card from '../Card/Card';


const StartingPageContent = (props ) => {

  


  return (
    <div className="h-auto flex-row pt-44 items-center justify-center">
      <div className=" mx-auto w-10/12 lg:w-90  mb-56 rounded-md  shadow-md p-10 text-center  flex-row justify-center items-center   my-5 mx-5 bg-gray-200">
        <h2 className='my-8 text-3xl md:text-5xl text-red-800  '>Welcome to Evrima!</h2>
        <Typed
                  strings={[
                      '  Search for products',
                      '  Search for categories',
                      '  Search for brands']}
                      typeSpeed={40}
                      backSpeed={50}
                      attr="placeholder"
                      loop >
                      <input className="ml-2 bg-transparent text-gray-800  text-xl md:text-2xl  " type="text" value={props.value}
            onChange={props.change} />           
        </Typed>
        <button className='bg-transparent text-red-700 font-bold rounded-md cursor-pointer hover:bg-red-900 p-2 hover:text-red-200'>Search</button>


        <div className="bg-white flex flex-col border border-gray-300">
          {props.result.map((product) => (
            <div
              className="cursor-pointer text-left my-2"
              key={product.id}
              onClick={() => props.change({ target: { value: product.name } })}
            >
              {product.name}
            </div>
          ))}
        </div>

      </div>

      <div> 
          {props.load ? (
            <p>Loading search results...</p>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-14">
              {props.result.map((product) => (
              <Card key={product.id} name={product.name} />
            ))}
            </div>
          )}
      </div>
    </div>
    
  );
};

export default StartingPageContent;
