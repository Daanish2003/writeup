import { LayoutProps } from '@/types/types'
import { Dancing_Script, Poppins } from 'next/font/google';
import React from 'react'

const poppins = Poppins({ subsets: ["latin"], weight: ["100","200","300","400", "500", "600", "700", "800", "900"] });
const dancing_script = Dancing_Script({ subsets: ["latin"], weight: ["400","500", "600", "700"] });

const LandingPageLayout = ({children} : LayoutProps) => {
  return (
    <div className={`${dancing_script.className} flex flex-col min-h-screen relative`}>
       {children}
    </div>
  )
}

export default LandingPageLayout