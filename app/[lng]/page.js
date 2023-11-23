'use client'
import Image from 'next/image'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

import Loader from '@lib/components/loader';
import HomeContent from '@lib/components/home';
import { useState ,useLayoutEffect,useRef} from 'react';

import gsap from 'gsap';

export default  function Home({ params: { lng } }) {
  const containerRef = useRef(null)

  
  const [loading, setLoading] = useState(true)
  useLayoutEffect(() => {
    const tl = gsap.timeline()
    tl.to("#loadingscreen", {
      delay: 3,
      duration: 1,
      opacity: 0,
      onComplete: () => {
        setLoading(false)
      }
    })
  }, [])


  return (
    <>
  <LocomotiveScrollProvider
  options={
    {
      smooth: true,
      // ... all available Locomotive Scroll instance options 
    }
  }
  watch={
    [
      //..all the dependencies you want to watch to update the scroll.
      //  Basicaly, you would want to watch page/location changes
      //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    ]
  }
  containerRef={containerRef}
  >
    {loading ? <div id="loadingscreen">
      <Loader />
    </div>  :
    
      
     <HomeContent lng={lng}/>}



  </LocomotiveScrollProvider>

  </>
  )
}
