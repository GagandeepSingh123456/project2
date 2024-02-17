import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import {motion} from "framer-motion";
import './Landing.css';

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.5"  className='page1 w-full h-screen lg:pt-44  bg-zinc-900'>
      <div className="page1h w-full lg:h-[auto]  border-white ">
       
          {["we create","eye-opening","presentations"].map((item,index)=>(
             <div className="headings text-white lg:text-[7.5vw] lg:px-12 lg:leading-[110px] uppercase font-semibold lg:tracking-[-9px] flex">
              {index ===1 && <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} d className='pageimg w-[9vw] lg:h-[5.3vw]  bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] bg-cover relative lg:top-[1.4vw] rounded-[5px]'></motion.div>}
            <h1 key={index}>{item}</h1>  </div>
          ))}
        </div>
        <div className="page1h1 border-t-2 border-zinc-700 lg:mt-[5vw] text-white">
          <div className="value flex justify-between lg:px-12 lg:py-5">
          {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
            <p key={index}>{item}</p>
          ))}
          <div className="value1 flex">
            <p className='border-2 px-3 py-1 rounded-full uppercase'>Start the project</p>
            <span className='pagelogo border-2 px-2 py-1 rounded-full rotate-[45deg] ml-2'>< FaArrowUpLong /></span>
          </div>
          </div>
          

        </div>
    
      
      
       </div>
  )
}

export default LandingPage