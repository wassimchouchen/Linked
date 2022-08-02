import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcement from '../Announcement';
import Categories from '../components/Categories';
import Slider from '../components/Slider';

import Joboffer from '../components/Joboffer';
import Offers from '../Offers';
import Slider2 from '../Slider2';



const Home = () => {
    return <div>
    {/*<Slider/>*/}
    <Announcement/> 
     <Categories/>
     <Joboffer/>
     <Offers/>
     {/* <Slider2/> */}
     <Footer/>
    </div>;
   
};

export default Home;