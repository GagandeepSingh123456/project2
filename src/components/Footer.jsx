import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div  className='foot w-full lg:h-screen'>
      <div className="foot1 w-full lg:h-full flex lg:px-12 py-5">
        <div className="foot2 lg:w-1/2 lg:h-full  relative">
          <h1 className='text-white text-[6vw] font-bold tracking-tighter'>EYE- <br /> OPENING</h1>
          <h2 className='text-white absolute lg:top-[90%] text-[2.5vw]'>Ochi</h2>
        </div>
        <div className="foot3 lg:w-1/2 lg:h-full  relative">
        <h1 className='text-white text-[6vw] font-bold tracking-tighter'>PRESENTATIONS</h1>
        {["Services","Our work","About us","Insights"].map((item,index)=>(
         <> <a key={index} href="" className='text-white lg:text-[2vw] border-b-2'>{item}</a><br/></>
        ))}
        
        <p className='text-gray-300 absolute lg:top-[93%]'>Design 2024</p>
        <p className='text-gray-300 absolute lg:top-[93%] right-[0]'>Gagandeep Singh</p>
        </div>
      </div>
    </div>
  )
}

export default Footer