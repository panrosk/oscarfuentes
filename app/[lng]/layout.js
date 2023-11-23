import { dir} from 'i18next'
import { languages } from '../i18n/settings'
import "./globals.css"
import localFont from 'next/font/local'


const myFont = localFont({ src: [
  {
    path:'../../public/fonts/Franie-SemiLight.otf',
    
  }
],
variable: '--header-font',
})



export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export  default async function RootLayout({
  children,
  params: {
    lng,
    
  }
}) {


  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body className={myFont.className}>

        {children}
      </body>
    </html>
  )
}
