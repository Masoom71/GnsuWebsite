import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.contact',
        start: 'top 90%',
        end: 'top 40%',
        scrub: 1,
        // markers: true
      },
    })

    tl.from("#left",{
      x:-70,
      opacity:0
    },"contact")
    tl.from("#right",{
      x:70,
      opacity:0
    },"contact")
  })

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2672852d-607b-4d22-9fc2-dc4822e69d77");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
      <div className="contact-col" id='left'>
        <h3>Send us  a massage <img src={msg_icon} alt="" /> </h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
          <li><img src={mail_icon} alt="" />gnsu@gnsu.org</li>
          <li><img src={phone_icon} alt="" />+91-7367074145</li>
          <li><img src={location_icon} alt="" />Jamuhar, Rohtas <br />821305 Bihar India </li>
        </ul>
      </div>
      <div className="contact-col" id='right'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required />

          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder='Enter your phone number' required />

          <label>Write your massage here</label>
          <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>

          <button type='submit' className='btn dark-btn'>Submit Now<img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>

    </div>
  )
}

export default Contact