import React, { useState } from 'react';

const CustomMouse = (props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorsize = 15;
  const handleMouseMove = (e) => {

  const { clientX, clientY } = e;
  setMousePosition({ x: clientX - cursorsize / 2, y: clientY - cursorsize / 2 });
  };

  return (
    <div
      className='w-screen h-screen bg-black'
      onMouseMove={handleMouseMove}
    >
        <div
              style={{
        top:mousePosition.y,
        left:mousePosition.x,
        position: "fixed",
        width: "15px",
        height: "15px",
        backgroundColor: "red",
        borderRadius: "50%",
        pointerEvents: "none",
        top: mousePosition.y,
        left: mousePosition.x,
        zIndex: 9999,

      }}
        className='hidden lg:block'
      />
      {props.children}


    </div>

  );
};

export default CustomMouse;
