'use client';
import React, { useState } from 'react';
import { FaUser, FaHeart, FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white fixed top-0 left-0 shadow-md w-full h-24 z-50">
      <div className="container max-w-[1440px] mx-auto flex items-center justify-between py-10 px-4 sm:px-8 lg:px-16 h-full">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold text-black">FurniGo</div>

        {/* Navigation Links (for larger screens) */}
        <div className="hidden sm:flex space-x-8 text-black text-base">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <Link href="/shop" className="hover:text-gray-600">Shop</Link>
          <Link href="/about" className="hover:text-gray-600">About</Link>
          <Link href="/contact" className="hover:text-gray-600">Contact</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="sm:hidden flex items-center" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes className="w-6 h-6 text-black" /> : <FaBars className="w-6 h-6 text-black" />}
        </div>

        {/* Icons Section (Desktop View) */}
        <div className="hidden sm:flex items-center space-x-6 text-black">
        <Link href="/profile" passHref>
      <div className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer">
        <FaUser />
      </div>
    </Link>
    <Link href="/product" passHref>
      <div className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer">
        <FaHeart />
      </div>
    </Link>
    <Link href="/" passHref>
      <div className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer">
        <FaSearch />
      </div>
    </Link>
          <Link href="/cart" passHref>
      <div className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer">
        <FaShoppingCart />
      </div>
    </Link>
        </div>
      </div>

      {/* Mobile Menu (when hamburger is clicked) */}
      <div
        className={`sm:hidden fixed top-0 left-0 w-full h-full bg-white z-50 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <FaTimes onClick={toggleMenu} className="w-6 h-6 text-black cursor-pointer" />
        </div>
        <div className="flex flex-col items-center space-y-6 mt-8">
          <Link href="/" className="text-black text-xl hover:text-gray-600">
            Home
          </Link>
          <Link href="/shop" className="text-black text-xl hover:text-gray-600">
            Shop
          </Link>
          <Link href="/about" className="text-black text-xl hover:text-gray-600">
            About
          </Link>
          <Link href="/contact" className="text-black text-xl hover:text-gray-600">
            Contact
          </Link>

          {/* Mobile Icons */}
          <div className="flex space-x-6 mt-8">
          <Link href="/profile" passHref>
      <div className="w-6 h-6 text-black hover:text-gray-600 ">
        <FaUser />
      </div>
    </Link>
    <Link href="/product" passHref>
      <div className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer">
        <FaHeart />
      </div>
    </Link>
    <Link href="/" passHref>
      <div className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer">
        <FaSearch />
      </div>
    </Link>
            <Link href="/cart" passHref>
      <div className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer">
        <FaShoppingCart />
      </div>
    </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
