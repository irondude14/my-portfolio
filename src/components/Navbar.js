import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/Logo.png';

function Navbar() {
  const [flag, setFlag] = useState(false);

  const handleFlag = () => setFlag(!flag);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '50px' }} />
      </div>

      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>Skills</li>
        <li>Work</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className='md:hidden z-10' onClick={handleFlag}>
        {!flag ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !flag
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen b flex flex-col justify-center items-center bg-[#0a192f]'
        }
      >
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>
      <div className='hidden lg:flex fixed flex-col top-[35%] right-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-90px] hover:ml-[-90px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              <FaLinkedin size={40} /> LinkedIn
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-90px] hover:ml-[-90px] duration-300 bg-gray-800'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              <FaGithub size={40} /> GitHub
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-90px] hover:ml-[-90px] duration-300 bg-purple-800'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              <HiOutlineMail size={40} /> Email
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-90px] hover:ml-[-90px] duration-300 bg-gray-500'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              <BsFillPersonLinesFill size={40} /> Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
