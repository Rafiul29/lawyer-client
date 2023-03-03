import React from "react";


export const CartItem = ({ cart }) => {
  return (
    <div className="product flex flex-col gap-10 bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl border border-gray-200 p-5 relative">
      <div className="img ">
        <img
          src="https://freepngimg.com/thumb/man/22654-6-man-thumb.png"
          alt=""
          className="h-50 w-50 rounded-full object-cover mx-auto bg-gray-400"
        />
      </div>
      <div className="text-center flex flex-col gap-1">
        <h3 className="text-2xl font-semibold">{cart.name}</h3>
        <span className="text-sm">Legal Consultent</span>
        <span className="mt-1 text-md">{cart.rating}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <button className="bg-gray-200 py-1 px-2 rounded-md ">
          legal Consulting
        </button>
        <button className="bg-gray-200 py-1 px-2 rounded-md ">
          Contract Law
        </button>
        <button className="bg-gray-200 py-1 px-2 rounded-md ">
          Contract Drifting
        </button>
        <button className="bg-gray-200 py-1 px-2 rounded-md ">Legal Law</button>

        <button className="bg-gray-200 py-1 px-2 rounded-md ">
          Data mining
        </button>
      </div>

      <button className="bg-orange-500 py-2 px-5 text-gray-600 inline-bock mx-auto rounded-md hover:bg-orange-400 hover:text-gray-500 duration-300 ">
        See more
      </button>
      <span className="absolute top-2 right-2 text-orange-500">20/hr</span>
    </div>
  );
};
