import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';

import Footer from './Footer';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SubscribeComponent from './Subscribe';

 
function useScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }

function Home() {

    useScrollToTop();
    <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;500;700&display=swap" rel="stylesheet" />


    const [aboutRef, aboutInView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const [serviceRef, serviceInView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const aboutSectionRef = useRef(null);

    const handleIconClick = () => {
        aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        // ... any additional logic like triggering animations
    }
    
   
    
    

    return (
        
        <div className="flex flex-col justify-center items-center pt-32 overflow-x-hidden">
    
            {/* Logo Section */}
            <div 
            className="flex flex-col justify-center items-center w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
        >
            <div className="flex justify-center animate-fadeInRightToLeft duration-1000 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                <img src='/logoonly.png' alt="Logo" className="w-2/3 md:w-1/2 lg:w-2/3 xl:w-4/5 h-auto" />
            </div>
        </div>
            {/* Content Section */}
            <div className="text-center font-bold text-xl mb-2 animate-fadeInLeftToRight duration-1000" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl text-custom-green1">ENVI-COMM</div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-6xl text-custom-green1 mb-2 sm:mb-0">CORPORATION</div>
            </div>
    
            <p className="text-md md:text-2xl lg:text-3xl text-custom-green text-center px-5 mb-2 animate-fadeInLeftToRight duration-1000" style={{ fontFamily: 'Alegreya, serif' }}>
                "Guiding Your Path to Green: Your Environmental Compliance Consulting Firm."
            </p>
    
            <div className="animate-fadeInLeftToRight duration-1000 mt-6 sm:mt-8 md:mt-10 lg:mt-12 pb-20">
                <Link to="/contactus" className="bg-custom-green text-white py-2 px-4  transform transition-transform duration-300 hover:bg-green-800 hover:scale-150" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    Contact Us
                </Link>
                <Link to="/about" className="bg-white text-custom-green py-2 px-4 transform transition-transform duration-300 hover:bg-green-800 hover:scale-150" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    About Us
                </Link>
            </div>
    
            <div className='border-b border-custom-green1 w-4/6' />

            <div className='flex flex-col md:flex-collg:flex-row xl:flex-row justify-center text-center xl:space-x-10 py-10'>
                <h1 className="lg:text-5xl md:text-5xl text-3xl font-extrabold text-custom-green1" style={{ fontFamily: 'Alegreya, Serif' }}>COMPLIANCE</h1>
                <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold text-custom-green3" style={{ fontFamily: 'Alegreya, Serif' }}>COMMUNITY</h1>
                <h1 className="lg:text-5xl md:text-5xl text-3xl font-extrabold text-custom-green1" style={{ fontFamily: 'Alegreya, Serif' }}>COMMITMENT</h1>
            </div>

            <div className='border-b border-custom-green1 w-4/6' />


                  {/* ABOUT Section */}
 <div className='flex flex-col md:flex-row space-x-0 md:space-x-10 py-32 mx-2 px-10 align-center justify-center xl:ml-[400px] xl:mr-[300px]'>
    
    <div className='lg:text-right xl:text-right md:order-1'>
        <h1 className="hidden md:block lg:text-4xl md:text-5xl text-3xl font-extrabold text-custom-green3" style={{ fontFamily: 'Alegreya, Serif' }}>HOME</h1>
        <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold text-custom-green1 md:order-2" style={{ fontFamily: 'Alegreya, Serif' }}>ABOUT</h1>
        <h1 className="hidden md:block lg:text-4xl md:text-5xl text-3xl font-extrabold text-custom-green3" style={{ fontFamily: 'Alegreya, Serif' }}>SERVICE</h1>
        <h1 className="hidden md:block lg:text-4xl md:text-5xl text-3xl font-extrabold text-custom-green3" style={{ fontFamily: 'Alegreya, Serif' }}>CONTACT</h1>
    </div>

    <div className='lg:text-lg xl:text-xl text-sm xl:text-left xl:justify-start md:order-1'>
        <span className='text-custom-green1 font-bold' style={{ fontFamily: 'Roboto, sans-serif' }}>ENVI-COMM CORPORATION</span> 
        <p className='pb-5'>is an environmental consultancy firm, driven by a team passionate about championing sustainable development. We emphasize compliance with environmental regulations and prioritize the creation of in-house programs that foster environmental conservation and sustainable growth. </p>
        <Link 
            to="/about" 
            className="bg-custom-green text-white text-sm py-2 px-8 rounded-lg transform transition-transform duration-300 hover:bg-green-800 hover:scale-150" 
            style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Read More
        </Link>
    </div>
</div>


            <div className='border-b border-custom-green1 w-4/6' />
            
            <div>
            <div className=''>
                    <h1 className='text-center text-custom-green1 text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-extrabold pt-10 xl:pt-20' style={{ fontFamily: 'Alegreya, serif' }}>BEYOND BOUNDARIES:</h1>
                    <h3 className='text-center text-custom-green text-2xl md:text-5xl lg:text-6xl xl:text-6xl font-bold'
                    style={{ fontFamily: 'Alegreya, serif' }}> DISCOVER OUR CAPABILITIES</h3>
            </div>

        <div className="pt-10 mx-5 md:pt-20 xl:mx-32">
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-9 xl:gap-4 w-full items-center lg:space-x-5 xl:space-x-6">

                {/* First square */}
                <div className="text-center space-y-4 w-full lg:w-64 lg:h-64">
                    <div className="flex items-center justify-center">
                        <div className="h-px bg-custom-green1 flex-grow hidden md:block"></div>
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold xl:text-4xl text-custom-green1 mx-4 uppercase" style={{ fontFamily: 'Alegreya, serif' }}>
                            Application
                        </h2>
                        <div className="h-px bg-custom-green1 flex-grow hidden md:block"></div>
                    </div>
                    <p className='text-sm md:text-base lg:text-lg xl:text-lg' style={{ fontFamily: 'Open Sans, Sans-serif' }}>
                        Streamlining the environmental application process for our clients to ensure compliance and expedite project approvals.
                    </p>
                </div>

                {/* Second square */}
                <div className="text-center space-y-4 w-full lg:w-64 lg:h-64 ">
                    <div className="flex items-center justify-center">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold xl:text-4xl text-custom-green1 mx-4 uppercase" style={{ fontFamily: 'Alegreya, serif' }}>
                            Planning
                        </h2>
                    </div>
                    <p className='text-sm md:text-base lg:text-lg xl:text-lg' style={{ fontFamily: 'Open Sans, Sans-serif' }}>
                    Delivering comprehensive environmental assessments backed by data-driven insights for informed decision-making
                    </p>
                </div>

                {/* Third square */}
                <div className="text-center space-y-4 w-full lg:w-64 lg:h-64">
                    <div className="flex items-center justify-center">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold xl:text-4xl text-custom-green1 mx-4 uppercase" style={{ fontFamily: 'Alegreya, serif' }}>
                            Reporting
                        </h2>
                    </div>
                    <p className='text-sm md:text-base lg:text-lg xl:text-lg' style={{ fontFamily: 'Open Sans, Sans-serif' }}>
                    Navigating complex environmental regulations and processes to ensure your projects meet all compliance standards.
                    </p>
                </div>

                {/* Fourth square */}
                <div className="text-center space-y-4 w-full lg:w-64 lg:h-64 pb-10">
                    <div className="flex items-center justify-center">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold xl:text-4xl text-custom-green1 mx-4 uppercase" style={{ fontFamily: 'Alegreya, serif' }}>
                            Consultancy
                        </h2>
                    </div>
                    <p className='text-sm md:text-base lg:text-lg xl:text-lg' style={{ fontFamily: 'Open Sans, Sans-serif' }}>
                    Leveraging expertise to provide sustainable environmental solutions tailored to your unique needs.
                    </p>
                </div>
            </div>
        </div>
            </div> {/* Last Beyond Boundaries */}

          

            <div  
    className="w-full bg-center bg-no-repeat bg-cover h-64 sm:h-[350px] md:h-[400px] lg:h-[400px] xl:h-[400px] flex flex-col  justify-center items-center " 
    style={{ backgroundImage: "url('./offer.svg')" }}>

        <h1 className="text-center text-3xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white"style={{ fontFamily: 'Roboto, sans-serif' }}>
                  CHECK OUR SERVICES
        </h1>
        <div className="animate-fadeInLeftToRight duration-1000 mt-5 sm:mt-8 md:mt-10 lg:mt-12"> {/* Adjusted margins as needed */}
            <Link 
                to="/services" 
                className="bg-custom-green text-white py-2 px-6 rounded-lg transform transition-transform duration-300 hover:bg-green-800 hover:scale-150 uppercase" 
                style={{ fontFamily: 'Roboto, sans-serif' }}
            >
                What we offer
            </Link>
        </div>
  </div>   
    

<div className='pt-20'>
    <SubscribeComponent />
</div>

             <div className='pt-20 w-full p-0 m-0'>
            <Footer />
            </div>

            </div>
            
         
         
    )
    
}

export default Home;

