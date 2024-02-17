import { motion } from 'framer-motion'
import React from 'react';
import './Marquee.css';

function Marquee() {
  return (
    <div data-scroll data-scroll-section  data-scroll-speed=".1"   className='marque w-full lg:h-[70vh] bg-green-900 lg:py-20 rounded-tl-[20px] rounded-tr-[20px] '>
      <div   className="marque1 w-full lg:h-[50vh] move flex text-white border-t-2 border-b-2 lg:text-[20vw] whitespace-nowrap overflow-hidden uppercase font-bold items-center justify-center tracking-tighter">
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:7,repeat:Infinity}} className='px-[4vw] tracking-[-1vw]'>we are ochi</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:7,repeat:Infinity}} className='px-[4vw] tracking-[-1vw]'>we are ochi</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:7,repeat:Infinity}} className='px-[4vw] tracking-[-1vw]'>we are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee