import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';
import Modal from '../Modal';
import Contact from '../Contact/Contact';  // Import the Contact component

const Nav = () => {
  const user = useContext(userContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    axios.get('http://localhost:3001/logout')
      .then(res => {
        if (res.data === 'success')
          window.location.href = '/'
      })
      .catch(err => console.log(err));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-800 text-white text-lg">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <Link to={'/'}><div className="font-bold cursor-pointer">Blog-App</div>
        {user.username ? (
          <p className="flex items-center gap-2 font-thin text-[13px]">
            <FaUser />Hello, {user.username}
          </p>
        ) : (
          <p className="flex items-center gap-2 font-thin text-[13px]">
            <FaUser />Guest user
          </p>
        )}
        </Link>
        
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="hidden sm:flex gap-4">
          <Link to={'/'} className="text-gray-300 hover:text-white transition duration-300">Home</Link>
          <Link to={'/Create'} className="text-gray-300 hover:text-white transition duration-300">Create</Link>
          <button onClick={openModal} className="text-gray-300 hover:text-white transition duration-300">Contact</button>
        </div>
        <div className="hidden sm:block">
          {user.username ? (
            <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded text-base font-bold" onClick={handleLogout}>Logout</button>
          ) : (
            <Link to={'/Login'}>
              <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded text-base font-bold">Login</button>
            </Link>
          )}
        </div>
      </div>
      {/* Mobile sliding panel */}
      {isOpen && (
        <div className="sm:hidden bg-gray-800 px-4 pt-2 pb-4">
          <Link to={'/'} onClick={toggleMenu} className="block text-white mb-2">Home</Link>
          <Link to={'/Create'} onClick={toggleMenu} className="block text-white mb-2">Create</Link>
          <button onClick={() => { toggleMenu(); openModal(); }} className="block text-white mb-2">Contact</button>
          {user.username ? (
            <button className="bg-white px-4 py-2 text-black text-sm w-full" onClick={handleLogout}>Logout</button>
          ) : (
            <Link to={'/Login'}>
              <button className="bg-blue-500 px-4 py-2 font-bold rounded text-sm w-full">Login</button>
            </Link>
          )}
        </div>
      )}
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        
      </Modal>
    </div>
  );
};

export default Nav;
