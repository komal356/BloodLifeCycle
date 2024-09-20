'use client'

import { useState } from 'react'

import JoinUs from './joinUs'
const navigation = [

]

export default function AppVolunteer() {
 

  return (
    <section className='' style={{ height: 'auto', borderTop: '2px solid #AF0B0A' }}>
  <div className="bg-white relative" style={{
    backgroundImage: 'url(/img/vol.jpg)',
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 
    minHeight: '55rem'
  }}>
  
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
    >
      <div
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
  <div className="mx-auto max-w-2xl pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mt-9">
        Be a Volunteer
      </h1>
    </div>
  </div>

  <div className="text-center">
    <h2 className="text-xl tracking-tight text-white sm:text-2xl mb-8 w-full max-w-4xl h-auto px-4 mx-auto" >
      Step up, stand out, and make a difference. As a volunteer, your time and effort can change lives, strengthen communities, and inspire others. Be the spark that ignites positive change because together, we can make the world a better place.
    </h2>

    <div className="mt-4 flex items-center justify-center gap-x-6">
   
        <JoinUs/>
     
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

</section>
  )
}
