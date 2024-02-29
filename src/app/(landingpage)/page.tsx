import React from 'react'
import Navbar from './_components/Navbar'
import LoginButton from '@/components/auth/LoginButton'
import { Button } from '@/components/ui/button'
import Footer from './_components/Footer'

const Landingpage = () => {
  return (
    <>
    <Navbar />
    <main className="flex flex-grow justify-center mt-32">
    <div className="flex flex-col ">
      <span className="font-bold lg:text-7xl md:text-6xl sm:text-5xl text-3xl text-wrap">Create your Own Fantasy Story</span>
      <span className="font-light lg:text-3xl md:text-2xl sm:text-xl text-lg text-wrap justify-center flex mt-6">One tool for every fictional writers</span>
      <div className="flex justify-center">
        <LoginButton>
      <Button variant="default" size="lg" className="mt-10">Get Started</Button>
      </LoginButton>
      </div>
    </div>
    </main>
    <Footer />
    </>
  )
}

export default Landingpage