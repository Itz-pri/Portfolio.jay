import React, { useEffect, useState } from 'react'

const Cube = () => {
    const [rotate, setRotate] = useState(-130)

    useEffect(()=>{


        window.addEventListener("mousemove", (e) =>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            
            let deltaX = mouseX - window.innerWidth;
            let deltaY = mouseY - window.innerHeight;

            let angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
            setRotate(angle);
        })

    })

    return (
        <div className="absolute md:right-1 lg:right-7 xl:right-[2%] bottom-6 lg:bottom-10 md:w-60 xl:w-72 flex">

            <img className="  w-full h-auto" src="Cube_no_eyes.svg" alt="cube svg" />
            <div className="absolute h-full w-full flex justify-center items-center -translate-x-14 md:-translate-x-10 xl:-translate-x-14 translate-y-6 md:translate-y-4 xl:translate-y-6 scale-100 md:scale-80 xl:scale-100">
                <div style={{transform:`rotate(${rotate}deg)`}} className='rotate-90'>
                    <img src="Eye.svg" />
                </div>
                <div style={{transform:`rotate(${rotate}deg)`}} className='rotate-90 translate-y-4 -translate-x-6'>
                    <img src="Eye.svg" />
                </div>
            </div>
        </div>
    )
}

export default Cube
