'use client'
import Image from 'next/image'

import Loader from '@lib/components/loader';
import HomeContent from '@lib/components/home';
import { useState ,useLayoutEffect} from 'react';

import gsap from 'gsap';

export default  function Home({ params: { lng } }) {
  
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
    {loading ? <div id="loadingscreen">
      <Loader />
    </div>  :
      
     <HomeContent lng={lng}/>}

    </>

  )
}
