import React, { useState } from 'react';
import './Featured.css';

function Featured() {
  const [change,setChange]=useState("top-[20vh]");
  const [change1,setChange1]=useState("top-[20vh]")
  
  const mouseHover=()=>{
    setChange("top-[0vw]")
    
  }
  const mouseHover1=()=>{
    setChange1("top-[0vw]")
    
  }

  const mouseout=()=>{
    setChange("top-[20vh]")
  }
  const mouseout1=()=>{
   setChange1("top-[20vh]")
  }
  return (
    <div className='aboutmain w-full h-auto text-white pt-[5vw] pb-[5vw]'>
      <h1 className='abouth1 text-[4vw] lg:ml-12'>Featured projects</h1>
      <div className='aboutmain1 w-full h-auto border-t border-white-600 mt-[3vw] flex lg:px-12 lg:gap-6 pt-12 relative'>
      <div className='w-[15vw] lg:h-[10vw] flex justify-center items-center absolute lg:top-1/2 lg:left-1/2  -translate-x-[50%] -translate-y-[0%] overflow-hidden z-10'>
              <h1 className={`text-[6vw] font-bold absolute ${change} transition-all ease-linear text-lime-300`}>FYDE</h1>
            </div>
        <div className={`afirst lg:w-1/2 h-[85vh]  rounded-2xl  hover:scale-95 transition-all ease-linear duration-300 hover:transition-all hover:ease-linaer hover:duration-500 hover:${setChange} `} onMouseOver={mouseHover} onMouseOut={mouseout}>
          <div className='w-full h-full rounded-2xl bg-[url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png")] relative' >
          </div>
        </div>


        <div className='w-[15vw] h-[10vw]  flex justify-center items-center absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[0%] overflow-hidden z-10'>
              <h1 className={`text-[6vw] font-bold absolute ${change1} transition-all ease-linear text-lime-300`}>VISE</h1>
            </div>

        <div className={`afirstt lg:w-1/2 h-[85vh]  rounded-2xl  hover:scale-95 transition-all ease-linear duration-300 hover:transition-all hover:ease-linaer hover:duration-500 hover:${setChange1} `} onMouseOver={mouseHover1} onMouseOut={mouseout1}>
          <div className='lg:w-full h-full rounded-2xl bg-[url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png")] relative' >
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured