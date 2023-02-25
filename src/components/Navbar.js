import React from "react";
import { Link } from "react-router-dom";
const Navabar = () => {
  return (
    <div className="navbar bg-gray-300 h-20 flex justify-center items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <h2 className="text-2xl font-semibold text-rose-500">Lawyer</h2>
        </div>
        <ul className="links flex gap-5 text-xl text-gray-700 hover:text-gray-900 duration-300">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">News</Link>
          </li>
          <li>
            <Link to="/">Our Services</Link>
          
            
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
        <div className="form flex gap-5">
          <input
            type="text"
            placeholder="Search"
            name="search"
            className="outline-none p-2 border border-gray-400 focus:border-gray-500 rounded-md"
          />
          <button
            type="submit"
            className="bg-rose-500 py-2 px-5 rounded-md text-xl hover:bg-rose-400 duration-300"
          >
            Search
          </button>
          <button className="bg-rose-500 py-2 px-5 rounded-md text-xl hover:bg-rose-400 duration-300">
            Login/Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navabar;
