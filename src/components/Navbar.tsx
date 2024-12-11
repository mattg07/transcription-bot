import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-transparent w-full px-4 fixed mb-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">MyApp</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link to="/signin" className="text-white hover:text-gray-400">
            Sign In
          </Link>
          <Link to="/signup" className="text-white hover:text-gray-400">
            Sign Up
          </Link>
          <Link to="/fetch" className="text-white hover:text-gray-400">
            Fetch
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
