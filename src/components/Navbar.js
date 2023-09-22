import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaMedium } from 'react-icons/fa6';
import Logo from '../assets/Logo.png';
import { Link } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

function Navbar() {
  const [flag, setFlag] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleFlag = () => setFlag(!flag);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '50px' }} />
      </div>

      {currentPath === '/email-form' ? (
        <></>
      ) : (
        <ul className='hidden md:flex'>
          <li>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to='work' smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      )}

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
        <li className='py-6 text-4xl'>
          <Link onClick={handleFlag} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleFlag} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleFlag} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleFlag} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleFlag} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div className='hidden lg:flex fixed flex-col top-[35%] right-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-90px] hover:ml-[-90px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/vkadyrov/'
            >
              <FaLinkedin size={40} /> LinkedIn
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-90px] hover:ml-[-90px] duration-300 bg-gray-800'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/irondude14/'
            >
              <FaGithub size={40} /> GitHub
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-90px] hover:ml-[-90px] duration-300 bg-pink-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://medium.com/@vkadyrov'
            >
              <FaMedium size={40} /> Blog
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-90px] hover:ml-[-90px] duration-300 bg-purple-800'>
            <div className='flex justify-between items-center w-full text-gray-300'>
              <HiOutlineMail size={40} />
              <RouterLink to='/email-form'>Email</RouterLink>
            </div>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-90px] hover:ml-[-90px] duration-300 bg-gray-500'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://profile.indeed.com/p/vladyslavk-p9yf2fd'
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
