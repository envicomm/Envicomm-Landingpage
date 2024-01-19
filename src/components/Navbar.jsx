import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [isFixed, setIsFixed] = useState(false);

  const toggleDropdown = () => setIsOpen(prevState => !prevState);

  const itemVariants = {
    hidden: { opacity: 0, y: '-20px' },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.2
        }
    })
};


const pathToLabelMap = {
  '/': 'Home',
  '/about': 'About',
  '/services': 'Services',
  '/clients': 'Clients',
  '/contactus': 'Contact',

};

  const MenuItems = () => (
<ul className="flex flex-col md:flex-row items-center justify-center md:space-x-6 text-xl w-full">
  {['/', '/about', '/services', '/contactus'].map((path, index) => (
    <motion.li 
      key={path} 
      onClick={() => setIsOpen(false)} 
      className="flex items-center px-10 md:px-4 py-2 text-custom-green hover:bg-custom-green1 hover:text-white rounded transition duration-500ease-in-out"
      initial="hidden"
      animate="visible"
      custom={index}
      variants={itemVariants}
    >
      <Link to={path} className="uppercase">
        {pathToLabelMap[path]}
      </Link>
    </motion.li>
  ))}
</ul>



  );

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50 p-4 transition-none bg-white shadow-md">
    <div className="mx-auto flex justify-between items-center md:container lg:container">
        {/* Logo and Menu button */}
        <div className="flex justify-between w-full md:w-auto items-center">
    <img src="/logoonly.png" alt="Your Logo" className="w-24 h-auto" />
    
    {/* This button will be hidden on screens larger than the small size */}
    <button onClick={toggleDropdown} className="text-custom-green md:hidden lg:hidden">
        <div className="flex items-center">
            <span className="mr-2">Menu</span>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
    </button>
</div>

        {/* Menu on larger screens */}
        <div className="hidden md:flex md:items-center">
            <MenuItems />
        </div>
    </div>

    {/* Menu on smaller screens */}
    {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 md:hidden bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-md">
                <MenuItems />
            </div>
        </div>
    )}
</nav>

);



}

export default Navbar;
