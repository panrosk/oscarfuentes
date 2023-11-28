import { useTranslation } from '@lib/app/i18n/client'
import React from 'react'
import nav from "@lib/configs/navigation.json"

const Navigation = (props) => {
  const {t} = useTranslation(props.lng,"navigation")
  const navigation = Object.keys(nav)


  return (
    <nav className=' absolute w-full flex justify-end top-0  bg-transparent'>
      <div className='text-white z-50  lg:px-[40px] lg:py-[10px] hidden lg:flex gap-x-10'>
        {navigation.map((item, index) => {
          return(
            <a className='hover:text-gray-300 text-white font-light' key={index} href={nav[item]}>{t(item)}</a>
          )
        })}
      </div>
    </nav>
  )
}

export default Navigation
