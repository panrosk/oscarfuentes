import { useIsomorphicLayoutEffect } from '@lib/utils/isomorphiceffect'
import gsap from 'gsap'
import React, { useRef } from 'react'
import portafolio from "@lib/configs/portafolio.json"
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

const Portafolio = () => {
  const containerref = useRef(null)
  const imagenref = useRef(null)

  const projects = Object.keys(portafolio)

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    let speed = imagenref.current.getAttribute('data-speed')
    let ctx = gsap.context(() => {

        const tl = gsap.timeline(
            {
                scrollTrigger: {
                  trigger: containerref.current,
                  start: 'top 50%',
                  end: 'bottom 80%',
                  scrub: true,
                  toggleActions: 'play none none reverse',
                },
              }
        );
        tl.fromTo(imagenref.current, {
            clipPath: `polygon(0 0, 0% 0%, 0% 0%, 0% 0%)`,
        },{
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`,
        })
      }, null);
      return () => ctx.revert();
  }, [])  
  return (

    <section ref={containerref} className='relative bg-black h-full lg:p-[40px] w-full' id='portafolio'>
            <div className='absolute flex items-center lg:items-start justify-end bg-black '>
            <img ref={imagenref}  src="https://images.unsplash.com/photo-1648495754619-885ca69c1665?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-5/6 lg:w-1/2 h-[600px] lg:h-[1500px]' alt="" />

        </div>
        <div className=' absolute flex items-center h-full   w-full '>
            <div className='w-full'>
            <h1 className='text-white font-header font-normal lg:leading-[140px] whitespace-nowrap   text-[40px]  lg:text-[150px]'>Portafolio</h1>
            <div className='flex flex-col mt-10 divide-y-2 divide-white w-full'>
                {projects.map((item,index)=>{
                    return(
                        <a target='_blank' key={index} href={portafolio[item].website}  className='text-white text-[28px] lg:text-[80px]  hover:text-gray-300'>{portafolio[item].name} </a>
                    )
                })}
            </div>
            </div>

        </div>

    </section>
  )
}

export default Portafolio