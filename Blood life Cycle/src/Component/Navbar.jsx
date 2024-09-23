'use client'


import { useState } from 'react'
import Donor from './donor'
import Requester from './requester'


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
<section className="relative bg-cover bg-center bg-no-repeat min-h-[41rem]"
         style={{ backgroundImage: 'url(/img/file.png)' }}>
          
  <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl hidden lg:block">
    <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
         style={{
           clipPath: 'polygon(60% 0%, 100% 20%, 90% 70%, 50% 100%, 0% 80%, 10% 20%)',
           width: '120%',
           height: '120%',
           position: 'absolute',
           top: '-10%',
           left: '-10%',
           transform: 'rotate(30deg)',
           zIndex: -1,
         }}
    />
  </div>
  <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Logo in the top left corner */}
        <div className="absolute bottom-80 left-4" style={{ bottom: 'calc(20rem + 29px)' }}> {/* Adjust bottom value by 3px */}
  <img src="/img/Logo1.png" alt="Logo" className="w-96 h-2rem sm:h-8rem md:h-8rem lg:h-14rem xl:h-15rem" />
</div>




  <div className="relative isolate px-6 pt-14 lg:px-8">
    <div className="mx-auto max-w-2xl py-20 sm:py-24 lg:py-28">
      <div className="text-center">
        
        <h1 className="text-4xl font-bold tracking-tight text-red-700 sm:text-6xl">
          Every drop of blood is like a breath for someone.
        </h1>
        <p className="mt-4 text-2xl leading-8 text-red-700">
          "Donate blood, save a life."
        </p>
        <div className="mt-8 flex items-center justify-center gap-x-6">
       
         <Donor className="h-12 w-32 rounded-md bg-red-700 px-4 py-2 text-lg font-semibold text-white shadow-sm hover:bg-red-800" />

            <Requester className="h-12 w-32 rounded-md bg-red-700 px-4 py-2 text-lg font-semibold text-white shadow-sm hover:bg-red-800" />
    
        </div>
      </div>
    </div>

    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-[calc(100%-8rem)] -z-10 transform-gpu overflow-hidden blur-3xl"
    >
      <div
        style={{
          clipPath: 'polygon(60% 0%, 100% 20%, 90% 70%, 50% 100%, 0% 80%, 10% 20%)',
          background: 'linear-gradient(to top right, rgba(175, 11, 10, 0.7), rgba(175, 11, 10, 0.7))',
          width: '120%',
          height: '120%',
          position: 'absolute',
          top: '0',
          left: '0',
          transform: 'rotate(30deg)',
          zIndex: -1,
        }}
      />
    </div>
  </div>
</div>
  {/* Hide background image on small screens */}
  <div className="lg:hidden absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
       style={{ backgroundImage: 'none' }}></div>
<style jsx>{`
  @media (max-width: 500px) {
    .bg-cover {
      background-image: none !important;
    }
  }
`}</style>
</section>
  )
}
