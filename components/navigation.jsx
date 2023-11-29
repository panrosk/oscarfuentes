import { useTranslation } from '@lib/app/i18n/client'
import React, { useState } from 'react'
import nav from "@lib/configs/navigation.json"
import gsap from 'gsap'
import { useIsomorphicLayoutEffect } from '@lib/utils/isomorphiceffect'
import useCursorEvents from '@lib/utils/cursorstore'


const Navigation = (props) => {
  const {t} = useTranslation(props.lng,"navigation")
  const navigation = Object.keys(nav)
  const {active,updateActive} = useCursorEvents()

  useIsomorphicLayoutEffect(() => {
    
    
    let ctx = gsap.context(() => {
      const links = gsap.utils.toArray('a');
      links.forEach((link) => {
        link.addEventListener('mouseenter', () => {
          const element=link.querySelector('#under')
          let tl= gsap.timeline({paused:true})
          tl.fromTo(element, {width: "0%"}, {width: "100%", duration: 0.5, ease: "power3.inOut"})
          tl.play()
          
        });
        link.addEventListener('mouseleave', () => {
          const element=link.querySelector('#under')
          let tl= gsap.timeline({paused:true})
          tl.fromTo(element,  {width: "100%", duration: 0.5, ease: "power3.inOut"},{width: "0%"})
          tl.play()
        });
      });
    }, null);

    return () => ctx.revert();
  }, [])



  


  return (
    <nav className=' absolute w-full flex justify-end top-0  bg-transparent'>
      <div className='text-white z-50  lg:px-[40px] lg:py-[10px] hidden lg:flex gap-x-10'>

        {navigation.map((item, index) => {
          return(
            <a o className=' relative text-white font-light' key={index} href={nav[item]}>
            <span onMouseEnter={updateActive} onMouseLeave={updateActive} id="text">{t(item)}</span>
            <span  id="under" className='block absolute bottom-0 bg-white left-0  h-[1px] z-[100]'></span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}

export default Navigation
