import React, { useRef } from 'react'
import TextCard from '../TextCard/TextCard';

const About = ({ data }) => {
  const videoRef = useRef(null);
  return (
    <div className='About sm:px-20 px-8 flex flex-col sm:flex-row flex-wrap justify-between relative pb-8 '>
      <div className="about__left sm:w-[40%] pr-4 " >
        {/* display api data */}
        {
          data ? data.map((item, index) => 
          <TextCard key={index} item={item} refKey={index+1} videoRef={videoRef} />
          )
          : 
          null
        }
      </div>
      <div className="about__right sm:w-[55%] h-min sm:sticky top-[12%] right-0 bottom-0">
        <video className='rounded-3xl w-full h-[500px] object-cover ' loop autoPlay muted ref={videoRef} />
      </div>
    </div>
  )
}

export default About;