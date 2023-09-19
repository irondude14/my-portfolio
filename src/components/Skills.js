import React from 'react';
import HTML from '../assets/html5.png';
import CSS from '../assets/css3.png';
import JS from '../assets/JS.png';
import ReactImg from '../assets/react.png';
import Redux from '../assets/redux.png';
import Rails from '../assets/rails.png';
import Ruby from '../assets/ruby.png';
import PostgreSQL from '../assets/postgresql.png';
import SQlite from '../assets/sqlite.png';

function Skills() {
  return (
    <div name='skills' className='bg-[#0a192f]  text-gray-300 w-full h-screen'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl inline border-b-4 border-red-600'>
            Technical Skills
          </p>
          <p className='py-4'>
            These are the technologies that I'm experienced with
          </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#0b0f14] hover:scale-110 duration-300'>
            <img src={HTML} alt='HTML icon' className='w-20 mx-auto' />
            <p className='my-2'>HTML5</p>
          </div>
          <div className='shadow-md shadow-[#0b0f14] hover:scale-110 duration-300'>
            <img src={CSS} alt='CSS icon' className='w-20 mx-auto' />
            <p className='my-2'>CSS3</p>
          </div>
          <div className='shadow-md shadow-[#0b0f14] hover:scale-110 duration-300'>
            <img src={JS} alt='JS icon' className='w-20 mx-auto' />
            <p className='my-2'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#0b0f14] hover:scale-110 duration-300'>
            <img src={ReactImg} alt='React icon' className='w-20 mx-auto' />
            <p className='my-2'>React</p>
          </div>
          <div className='shadow-md shadow-[#0b0f14] hover:scale-110 duration-300'>
            <img src={Redux} alt='Redux icon' className='w-20 mx-auto' />
            <p className='my-2'>Redux</p>
          </div>
          <div className='shadow-md shadow-[#0b0f14] hover:scale-110 duration-300'>
            <img src={Ruby} alt='Ruby icon' className='w-20 mx-auto' />
            <p className='my-2'>Ruby</p>
          </div>
          <div className='shadow-md shadow-[#0b0f14] hover:scale-110 duration-300'>
            <img src={Rails} alt='Rails icon' className='w-20 mx-auto' />
            <p className='my-2'>Rails</p>
          </div>
          <div className='shadow-md shadow-[#0b0f14] hover:scale-110 duration-300'>
            <img
              src={PostgreSQL}
              alt='PostgreSQL icon'
              className='w-20 mx-auto'
            />
            <p className='my-2'>PostgreSQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
