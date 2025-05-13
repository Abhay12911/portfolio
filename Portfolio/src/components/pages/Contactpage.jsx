import React from 'react'

const ContactPage = () => {
  return (
    <div className='bg-gradient-to-b from-black to-gray-800 '>
      <div className='max-w-screen-lg mx-auto mt-64 pb-8 ml-6 sm:ml-56'>

        <h1 className='text-4xl border-b-4 inline border-sky-500 font-bold'>Contact</h1>
        <p className='text-2xl mt-10'>Lets's get in touch</p>

        <div className='flex flex-col'>
          <form action="https://getform.io/f/bvrrmwzb" method="POST" className='pt-20'>

            <label className='text-2xl font-semibold'>Name</label>
            <div className='mt-4 mr-4 sm:mr-0'>
              <input type="text" name="name" placeholder='Enter your name' className=' w-full sm:w-1/2 h-10 rounded-lg bg-black text-white text-xl pl-5 focus:outline-none shadow-md shadow-sky-400' required></input>
            </div>
            <div className='mt-4'>
              <label className='text-2xl font-semibold'>Email</label>
              <div className='mt-4 mr-4'>
                <input type="email" name="name" placeholder='Enter your email' className=' w-full sm:w-1/2 h-10 rounded-lg bg-black text-white text-xl pl-5 focus:outline-none shadow-md shadow-sky-400' required></input>
              </div>
            </div>
            <div className='mt-4'>
              <label className='text-2xl font-semibold'>Description</label>
              <div className='mt-4 mr-4'>
                <textarea name="message" rows="10" placeholder='What do you want to say?' className='w-full sm:w-1/2  rounded-lg bg-black text-white text-xl pl-5 pt-2 focus:outline-none shadow-md shadow-sky-400 ' required />
              </div>
            </div>
            <button className='bg-gradient-to-tr from-purple-500 to-sky-500 py-4 px-6 w-36 text-white mt-4 rounded-md hover:scale-105 duration-300'>Let's Talk</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default ContactPage