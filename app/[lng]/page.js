'use client'
import Image from 'next/image'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Loader from '@lib/components/loader';
import HomeContent from '@lib/components/home';
import { useState ,useLayoutEffect,useRef} from 'react';
import AboutHeader from '@lib/components/aboutheader';
import gsap from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Lenis from '@studio-freight/lenis'
import Navigation from '@lib/components/navigation';
import CustomMouse from '@lib/components/custom-mouse';
import Portafolio from '@lib/components/portafolio';
import ProjectDescription from "@lib/components/projectsdescription"

export default  function Home({ params: { lng } }) {
  const [loading, setLoading] = useState(false)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)


    


  }, [])


  return (

  <main className='bg-black' >
    <CustomMouse>
    <Navigation lng={lng} />
    <HomeContent lng={lng} />
    <AboutHeader lng={lng} />
    <Portafolio lng={lng} />
    <ProjectDescription lng={lng}/>
    
    </CustomMouse>

  </main>



  )
}
