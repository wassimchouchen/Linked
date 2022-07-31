import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import Contactme from '../components/Contactme';


const Contact = () => {
  return (
    <div>
     
      <HeroImg2 heading="CONTACT" text="GET IN TOUCH WITH OWNER"/>
       <Contactme/>
     <Footer/>
    </div>
  )
}

export default Contact;