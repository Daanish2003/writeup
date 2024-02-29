
import { LayoutProps } from '@/types/types'
import React from 'react'
import DashSide from './_components/DashSide'


const Dashboardlayout = ({children}: LayoutProps) => {
  return (
    <div className="h-full flex flex-row">
        <DashSide />
        <div className="ml-60 h-screen px-3">
        {children}
        </div>
        </div>
  )
}

export default Dashboardlayout