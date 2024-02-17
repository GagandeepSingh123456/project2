import React from 'react';
import './Cluch.css'

function Cluch() {
  return (
    <div  className='cluch w-full lg:h-screen overflow-hidden'>
      <div data-scroll data-scroll-section data-scroll-speed="-.5" className="cluch1 w-full lg:h-full flex justify-center items-center gap-10 bg-lime-500 lg:px-12 ">
        <div className="one lg:w-[45vw] lg:h-[60vh]  rounded-2xl relative bg-green-900">
          <img className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  lg:w-[8vw]" src="	https://ochi.design/wp-content/uploads/2022/04/logo001.svg
" alt="" />
    <button className='border-2 px-3 py-2 rounded-full text-lime-500 font-bold border-lime-500 absolute top-[80%] left-[5%]'>2019-2022</button>
        </div>
        <div className="two lg:w-[23vw] lg:h-[60vh]  rounded-2xl relative bg-zinc-900">
          <img className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  lg:w-[8vw]' src="	https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className='border-2 px-3 py-2 rounded-full text-white font-semibold border-white absolute top-[80%] left-[5%]'>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className="three lg:w-[23vw] lg:h-[60vh]  rounded-2xl relative bg-zinc-900">
          <img className='absolute bg-zinc-900 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  lg:w-[8vw]' src="	https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className='border-2 px-3 py-2 rounded-full text-white font-semibold border-white absolute top-[80%] left-[5%]'>BUSINESS BOOTCAMP ALUMNI</button>
        </div>
      </div>
    </div>
  )
}

export default Cluch