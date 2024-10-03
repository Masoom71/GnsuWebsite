import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/mm3.jpg'
import user_2 from '../../assets/user.jpg'
import user_3 from '../../assets/user4.jpg'
import user_4 from '../../assets/user2.jpg'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


// gsap.registerPlugin(ScrollTrigger)

function Testimonials() {


    // useGSAP(() => {
    //     let tl = gsap.timeline({
    //       scrollTrigger: {
    //         trigger: '.testimonial',
    //         start: 'top 90%',
    //         end: 'top 40%',
    //         scrub: 1,
    //         // markers: true
    //       },
    //     });

    //     tl.from(".user-info div ",{
    //         x:50,
    //     },"testimoni")
    //     tl.from(".user-info img ",{
    //         opacity:0,
    //         y:-70
    //     },"testimoni")
    // })

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slidebackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    return (
        <div className='testimonial'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slidebackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Md Masoom</h3>
                                    <span>Frontend Web Dev, Rafiganj</span>
                                </div>
                            </div>
                            GNSU provides a nurturing environment, fostering growth and innovation, helping students achieve their dreams and shape bright futures.
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Abhishek Kumar</h3>
                                    <span>Software Engg, Abdulpur</span>
                                </div>
                            </div>
                            At GNSU, I've found inspiring mentors, lifelong friends, and countless opportunities to excel in my academic and personal journey.
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Gautam Sharma</h3>
                                    <span>Python Dev, Barun</span>
                                </div>
                            </div>
                            GNSU's vibrant community encourages creativity, collaboration, and excellence, preparing students to tackle challenges in their chosen fields.
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Md Abuzar Khan</h3>
                                    <span>Java Developer, Dehri</span>
                                </div>
                            </div>
                            The supportive faculty at GNSU made my learning experience exceptional, guiding me every step toward my career goals.
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
