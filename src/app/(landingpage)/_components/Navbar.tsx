"use client"
import React  from 'react'
import { Dancing_Script } from 'next/font/google'
import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import LoginButton from '@/components/auth/LoginButton';
import RegisterButton from '@/components/auth/RegisterButton';


const dancing_script = Dancing_Script({ subsets: ["latin"], weight: ["400","500", "600", "700"] });


const Navbar = () => {

  return (
    <div className="min-h-12 px-6 py-2 items-center flex justify-between">
        <div className="flex flex-row items-center w-full justify-between">
            <span className="font-bold text-2xl">WriteUp</span>
            <div className="sm:flex flex-row gap-8 md:gap-6 sm:gap-4 pt-1 items-center px-2 text-foreground text-xl font-normal hidden">
                <Link href="/">Home</Link>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/community">Community</Link>
                <Link href="/docs">Docs</Link>
            </div>
            <div className="sm:block hidden md:flex gap-2">
              <LoginButton><Button variant="outline" size="sm">Login</Button></LoginButton>
                <RegisterButton><Button variant="default" size="sm">Signup</Button></RegisterButton>
            </div>
            <div className="sm:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
            </div>
        </div>
    </div>
  )
}

export default Navbar