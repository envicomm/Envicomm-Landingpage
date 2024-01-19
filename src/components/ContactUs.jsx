import React, { useState } from "react";
import Footer from "./Footer";
import MyForm from "./Form";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function Contact() {
  useScrollToTop();
  return (
    <div className="bg-custom-green h-[300px] md:h-[500px] lg:h-[500px] xl:h-[500px] flex flex-col justify-between">
      {" "}
      {/* Added flex properties here */}
      <div
        className="flex flex-col pt-[200px] ml-[30px] md:pt-[350px] xl:pt-[300px] xl:ml-[100px]"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        <h1 className="font-bold text-white">CONTACT US</h1>
        <h1 className="font-extrabold text-white text-2xl lg:text-4xl xl:text-4xl">
          LET US SERVE YOU.
        </h1>
        <h1 className="font-extrabold text-white text-4xl lg:text-7xl xl:text-8xl ">
          LET'S TALK
        </h1>
      </div>
      <div className="flex lg:flex-col xl:flex-row md:flex-col flex-col justify-start gap-x-12 pt-[70px] pb-[50px] md:pt-[100px] xl:pt-[150px] xl:mx-[150px] mx-6 space-y-9 text-sm md:mx-10 lg:mx-20">
        <div
          className="flex items-center h-[max-content]"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          <img src="./location.svg" className="h-6 w-auto pr-4" />
          <div>
            <h1 className="pb-5 text-custom-green1 font-extrabold">LOCATION</h1>
            <p>Room 209, Cesar's Foodland Bldg,</p>
            <p>Gov. M. Cuenco Ave, Cebu City</p>
            <p>Cebu, Philippines, 6000</p>
          </div>
        </div>

        <div
          className="flex items-center h-[max-content]"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          <img src="./email.svg" className="h-6 w-auto pr-4" />
          <div>
            <h1 className="pb-5 text-custom-green1 font-extrabold">EMAIL US</h1>
            <p>official@envicomm.org</p>
          </div>
        </div>

        <div
          className="flex items-center h-[max-content]"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          <img src="./cp.svg" className="h-6 pr-4" />
          <div>
            <h1 className="pb-5 text-custom-green1 font-extrabold">CALL US</h1>
            <p>+63 917 177 3171</p>
            <p> 032 415-3622</p>
          </div>
        </div>
      </div>
      <div className="xl:absolute lg:absolute md:absolute flex flex-row xl:top-[120px] xl:right-[120px] lg:top-[100px] lg:right-[80px] md:right-[20px] md:top-[150px] top-[900px] right-[20px]">
        <div className="xl:w-[600px] lg:w-[300px] md:w-[350px] sm:w-[300px]  ml-5 p-10 bg-custom-green3">
          <h2 className="text-2xl mb-6">Get in Touch</h2>
          <MyForm />
        </div>
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
