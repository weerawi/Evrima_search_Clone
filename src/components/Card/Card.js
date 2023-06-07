import React from 'react'

const Card = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {/* <img src={props.image} alt="Product" className="w-full h-40 object-cover mb-4" />
      <div className="flex justify-between">
        <div className="flex items-center">
          <span className="text-yellow-500 mr-1">{props.rating}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v4.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 7.586V3a1 1 0 011-1zm-1 14a1 1 0 100-2 1 1 0 000 2zm9-6a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 010-2h2V11h-2a1 1 0 010-2h3a1 1 0 011 1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <span className="text-gray-600">{props.views} views</span>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-lg font-semibold">${props.price}</span>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
          Add to Cart
        </button>
      </div> */}
      <div>{props.id}</div>
      <div>{props.name}</div>
    </div>
  )
}

export default Card