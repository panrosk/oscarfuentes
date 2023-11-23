/* eslint-disable react/no-unescaped-entities */
"use client"
import React , {useRef, useEffect, useLayoutEffect}from 'react'
import gsap from "gsap";
import SplitType from 'split-type'

function Loader() {
  useLayoutEffect(() => {

    const texto = new SplitType('#header')
z
    const subheader = new SplitType('#subheader')
    const tl = gsap.timeline()
    tl.to(texto.chars, {
        duration: 1,
        opacity: 1,
        stagger: 0.4,
    }).to(subheader.words, {
      duration: 1,
      opacity: 1,
    })

    tl.play()

    
        
}, [])

  return (
    <div id='container' className="absolute w-screen h-screen p-[10px] lg:p-[40px]">
      <div style={{ top: `${300}px` }}  className='relative'>
        <h1 id="header"  className='text-white font-header  text-[60px] lg:text-[200px]'>{"Don't Try"}</h1>
        <p id="subheader" className='text-white lg:-mt-10 subheader'> ― Charles Bukowski </p>
      </div>
    </div>
  )
}

export default Loader