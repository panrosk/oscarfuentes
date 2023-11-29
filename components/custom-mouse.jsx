import React, { use, useState } from 'react';
import gsap from 'gsap';

import { useIsomorphicLayoutEffect } from '@lib/utils/isomorphiceffect';
import useCursorEvents from '@lib/utils/cursorstore';





const CustomMouse = (props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  let xTo = gsap.quickTo(".ball", "x", {duration: 0.6, ease: "power3"}),
    yTo = gsap.quickTo(".ball", "y", {duration: 0.6, ease: "power3"});


  const cursorsize = 15;

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x:xTo(clientX - cursorsize / 2), y: yTo(clientY - cursorsize / 2) });
  };

  const {active, update} = useCursorEvents()


  useIsomorphicLayoutEffect(() => {
    if(active){
      gsap.to(".ball", {duration: 0.6, width:"80px",height:"80px", ease: "power3"})
      gsap.to("#inside", {duration: 0.6, opacity:1, ease: "power3"})
    } else {
      gsap.to(".ball", {duration: 0.6, width:"15px", height:"15px", ease: "power3"})
      gsap.to("#inside", {duration: 0.6, opacity:0, ease: "power3"})
    }
    
    
  },[active])

  return (
    <div
      className='!w-screen !h-full bg-black overflow-hidden'
      onMouseMove={handleMouseMove}
    
    >
        <div
        style={{
        top:mousePosition.y,
        left:mousePosition.x,
        position: "fixed",
        width: "15px",
        height: "15px",
        backgroundColor: "white",
        borderRadius: "50%",
        pointerEvents: "none",
        top: mousePosition.y,
        left: mousePosition.x,
        zIndex: 9999,
        

      }}
        className=' ball hidden lg:block pl-4 '
      >
        <span id="inside" className='text-black'>  </span>
      </div>
      {props.children}


    </div>

  );
};

export default CustomMouse;
