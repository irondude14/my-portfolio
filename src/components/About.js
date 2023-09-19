import React from 'react';

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-red-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-3xl font-bold'>
            <p>
              Hello, my name is Vlad & this is my personal website. Take your
              time and check it out.
            </p>
          </div>
          <div>
            <p>
              I take great pleasure in crafting responsive full-stack
              applications. You can explore my projects in the 'Work' section,
              where links to both the GitHub repositories and live versions of
              these applications are provided. If you're considering adding me
              to your team, please don't hesitate to reach out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
