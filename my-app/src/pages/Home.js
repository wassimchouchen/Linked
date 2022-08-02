import React from "react";
import Footer from "../components/Footer";
import Announcement from '../Announcement';
import Categories from '../components/Categories';
import Joboffer from '../components/Joboffer';
import Offers from '../Offers';
//import Slider2 from '../Slider2';
import Slider from '../components/Slider';
// import Navbar from "../components/Navbar";




const Home = () => {
    return <div>
    
    <Announcement/>
    { /* <Slider/>*/}
     <Categories/>
     <Joboffer/>
     <Offers/>
      {/* <Slider2/> */}
     <Footer/>
    </div>;
   
};

export default Home;