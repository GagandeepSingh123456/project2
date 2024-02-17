import React from 'react';
import './About.css';

function About() {
  return (
    <div   className='about w-full h-auto bg-lime-300 pt-[4vw] pb-[4vw]'>
      <div   className='w-full h-full '>
       <h1 className='abouth1 lg:text-[3.5vw] tracking-tighter lg:leading-[3.6vw] lg:ml-12 lg:mr-[25vw]'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
       <div className="about1 w-full h-auto flex">
        <div className="about11 lg:w-1/2 lg:h-[70vh]  mt-[3vw] lg:px-12">
          <h1 className='lg:text-[3.5vw] lg:font-semibold'>Our approach:</h1>
          <button className=' py-3 px-10 rounded-full font-bold bg-black text-white mt-5'>Read More</button>
        </div>
        <div className="about11 lg:w-1/2 h-[80vh] bg-lime-600 mt-[3vw] mx-[4vw] rounded-[20px] overflow-hidden">
          <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" className='object-cover w-full h-full' alt="" />
        </div>
       </div>
       </div>
    </div>
  )
}

export default About