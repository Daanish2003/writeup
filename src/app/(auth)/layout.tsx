import { LayoutProps } from '@/types/types'
import React from 'react'

const AuthLayout = ({children}: LayoutProps) => {
  return (
    <div className="flex justify-center items-center h-screen">{children}</div>
  )
}

export default AuthLayout