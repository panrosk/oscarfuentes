import React from 'react'
import { useTranslation } from '@lib/app/i18n/client'

const Contact = (props) => {
  const {t} = useTranslation(props.lng)

  return (
    <div className='w-screen h-full min-h-screen lg:p-[40px] p-[10px]'>
        <div className='flex justify-end '>
        <h1 className='text-white font-header z-50 font-normal lg:leading-[140px] whitespace-nowrap   text-[40px]  lg:text-[150px]'>Contact</h1>
        </div>
        <div className=' mt-20 text-white font-header  !w-full  text-[18px] lg:text-[32px] w-full! subheader'>

                <a className='hover:underline' href="">{t("whatsapp")}</a>
                <br/>
                <a className='hover:underline' href="">{t("email")}</a>

        </div>
    </div>
  )
}

export default Contact