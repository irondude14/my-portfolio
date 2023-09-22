import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

import About from './About';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-red-600'>Hey, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-gray-200'>
          Vlad Kadyrov
        </h1>
        <p className='text-4xl sm:text-7xl font-bold text-gray-400'>
          I'm a Full-Stack Developer.
        </p>
        <p className=' text-gray-400 py-4 max-w-[500px]'>
          I'm a developer specializing in creating a web applications with
          responsive UX.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600'>
            <Link to='work' smooth={true} duration={500}>
              My Work
            </Link>
            <div className='group-hover:rotate-90 group-hover:-translate-y-0.5 duration-300'>
              <HiArrowNarrowRight className='ml-2' />
            </div>
          </button>
        </div>
      </div>
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default Home;
