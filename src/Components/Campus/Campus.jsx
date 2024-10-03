import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './Campus.css'
import gallery_2 from '../../assets/gallery-11.jpg'
import gallery_3 from '../../assets/gallery-10.png'
import gallery_1 from '../../assets/gallery-12.jpg'
import gallery_4 from '../../assets/gallery-9.png'
import white_arrow from '../../assets/white-arrow.png'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

const Campus = () => {


  // useGSAP(() => {
  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.campus',
  //       start: 'top 90%',
  //       end: 'top 40%',
  //       scrub: 1,
  //       // markers: true
  //     },
  //   });

  //   tl.from(".gallery img",{
  //     y:-100,
  //     stagger:0.5,
  //     opacity:0,
  //     duration:0.9
  //   })
  // })
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_1} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus