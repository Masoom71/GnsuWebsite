import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './Programs.css'
import program_1 from '../../assets/program-6.jpg'
import program_2 from '../../assets/program-7.jpg'
import program_3 from '../../assets/program-8.jpg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

// gsap.registerPlugin(ScrollTrigger);

const Programs = () => {

    // GSAP animation start from here //

    // useGSAP(() => {
    //     let tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.programs',
    //             start: 'top 100%',
    //             end: 'top 35%',
    //             scrub: 1,
    //             // markers: true
    //         },
    //     });
    //     tl.from("#program1",{
    //         x:-100,
    //         y:-100,
    //         opacity:0.2,
    //         ease:'sine.out'
    //     },"programs")
    //     tl.from("#program2",{
    //         y:100,
    //         opacity:0.2,
    //         ease:'sine.out'
    //     },"programs")
    //     tl.from("#program3",{
    //         x:100,
    //         y:-100,
    //         opacity:0.2,
    //         ease:'sine.out'
    //     },"programs")

    // })

    // GSAP animation ends  here //

    return (
        <div className='programs'>
            <div className="program" id='program1'>
                <img src={program_1} alt="" />
                <div className="caption">
                    <img src={program_icon_1} alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="program" id='program2'>
                <img src={program_2} alt="" />
                <div className="caption">
                    <img src={program_icon_2} alt="" />
                    <p>Master Degree</p>
                </div>
            </div>
            <div className="program" id='program3'>
                <img src={program_3} alt="" />
                <div className="caption">
                    <img src={program_icon_3} alt="" />
                    <p>Post Graduation</p>
                </div>
            </div>
        </div>
    )
}

export default Programs