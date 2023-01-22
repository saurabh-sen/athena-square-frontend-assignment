import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo.png'

const Navbar = () => {
  return (
    <nav className='Navbar flex flex-wrap sm:justify-between justify-center items-center bg-[#0f0f0f] text-white py-4 fixed w-full z-10' >
      <div className="navbar__text text-base flex flex-wrap justify-center items-center sm:ml-16 gap-8">
        <Image className='' src={logo} alt="logo" width={40} height={40} />
        <p className="text flex items-center gap-2 cursor-pointer">
          <span className='font-semibold'>Product</span>
          <svg className='w-4' color='white' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill='currentColo' d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
        </p>
        <p className="text flex items-center cursor-pointer">
          <span className='font-bold'>Our Story</span>
        </p>
        <p className="text flex items-center gap-2 cursor-pointer">
          <span className='font-semibold'>Resources</span>
          <svg className='w-4' color='white' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill='currentColo' d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
        </p>
      </div>
      <div className="navbar__buttons sm:mr-16">
        <button className='text-base rounded-lg my-4 sm:my-0 py-4 px-6 bg-[linear-gradient(135deg,#0084e9,#762cec)]'>Book a demo</button>
      </div>
    </nav>
  )
}

export default Navbar