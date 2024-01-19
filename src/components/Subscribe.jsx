import React, { useState, useEffect } from 'react';
import '../App.css';

function SubscribeComponent() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
  
    useEffect(() => {
      let timeoutId;
  
      if (submitted) {
        timeoutId = setTimeout(() => {
          setSubmitted(false);
        }, 2000);  // Message will disappear after 23 seconds
      }
  
      // Clear the timeout if the component is unmounted before the setTimeout finishes
      return () => {
        clearTimeout(timeoutId);
      };
    }, [submitted]);
  
    const handleSubscribe = () => {
      if (!email.trim()) {
        setErrorMessage('Email is required!');
        return;
      }
  
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!emailRegex.test(email)) {
        setErrorMessage('Invalid email format!');
        return;
      }
  
      setErrorMessage('');
      setEmail('');
      setSubmitted(true);
    };

  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center lg:text-left">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-3 md:w-10/12 lg:w-11/12 xl:w-10/12">
            <div className="grid items-center gap-x-6 lg:grid-cols-2">
              <div className="mb-10 lg:mb-0">
                <h2 className="text-3xl xl:text-6xl font-bold dark:text-white">
                  Don't miss any updates
                  <br />
                  <span className="text-primary text-custom-green1 xl:text-5xl">Subscribe to us</span>
                </h2>
              </div>
              <div className="flex flex-col">
      <input 
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="outline-custom-green focus:border-custom-green focus:ring focus:ring-custom-green focus:ring-opacity-50"
        id="exampleFormControlInput2"
        placeholder="Enter your email"
      />
      
      {errorMessage && <div className="text-red-600 mb-2">{errorMessage}</div>}
      <button
        type="submit"
        className="bg-custom-green text-white py-2 px-2"
        onClick={handleSubscribe}
      >
        Subscribe
      </button>
      {submitted && <div className="mt-2 text-green-600">Subscribed successfully!</div>}
    </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SubscribeComponent;

