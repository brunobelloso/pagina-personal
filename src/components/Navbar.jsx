import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="bg-black h-20 flex justify-center items-center text-xl fixed top-0 w-full z-50">
      <div className="flex justify-between h-20 w-full max-w-5xl">
        <div className="text-white font-rouge cursor-pointer text-4xl flex items-center p-4" onClick={scrollToTop}>
          Bruno Belloso
        </div>
        <div className="block md:hidden p-6" onClick={toggleNavbar}>
          <i className={isOpen ? 'fas fa-times text-4xl cursor-pointer text-white' : 'fas fa-bars text-4xl cursor-pointer text-white'}></i>
        </div>
        <ul className={`${isOpen ? 'flex' : 'hidden'} flex-col md:flex md:flex-row items-center list-none text-center absolute md:static top-20 left-0 w-full md:w-auto bg-black md:bg-transparent transition-all duration-500`}>
          <li className="h-20">
            <Link
              activeClass="border-b-4 border-green-500"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleNavbar}
              className="text-white flex items-center no-underline px-4 h-full cursor-pointer"
            >
              About
            </Link>
          </li>
          <li className="h-20">
            <Link
              activeClass="border-b-4 border-green-500"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleNavbar}
              className="text-white flex items-center no-underline px-4 h-full cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;