import React from 'react'

const Header = () => {
  return (
    <div className='Header flex flex-col justify-center items-center min-h-screen max-w-[48rem] m-auto text-center p-6 gap-8 pt-60 md:pt-0'>
      <h1 className='text-6xl font-bold'>Double the hires, half the effort</h1>
      <p className="desc text-base text-gray-400">Open conversations and nurture relationships at scale and be the first choice when your ideal candidate is ready to explore.</p>
      <button className='px-6 py-4 font-semibold bg-[#f4f4f4] rounded-lg hover:outline hover:outline-2 hover:outline-black'>View Kula Outreach</button>
    </div>
  )
}

export default Header