import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';

function Email() {
  const [email, setEmail] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail({
      ...email,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_d31izys',
        'contact_form',
        e.target,
        'yeUo_fr2SFcX6kcF3'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setEmail({
      user_name: '',
      user_email: '',
      message: '',
    });
  };
  return (
    <div
      name='email'
      className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'
    >
      <form
        ref={email}
        onSubmit={handleSubmit}
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300'>
            Send Email
          </p>
          <p className='text-gray-300 py-4'>
            Send me an email with the form below
          </p>
        </div>

        <input
          type='text'
          name='user_name'
          placeholder='Name'
          className='p-2 bg-[#d1d9f3]'
          value={email.user_name}
          onChange={handleChange}
        />

        <input
          type='email'
          name='user_email'
          placeholder='Email'
          className='my-4 p-2 bg-[#d1d9f3]'
          value={email.user_email}
          onChange={handleChange}
        />

        <textarea
          name='message'
          className='bg-[#d1d9f3] p-2'
          rows='10'
          value={email.message}
          onChange={handleChange}
          placeholder='Your message'
        />
        <div className='flex justify-center items-center mx-20'>
          <input
            type='submit'
            value='Send'
            className='text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-2 my-8 mx-auto flex items-center cursor-pointer'
          />
          <button className='text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-2 my-8 mx-auto flex items-center cursor-pointer'>
            <Link to='/'>Back</Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Email;
