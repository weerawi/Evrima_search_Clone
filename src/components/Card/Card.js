import React, { useState } from 'react'
import "./Card.css";

const Card = (props) => {

  // let text =
  // "Trip.com is a rapidly-growing global online travel agency. Trip.com is here to help you plan the perfect trip. Whether you're going on holiday, taking a business trip, or looking to set up a corporate travel account, Trip.com is here to help you travel the world with cheap flights, discount hotels, and train tickets.  ";
// const [isReadMore, setIsReadMore] = useState(true);
// const toggleReadMore = () => {
//   setIsReadMore(!isReadMore);
// };


  return (
    // <div className="bg-white rounded-lg shadow-md p-4">
    //   <img src={props.image} alt="Product" className="w-full h-40 object-cover mb-4" />
    //   <div className="flex justify-between">
    //     <div className="flex items-center">
    //       <span className="text-yellow-500 mr-1">{props.name}</span>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="h-5 w-5 text-yellow-500"
    //         viewBox="0 0 20 20"
    //         fill="currentColor"
    //       >
    //         <path
    //           fillRule="evenodd"
    //           d="M10 2a1 1 0 011 1v4.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 7.586V3a1 1 0 011-1zm-1 14a1 1 0 100-2 1 1 0 000 2zm9-6a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 010-2h2V11h-2a1 1 0 010-2h3a1 1 0 011 1z"
    //           clipRule="evenodd"
    //         />
    //       </svg>
    //     </div>
    //     <span className="text-gray-600">{props.views} views</span>
    //   </div>
    //   <div className="flex items-center justify-between mt-4">
    //     <span className="text-lg font-semibold">${props.price}</span>
    //     <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
    //       Add to Cart
    //     </button>
    //   </div>
    //   {/* <div>{props.id}</div>
    //   <div>{props.name}</div> */}
    // </div>

//     <div className="card-container mx-auto w-72 h-96 justify-center text-center rounded-3xl bg-gray-300 shadow-lg">
//   <div className="relative">
//     <img className="w-72 h-40 rounded-3xl" src={props.image} alt="card-image" />
//     <span className="absolute bottom-0 right-0 p-2 bg-green-300 rounded-bl-3xl rounded-tr-3xl">From {props.price}$</span>
//   </div>

//   <div className="p-4">
//     <h2 className="text-lg font-bold text-left">{props.name}</h2>
//     <div className="flex justify-left text-sm pt-4">
//       {/* <img className="w-4 h-4" src={icons.calender} alt="date" /> */}
//       <div className="px-1">{props.date}</div>
//     </div>
//     <div className="flex justify-left text-sm">
//       {/* <img className="w-4 h-4" src={icons.location} alt="places" /> */}
//       <div className="px-1">{props.places} Places</div>
//     </div>
//     <div className="flex justify-left text-sm">
//       {/* <img className="w-4 h-4" src={icons.world} alt="countries" /> */}
//       <div className="px-1">{props.countries} Countries</div>
//     </div>

//     <div className="text-left pt-4">
//       {isReadMore ? text.slice(0, 100) : text}
//       <span onClick={toggleReadMore} className="read-or-hide">
//         {isReadMore ? "...    read more" : " show less"}
//       </span>
//     </div>
//   </div>

//   <hr className="card-hr" />

//   <button className="card-view-btn">View Details</button>
// </div>



 

<div  className="min-h-screen">
      <div id="Animation"  >
         <div id='content' className="animation-text text-white">
          <div>{props.name}</div>
          <div>{props.name}</div>
         </div> 
      </div>
    </div>


  )
}

export default Card