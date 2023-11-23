'use client'
import { useTranslation } from '@lib/app/i18n/client'
import gsap from 'gsap'
import React, {useLayoutEffect}from 'react'
import SplitType from 'split-type'
import Clippatheffect from './clippatheffect'

// https://images.unsplash.com/photo-1625240752293-00b16d38c512?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
// https://images.unsplash.com/photo-1648495754619-885ca69c1665?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
// https://images.unsplash.com/photo-1515104882246-521e5ba18f5e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
// https://unsplash.com/es/fotos/taza-de-ceramica-blanca-y-negra-sobre-mesa-negra--Xqckh_XVU4

const Home = (props) => {
  const {t} = useTranslation(props.lng)
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    const texto = new SplitType('#headerhome')
    const texto2 = new SplitType('#subheaderhome')
    tl.from(texto.words, {
      delay: 1,
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 0.4,
    }).from(texto2.words, {
      duration: 1,
      opacity: 0,
    })
    tl.play()
    
  }, [])

  return (
    <div className='w-screen h-screen lg:p-[40px] p-[10px]'>
      <Clippatheffect />

      <div style={{ top: `${300}px` }}  className='relative'>
        <h1 id="headerhome"  className='text-white font-header border-b-2 border-red-600 lg:leading-[140px] whitespace-nowrap   text-[40px]  lg:text-[150px]'>{t("header")}</h1>
        <p id="subheaderhome" className='text-white subheader'>{t("subheader")}</p>
      </div>
    </div>
  )
}

export default Home