import React from 'react';

import {Link} from 'react-router-dom';
import ApplicationList from './ApplicationList';
import Planning from './Planning';
import Reporting from './Reporting';
import Consultancy from './Consultancy'
import Footer from './Footer'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function useScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }

function Services() {

    useScrollToTop();
    return (
        <div>
            <div id="services" className="h-auto w-full">
            <div
                className="w-full bg-center bg-no-repeat bg-cover h-64 sm:h-[350px] md:h-[400px] lg:h-[400px] xl:h-[500px] flex justify-center items-end" 
                style={{ backgroundImage: "url('./puzzle-min.png')" }}>
                <h1 className='text-white text-shadow-xl font-extrabold mb-0 text-5xl md:text-9xl lg:text-9xl xl:text-12xl ' style={{ fontFamily: 'Roboto, sans-serif' }}>SERVICES</h1>
            </div>
    
                <div className='mx-10'>
                    <h1 className='text-center text-custom-green1 text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-extrabold pt-10 xl:pt-[150px]' style={{ fontFamily: 'Alegreya, serif' }}>BEYOND BOUNDARIES:</h1>
                    <h3 className='text-center text-custom-green text-2xl md:text-5xl lg:text-6xl xl:text-6xl font-bold'
                    style={{ fontFamily: 'Alegreya, serif' }}> DISCOVER OUR CAPABILITIES</h3>

                
<div className="pt-10 md:pt-20 xl:mx-32">
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-9 xl:gap-4 w-full items-center">

        {/* First square */}
        <div className="text-center space-y-4 w-full lg:w-64 lg:h-64">
            <div className="flex items-center justify-center">
                <div className="h-px bg-custom-green1 flex-grow hidden md:block"></div>
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold xl:text-5xl text-custom-green1 mx-4" style={{ fontFamily: 'Alegreya, serif' }}>
                    Application
                </h2>
                <div className="h-px bg-custom-green1 flex-grow hidden md:block"></div>
            </div>
            <p className='text-sm md:text-base lg:text-lg xl:text-lg' style={{ fontFamily: 'Open Sans, Sans-serif' }}>
                Streamlining the environmental application process for our clients to ensure compliance and expedite project approvals.
            </p>
        </div>

        {/* Second square */}
        <div className="text-center space-y-4 w-full lg:w-64 lg:h-64">
            <div className="flex items-center justify-center">
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold xl:text-5xl text-custom-green1 mx-4" style={{ fontFamily: 'Alegreya, serif' }}>
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
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold xl:text-5xl text-custom-green1 mx-4" style={{ fontFamily: 'Alegreya, serif' }}>
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
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold xl:text-5xl text-custom-green1 mx-4" style={{ fontFamily: 'Alegreya, serif' }}>
                    Consultancy
                </h2>
            </div>
            <p className='text-sm md:text-base lg:text-lg xl:text-lg' style={{ fontFamily: 'Open Sans, Sans-serif' }}>
            Leveraging expertise to provide sustainable environmental solutions tailored to your unique needs.
            </p>
        </div>
    </div>
</div>

            </div>{/* Beyond Boundaries closing */}
        
            <div className="border-b w-2/3 mx-auto"></div>


            <div className="flex items-center justify-center sm:h-[200vh] md:h-[130vh] lg:h-[90vh]">
                <div className="text-center pb-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold pt-10 text-custom-green1" style={{ fontFamily: 'Alegreya, serif' }}>APPLICATION</h1>
                    <p className="text-sm md:text-xl pb-10 text-custom-green uppercase"style={{ fontFamily: 'Roboto, sans-serif' }}>Turning visions into reality with sustainable solutions.</p>
                    <p className="text-sm md:text-xl pb-10 text-custom-green uppercase"style={{ fontFamily: 'Roboto, sans-serif' }}>We process</p>
                    <ApplicationList />
                </div>
            </div>

            <div className="border-b w-2/3 mx-auto"></div>
    
            <div className="flex items-center justify-center sm:h-[200vh] md:h-[100vh] lg:h-[90vh]">
                <div className="text-center pb-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold pt-10 text-custom-green1" style={{ fontFamily: 'Alegreya, serif' }}>PLANNING</h1>
                    <p className="text-sm md:text-xl pb-10 text-custom-green uppercase" style={{ fontFamily: 'Roboto, sans-serif' }}>Guiding businesses towards a sustainable tomorrow</p>
                    <p className="text-sm md:text-xl pb-10 text-custom-green uppercase"style={{ fontFamily: 'Roboto, sans-serif' }}>We make</p>
                    <Planning />
                </div>
            </div>

            <div className="border-b w-2/3 mx-auto"></div>
    
            <div className="flex items-center justify-center sm:h-[200vh] md:h-[100vh] lg:h-[50vh]">
                <div className="text-center pb-20 mx-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold pt-10 text-custom-green1" style={{ fontFamily: 'Alegreya, serif' }}>REPORTING</h1>
                    <p className="text-sm md:text-xl pb-10 text-custom-green uppercase" style={{ fontFamily: 'Roboto, sans-serif' }}>Pioneering data-driven decisions for a healthier environment.</p>
                    <p className="text-sm md:text-xl pb-10 text-custom-green uppercase" style={{ fontFamily: 'Roboto, sans-serif' }}>We produce</p>
                    <Reporting />
                </div>
            </div>

            <div className="border-b w-2/3 mx-auto"></div>
    
            <div className="flex items-center justify-center sm:h-[200vh] md:h-[100vh] lg:h-[60vh]">
                <div className="text-center pb-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold pt-10 text-custom-green1" style={{ fontFamily: 'Alegreya, serif' }}>CONSULTANCY</h1>
                    <p className="text-sm md:text-xl pb-10 text-custom-green uppercase" style={{ fontFamily: 'Roboto, sans-serif' }}>Sustainable solutions, expertly delivered.</p>
                    <p className="text-sm md:text-xl pb-10 text-custom-green uppercase" style={{ fontFamily: 'Roboto, sans-serif' }}>We offer</p>
                    <Consultancy />
                </div>
            </div>

            <div 
    className="relative flex items-center justify-center bg-center bg-no-repeat bg-cover pb-5 sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]" 
    style={{ backgroundImage: "url('./help.png')" }}>
    <div className="flex flex-col items-center">  {/* Added flex container */}
        <h1 className="text-center text-xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white">
            HOW CAN WE ASSIST YOU TODAY?
        </h1>
        <div className="animate-fadeInLeftToRight duration-1000 mt-5 sm:mt-8 md:mt-10 lg:mt-12"> {/* Adjusted margins as needed */}
            <Link 
                to="/contactus" 
                className="bg-custom-green text-white py-2 px-6 rounded-lg transform transition-transform duration-300 hover:bg-green-800 hover:scale-150" 
                style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
                Contact Us
            </Link>
        </div>
    </div>
</div>



<div className='pt-10'>
            <Footer />
            </div>

           
        </div>
        </div>
    );
    
}

export default Services;
