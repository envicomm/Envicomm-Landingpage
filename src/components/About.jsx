import React,{useRef, useState, useEffect} from 'react'
import '../App.css';
import Footer from './Footer'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';




function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}


function About() {
  
  useScrollToTop();
  return (

<div style={{position: 'relative'}} className='scroll-smooth pt-20'>
  
<div
    className="w-full bg-center bg-no-repeat bg-cover h-64 sm:h-[350px] md:h-[400px] lg:h-[400px] xl:h-[400px] flex justify-center items-end" 
    style={{ backgroundImage: "url('./banner-min.png')" }}>
    <h1 className='text-white font-extrabold mb-0 text-7xl md:text-9xl lg:text-12xl 'style={{ fontFamily: 'Roboto, sans-serif' }}>ABOUT</h1>
</div>


   

<div className="flex flex-col md:flex-row lg:justify-center xl:justify-between items-center md:space-x-0 lg:space-x-10 xl:space-x-20 h-full mx-5 pt-20 space-y-8 md:space-y-0 md:mx-auto lg:w-[900px] xl:w-[1200px] xl:pt-[140px]">

  {/* Left side with your headings */}
  <div className="text-center lg:text-end space-y-[-10px]">
    <h1 className="lg:text-7xl md:text-5xl text-3xl font-extrabold text-custom-green1" style={{ fontFamily: 'Alegreya, Serif' }}>COMPLIANCE</h1>
    <h2 className="lg:text-6xl md:text-5xl text-3xl font-bold text-custom-green3" style={{ fontFamily: 'Alegreya, Serif' }}>COMMUNITY</h2>
    <h1  className="lg:text-7xl md:text-5xl text-3xl font-extrabold text-custom-green1" style={{ fontFamily: 'Alegreya, Serif' }}>COMMITMENT</h1>
  </div>

  {/* Right side with your write-ups */}
  <div className="text-xl text-center lg:text-left "style={{ fontFamily: 'Open Sans, sans-serif' }}>
    <span className='text-custom-green1 font-bold' style={{ fontFamily: 'Roboto, sans-serif' }}>ENVI-COMM CORPORATION</span> is an environmental consultancy firm, driven by a team passionate about championing sustainable development. We emphasize compliance with environmental regulations and prioritize the creation of in-house programs that foster environmental conservation and sustainable growth.
  </div>
</div>


<div className="flex flex-col md:flex-row lg:justify-center xl:justify-between items-center md:space-x-0 lg:space-x-10 xl:space-x-20 h-full mx-5 pt-20 space-y-8 md:space-y-0 md:mx-auto lg:w-[900px] xl:w-[1000px] xl:pt-[140px]">
  {/* Left side with your headings */}
  <div className="text-center lg:text-end space-y-[-10px]">
    <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold text-custom-green3" style={{ fontFamily: 'Alegreya, Serif' }}>MISSION</h1>
    <h2 className="lg:text-7xl md:text-5xl text-4xl font-extrabold text-custom-green1" style={{ fontFamily: 'Alegreya, Serif' }}>GREEN</h2>
    <h1  className="lg:text-7xl md:text-5xl text-3xl font-bold text-custom-green3" style={{ fontFamily: 'Alegreya, Serif' }}>FOR TOMORROW</h1>
  </div>

  {/* Right side with your write-ups */}
  <div className="text-xl text-center lg:text-left" style={{ fontFamily: 'Open Sans, sans-serif' }}>
  <p>We strive to deliver <span className='text-custom-green1 font-bold uppercase' style={{ fontFamily: 'Roboto, sans-serif' }}>unparalleled service</span> across different fields of expertise and provide service reliability that exceeds our Customer's standards and expectations.</p>
  </div>
</div>



{/* VISION*/}
<div className="flex flex-col md:flex-row lg:justify-center xl:justify-between items-center md:space-x-0 lg:space-x-10 xl:space-x-20 h-full mx-5 pt-20 space-y-8 md:space-y-0 md:mx-auto lg:w-[900px] xl:w-[1000px] xl:pt-[140px]">
  {/* Left side with your headings */}
  <div className="text-center lg:text-end space-y-[-10px]" >
    <h1 className="lg:text-7xl md:text-5xl text-3xl font-extrabold text-custom-green1" style={{ fontFamily: 'Alegreya, Serif' }}>VISION</h1>
    <h2 className="lg:text-7xl md:text-5xl text-4xl font-extrabold text-custom-green3" style={{ fontFamily: 'Alegreya, Serif' }}>20/20</h2>
    <h1  className="lg:text-7xl md:text-5xl text-3xl font-extrabold text-custom-green1" style={{ fontFamily: 'Alegreya, Serif' }}>ECO LEADERSHIP</h1>
  </div>

  {/* Right side with your write-ups */}
  <div className="text-xl text-center lg:text-left" style={{ fontFamily: 'Open Sans, sans-serif' }}>
  <p>We aim to be the global leader in providing reliable environmental compliance and consultancy solutions..</p>
  </div>
</div>

<div className='pt-20'>
<div  
    className="w-full bg-center bg-no-repeat bg-cover h-64 sm:h-[350px] md:h-[400px] lg:h-[400px] xl:h-[400px] flex flex-col justify-center items-center" 
    style={{ backgroundImage: "url('./offer.png')" }}>

        <h1 className="text-center text-5xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white"style={{ fontFamily: 'Roboto, sans-serif' }}>
                  CHECK OUR SERVICES
        </h1>
        <div className="animate-fadeInLeftToRight duration-1000 mt-5 sm:mt-8 md:mt-10 lg:mt-12"> {/* Adjusted margins as needed */}
            <Link 
                to="/services" 
                className="bg-custom-green text-white py-2 px-6 rounded-lg transform transition-transform duration-300 hover:bg-green-800 hover:scale-150 uppercase" 
                style={{ fontFamily: 'Roboto, Sans-Serif' }}
            >
                What we offer
            </Link>
        </div>
  </div>
  </div>
  <div className='pt-10'>
            <Footer />
            </div>
  </div>
  )
  
}

export default About