import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './About.css'
import about_img from '../../assets/group2.jpg'
import play_icon from '../../assets/play-icon.png'

gsap.registerPlugin(ScrollTrigger);

const About = ({ setPlayState }) => {


  // GSAP animation start from here //

  // useGSAP(() => {
  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.about',
  //       start: 'top 90%',
  //       end: 'top 20%',
  //       scrub: 1,
  //       // markers: true
  //     },
  //   });

  //   tl.from(".about-left",{
  //     x:-100,
  //     opacity:0,
  //   },"about")
  //   tl.from(".about-right h2, .about-right p  ",{
  //     x:100,
  //     opacity:0,
  //     stagger:0.3,
  //     duration:0.8
  //   },"about")

  // })

  //GSAP animation ends here //

  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={() => { setPlayState(true) }} />
      </div>

      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>We fuel your passion for innovation with cutting-edge programs and personalized mentorship. Gain the skills and support needed to excel, explore new technologies, and develop your ventures in a nurturing environment. Start a transformative experience where your potential shines and your future is bright.</p>

        <p>At our college, innovation and mentorship guide your journey. With cutting-edge programs and dedicated faculty, gain essential skills and tailored support. Join a vibrant community where creativity and growth thrive.</p>

        <p>Whether you aspire to become a teacher, administrator, counsler, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
      </div>

    </div>
  )
}

export default About