import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here (e.g., send to a server)
    
    // Clear the form data
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
        <input required className="w-full p-2 border rounded" type="text" id="name" name="name" placeholder="Let us know who you are" value={formData.name} onChange={handleInputChange} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
        <input required className="w-full p-2 border rounded" type="email" id="email" name="email" placeholder="Don't forget the @ sign" value={formData.email} onChange={handleInputChange} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="company">Company</label>
        <input required className="w-full p-2 border rounded" type="text" id="company" name="company" placeholder="Where do you work?" value={formData.company} onChange={handleInputChange} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
        <input required className="w-full p-2 border rounded" type="text" id="subject" name="subject" placeholder="Tell us what you want" value={formData.subject} onChange={handleInputChange} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
        <textarea required className="w-full p-2 border rounded h-[100px]" id="message" name="message" placeholder="Message us" value={formData.message} onChange={handleInputChange}></textarea>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
    </form>
  );
}

export default MyForm;
