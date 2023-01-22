import React, { useEffect, useRef } from 'react'
import { useInView } from "react-hook-inview";

const TextCard = ({ item, refKey, videoRef }) => {

    const [ref, inView] = useInView();

    useEffect(() => {
        if (refKey === 2 && inView) {
            videoRef.current.src = "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4";
        } else if (refKey === 3 && inView) {
            videoRef.current.src = "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4";
        } else if (refKey === 1 && inView) {
            videoRef.current.src = "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4";
        }
    }, [inView, refKey, videoRef]);

    return (
        <div className='TextCard'>
            <div className="left__container1 flex flex-col gap-7 min-h-[40rem] pt-[10rem] ">
                <p className="text-2xl font-bold bg-gradient-to-r from-[#ec688b] to-[#000000] text-transparent bg-clip-text" >{item.heading}</p>
                <h1 className='text-5xl font-bold' ref={ref} refkey={refKey} >{item.subHeading}</h1>
                <p className="">{item.description}</p>
            </div>
        </div>
    )
}

export default TextCard