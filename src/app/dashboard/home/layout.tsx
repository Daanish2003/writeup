import { LayoutProps } from '@/types/types'
import React from 'react'

const HomeLayout = ({children}: LayoutProps) => {
  return (
    <div className="h-full">{children}</div>
  )
}

export default HomeLayout