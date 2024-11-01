import React from 'react'

const Contactform = () => {
  return (
    <div className='max-w-lg mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6'> Contact Me </h1>
      <form className='space-y-4'>
        <div>
            <label className='block text-sm font-medium text-black-700' htmlFor='name'> Name </label>

            <input type='text'
            
            id="name"
            name="name"
            className="mt-1 block w-full border-y-gray-300 rounded-md shadow-sm focus:border-indigo-600 focus:ring-indigo-200"
            placeholder='your Name'
                                    >

            </input>
        </div>
        <div>
        <label className='block text-sm font-medium text-black-700' htmlFor='email'> Email </label>
        <input type='email'
        id='email'
        className='mt-1  border-y-gray-300 rounded-md  shadow-sm  focus:border-indigo-500 focus:ring-indigo-200'
        placeholder='youremail.com'
        />
        </div>
        <div>
            <label className='block text-sm font-medium text-black-700' htmlFor='message'> Messgae </label>
            <textarea className='mt-1 block w-full border-grey-300 rounded-md shadow-sm focus:border-indigo-500  focus:ring-indigo-200'></textarea>
        </div>
        <div>
            <button 
            type="submit"
            className='w-full bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-700'> Submit 
            </button>
        </div>
      </form>
    </div>
  )
}

export default Contactform
