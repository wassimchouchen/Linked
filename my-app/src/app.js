import  Navbar  from './components/Navbar'
import {  Routes, Route} from 'react-router-dom'
// import Offer from './pages/offer'
import Register from './pages/register'
import Login from './pages/login'
import React from "react";
import "./index.css";
import './App.css';
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Offer from "./pages/offer";
import './App.css'
// import Mode from './components/mode'

function App() {
  return (
    
    
  
    
    
    
     <div className="font-lato bg-light-1 min-h-screen flex flex-col">
    
    <Navbar />
 
      <Routes>
           
           


           <Route path="/" element={<Home />} />
           <Route path="/project" element={<Project />} />
           <Route path="/offers" element={<Offer/>} />
           <Route path="/contact" element={<Contact />} />
           <Route path='/auth/login' element={<Login />} /> 
           <Route path='/auth/register' element={<Register />} /> 

      </Routes>
      </div>

  );
}

export default App;

// function MyApp() {
//   return (
//     <div className="font-lato bg-light-1 min-h-screen flex flex-col">
//        <Router>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Offer />} /> 
//         <Route path='/auth/login' element={<Login />} /> 
//         <Route path='/auth/register' element={<Register />} /> 
//       </Routes>
//     </Router>
//     </div>
//   )
// }

// export default MyApp
