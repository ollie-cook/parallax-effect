'use client'

import { useState, useEffect } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Lottie from "lottie-react"
import animationData from "@/public/fire-animation.json"
import dustAnimation from "@/public/dust-animation.json"
import { IoIosArrowDown } from "react-icons/io";
import "./page.css"

export default function Home() {
  const [isWobble, setIsWobble] = useState(false); 
  const [isDust, setIsDust] = useState(false);
  

  useEffect(() => {
    const checkScroll = () => {
      const scrollableElement = document.querySelector('#scrollable-element') as HTMLElement;
      const scrollPosition = scrollableElement ? scrollableElement.scrollTop : 0;
      const divHeight = scrollableElement ? scrollableElement.offsetHeight : 0;

      if (scrollPosition > divHeight*3 && scrollPosition < divHeight*4.99) {
        setIsWobble(true);
      } else {
        setIsWobble(false);
      }

      if (scrollPosition == divHeight*5) {
        setIsDust(true);
      } else {
        setIsDust(false);
      }
    };

    document.querySelector('#scrollable-element')?.addEventListener('scroll', checkScroll);

    // Cleanup the event listener on component unmount
    return () => {
      document.querySelector('#scrollable-element')?.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <main className="">
      <Parallax pages={6} id="scrollable-element">
        <ParallaxLayer offset={0} factor={2} style={{backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 0), #181d2b), url(/nightsky.jpg)" ,backgroundSize: 'cover'}} />
        <ParallaxLayer offset={2} factor={3} className="bg-gradient-to-b from-[#181d2b] to-[#55759b]" />
        <ParallaxLayer offset={5} factor={1} style={{backgroundImage: "linear-gradient(to bottom, #55759b, rgba(255, 255, 255, 0)), url(/desert.jpg)" ,backgroundSize: 'cover'}} />
        <ParallaxLayer offset={0} className="flex flex-col items-center" sticky={{ start: 0, end: 0.3 }}>
          <img src="/spacex-logo.png" className="w-11/12 md:w-2/3 mt-16" />
          <h2 className="text-white text-3xl sm:text-5xl md:text-6xl mt-16 text-center">our rockets land.</h2>
          <p className="mt-4 text-white">scroll for a demo</p>
          <IoIosArrowDown className="h-8 w-8" style={{color: 'white'}}/>
        </ParallaxLayer>
        <ParallaxLayer className=" relative" sticky={{ start: 0.7, end: 5.2 }}>
          <div className={`${isWobble == true ? 'spaceship-wobble' : ''} absolute left-1/2 -translate-x-1/2 top-[10%] h-[90%] flex flex-col items-center`}>
            <img src="starship.png" className="h-5/6"></img>
            {
              isWobble == true &&
              <Lottie 
                animationData={animationData}
                loop={true}
                className="w-36 rotate-180 relative -top-4"
              />
            }
            {
              isDust == true &&
              <Lottie 
                animationData={dustAnimation}
                loop={false}
                className="w-64 relative -top-28 right-2"
              />
            }
              
          </div>
        </ParallaxLayer>
        <ParallaxLayer className="relative" offset={2} speed={2}>
          <img src="/satellite.png"  className="w-1/12 absolute left-[5%]"></img>
        </ParallaxLayer>
        <ParallaxLayer className="relative" offset={2} speed={0.1}>
          <img src="/satellite.png"  className="w-[3%] absolute left-[25%] top-1/2"></img>
        </ParallaxLayer>
        <ParallaxLayer className="relative" offset={2} speed={2}>
          <img src="/satellite.png"  className="w-1/12 absolute right-[15%] top-1/4"></img>
        </ParallaxLayer>
        <ParallaxLayer className="relative" offset={2} speed={0.1}>
          <img src="/satellite.png"  className="w-[3%] absolute right-[25%] top-3/4"></img>
        </ParallaxLayer>
        <ParallaxLayer className="relative" offset={2} speed={1}>
          <img src="/ufo.webp"  className="w-[5%] absolute right-[35%] top-1/2"></img>
        </ParallaxLayer>
        <ParallaxLayer className="relative" offset={2} speed={1}>
          <img src="/ufo.webp"  className="w-[5%] absolute left-[30%] top-[95%]"></img>
        </ParallaxLayer>
        <ParallaxLayer className="relative" offset={2} speed={1.5}>
          <img src="/roadster.png"  className=" w-[15%] absolute left-[8%] top-[55%]"></img>
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}
