import React from "react";
import {NavLink} from "react-router-dom";
const Navabar = ({isNavActiveStyles}) => {
  return (
    <div className="navbar bg-gray-300 h-20 flex justify-center items-center  shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <h2 className="text-4xl font-semibold text-orange-500">Lawyer</h2>
        </div>
        <ul className="links flex gap-5 text-xl text-gray-700 hover:text-gray-900 duration-300">
          <li>
            <NavLink to="/"  style={isNavActiveStyles}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/news" style={isNavActiveStyles}>News</NavLink>
          </li>
          <li>
            <NavLink to="/our-service" style={isNavActiveStyles}>Our Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={isNavActiveStyles}>Contact</NavLink>
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
            className="bg-orange-500 py-2 px-5 rounded-md text-xl hover:bg-orange-400 duration-300"
          >
            Search
          </button>
          <button className="bg-orange-500 py-2 px-5 rounded-md text-xl hover:bg-orange-400 duration-300">
            Login/Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navabar;
