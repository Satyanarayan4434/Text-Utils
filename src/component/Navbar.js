import React from 'react'

export default function Navbar(props) {
  return (
    <div> 
      <div className='w-full h-[4rem] bg-emerald-700 flex justify-center items-center p-6 overflow-hidden text-white'>
        <h1 className='font-mono font-extrabold text-3xl'>{props.heading}</h1>
        {/* <div>
          <ul className='flex gap-7'>
            <li>Home</li>
            <li>About Us</li>
            <li>Gallery</li>
            <li>Contact Us</li>
          </ul>
        </div> */}
        {/* <button className='h-10 w-[5rem] bg-slate-600 rounded-lg'>Contact</button> */}
        
      </div>
    </div>
  )
}
