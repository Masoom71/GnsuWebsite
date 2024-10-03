import React from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'

function Hero() {

  useGSAP(()=>{
    gsap.from(".hero-text h1",{
      opacity:0,
      scale:0.2,
      duration:0.7,
      delay:0.7,
      ease:'power2.out'
    })
  })
  

  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Gopal Narayan Singh University </h1>
            <p>GNSU sets the benchmarks of the global education with a system that matches the best of practices, theories, resources and standards all over the world. </p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}
export default Hero
