import React, { useState } from "react";
import { images } from "../constants";
import { Link } from "react-router-dom"; // Import Link from React Router

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="font-roboto bg-white shadow-md">
      <header className="container mx-auto py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img className="w-16" src={images.Logo} alt="logo" />
          <span className="text-black font-semibold">Health and Wellness</span>
        </div>
        <nav className="hidden lg:flex space-x-4 font-semibold text-black">
          {/* Navigation links */}
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/login" className="hover:underline border-2 border-blue-500 rounded-md px-3 py-1">
            Login
          </Link>
          <Link to="/register" className="hover:underline border-2 border-blue-500 rounded-md px-3 py-1">
            Register
          </Link>
        </nav>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            ☰
          </button>
          {menuOpen && (
            <div className="absolute top-16 right-6 bg-white border rounded-lg shadow-md p-4">
              {/* Mobile app drawer content */}
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="block text-gray-600 hover:text-gray-900 transition duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="block text-gray-600 hover:text-gray-900 transition duration-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="hover:underline border-2 border-blue-500 rounded-md px-3 py-1">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="hover:underline border-2 border-blue-500 rounded-md px-3 py-1">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </section>
  );
};

export default Header;
