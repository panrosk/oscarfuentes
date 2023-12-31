import React,{useRef} from 'react'
import { useTranslation } from '@lib/app/i18n/client'
import { useIsomorphicLayoutEffect } from '@lib/utils/isomorphiceffect';
import gsap from 'gsap'
import SplitType from 'split-type'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'


const AboutHeader = (props) => {
    const {t} = useTranslation(props.lng)
    const refi = useRef(null)

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const texto = new SplitType("#texto",{lineClass:"overflow-hidden"})

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: refi.current,
          start: 'top 50%',
          end: 'bottom 20%',
          pin: true,
          scrub: true,
          toggleActions: 'play none none reverse',
        },
        paused: true,
      });
      tl.fromTo(texto.words,{opacity:0, y:100},  {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.07,


      })
    }, refi);

    return () => ctx.revert();
  }, [])
    
    
  return (
    <div className='bg-black !w-full overflow-hidden'>
    <section id="about" ref={refi}  className='h-screen flex justify-center !w-full bg-black '>
        <div   className='overflow-hidden flex justify-center !w-full bg-black lg:p-[40px]  '>
        <p id="texto"  style={{fontKerning:"none"}}  className='text-white font-header  !w-full  text-[24px] lg:text-[32px] w-full! subheader '>{t("about")}</p>
        </div>
    </section>
    </div>

  )
}

export default AboutHeader