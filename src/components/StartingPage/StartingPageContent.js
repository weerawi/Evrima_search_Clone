 
import Typed from 'react-typed';
import Card from '../Card/Card';
import { useState } from 'react';
import './StartPage.css';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const StartingPageContent = (props) => {
  const [searchCard, setSearchCard] = useState(false);
  const [selectedName, setSelectedName] = useState('');

  const handleSearch = () => {
    props.search(props.value);
    setSearchCard(true);
  };

  const handleNameClick = (name) => {
    setSelectedName(name);
    props.change({ target: { value: name } }); 
  };

  return (
    // ${(searchCard)? "h-auto pb-20" : "h-[85vh]"}
    <div  className=  " overflow-x-hidden h-auto pb-20  flex-row pt-44 items-center justify-center ">
      <div 
          className="mx-auto w-10/12 lg:w-90  mb-56 rounded-md shadow-md p-10 text-center flex-row justify-center items-center my-5 mx-5 bg-gray-200">
        <h2 className="my-8 text-3xl md:text-5xl text-red-800 ">Welcome to Evrima!</h2>
        <Typed
          strings={[
            '  Search for products',
            '  Search for categories',
            '  Search for brands',
          ]}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
          loop
        >
          <input
            className="ml-2 bg-transparent text-gray-800 text-xl md:text-2xl"
            type="text"
            value={props.value}
            onChange={props.change}
          />
        </Typed>
        <button
          onClick={handleSearch}
          className="bg-transparent   text-red-700 font-bold rounded-md cursor-pointer hover:bg-red-900 p-2 hover:text-red-200"
        >
          Search
        </button>

        {/* <div className="bg-white flex flex-col border border-gray-300">
          {props.result
            .filter((product) => {
              const searchTerm = props.value.toLowerCase();
              const fullName = product.name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .map((product) => (
              <div
              data-aos="zoom-in" 
              data-aos-duration="1000"
              data-aos-easing="ease-in-out " 
                className={`cursor-pointer hover:text-red-800 text-left my-2 mx-4 ${
                  product.name === selectedName ? 'text-red-800' : ''
                }`}
                key={product.id}
                onClick={() => handleNameClick(product.name)}
              >
                {product.name}
              </div>
            ))}
        </div>  */}

<div className="bg-white flex flex-col border border-gray-300">
          {props.result
            .filter((product) => {
              const searchTerm = typeof props.value === 'string' ? props.value.toLowerCase() : '';
              const fullName = product.name.toLowerCase();

              return fullName.includes(searchTerm);
            })
            .map((product) => (
              <div
                 
                className={`cursor-pointer hover:text-red-800 text-left my-2 mx-4 ${
                  product.name === selectedName ? 'text-red-800' : ''
                }`}
                key={product.id}
                onClick={() => handleNameClick(product.name)}
              >
                {product.name}
              </div>
            ))}
        </div>

      </div>




      {/* <div id='Animation' className="min-h-screen">
       
    </div> */}

    


      <div>
        {searchCard ? (
          props.load ? (
            <p>Loading search results..</p>
          ) : (
            <div data-aos="zoom-in"data-aos-duration="800"  className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-14">
              {props.result.filter((product) => product.name === selectedName).map((product) => (
                <Card key={product.id} name={product.name} />
              ))}
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default StartingPageContent;

// const StartingPageContent = (props) => {
//   const [searchCard, setSearchCard] = useState(false);
//   const [selectedName, setSelectedName] = useState('');

//   const handleSearch = () => {
//     setSearchCard(true);
//   };

//   const handleNameClick = (name) => {
//     setSelectedName(name);
//     props.change({ target: { value: name } });
//   };

//   const handleInputChange = (event) => {
//     const searchTerm = event.target.value;
//     props.change(event);
//     setSearchCard(false);

//     if (typeof searchTerm === 'string' && searchTerm.trim() !== '') {
//       const matchingProducts = props.result.filter((product) => {
//         const productName = product.name.toLowerCase();
//         return productName.includes(searchTerm.toLowerCase());
//       });

//       if (matchingProducts.length > 0) {
//         setSelectedName('');
//         props.search(matchingProducts);
//       }
//     }
//   };

//   return (
//     <div className="overflow-x-hidden h-auto pb-20 flex-row pt-44 items-center justify-center">
//       <div
         
//         className="mx-auto w-10/12 lg:w-90  mb-56 rounded-md shadow-md p-10 text-center flex-row justify-center items-center my-5 mx-5 bg-gray-200"
//       >
//         <h2 className="my-8 text-3xl md:text-5xl text-red-800">Welcome to Evrima!</h2>
//         <Typed
//           strings={[
//             '  Search for products',
//             '  Search for categories',
//             '  Search for brands',
//           ]}
//           typeSpeed={40}
//           backSpeed={50}
//           attr="placeholder"
//           loop
//         >
//           <input
//             className="ml-2 bg-transparent text-gray-800 text-xl md:text-2xl"
//             type="text"
//             value={props.value}
//             onChange={handleInputChange}
//             onKeyPress={(event) => {
//               if (event.key === 'Enter') {
//                 handleSearch();
//               }
//             }}
//           />
//         </Typed>
//         <button
//           onClick={handleSearch}
//           className="bg-transparent text-red-700 font-bold rounded-md cursor-pointer hover:bg-red-900 p-2 hover:text-red-200"
//         >
//           Search
//         </button>

//         <div className="bg-white flex flex-col border border-gray-300">
//           {props.result
//             .filter((product) => {
//               const searchTerm = typeof props.value === 'string' ? props.value.toLowerCase() : '';
//               const fullName = product.name.toLowerCase();

//               return fullName.includes(searchTerm);
//             })
//             .map((product) => (
//               <div
//                 data-aos="zoom-in"
//                 data-aos-duration="1000"
//                 data-aos-easing="ease-in-out "
//                 className={`cursor-pointer hover:text-red-800 text-left my-2 mx-4 ${
//                   product.name === selectedName ? 'text-red-800' : ''
//                 }`}
//                 key={product.id}
//                 onClick={() => handleNameClick(product.name)}
//               >
//                 {product.name}
//               </div>
//             ))}
//         </div>

//       </div>

//       <div>
//         {searchCard ? (
//           props.load ? (
//             <p>Loading search results..</p>
//           ) : (
//             <div
//               data-aos="zoom-in"
//               data-aos-duration="800"
//               className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-14"
//             >
//               {props.result
//                 .filter((product) => product.name.includes(props.value))
//                 .map((product) => (
//                   <Card key={product.id} name={product.name} />
//                 ))}
//             </div>
//           )
//         ) : null}
//       </div>
//     </div>
//   );
// };

// export default StartingPageContent;