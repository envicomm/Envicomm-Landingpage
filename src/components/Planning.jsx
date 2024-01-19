import React, {useState} from 'react'

function Planning() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    
    const closeModal = () => {
        setModalOpen(false);
    };
  
    const Modal = ({ isOpen, closeModal, children }) => {
      if (!isOpen) return null;
      return (  // You were missing this return statement for the JSX
          <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto">
              <div className="bg-white p-4 rounded shadow-lg max-w-xl w-full max-h-[90vh] overflow-y-auto">
                  <button onClick={closeModal}>Close</button>
                  {children}
              </div>
          </div>
      );
  };
  
  return (
    <div className="flex justify-center lg:justify-start w-full px-12 sm:px-5 lg:px-0">
    <div className="w-full sm:w-3/4 lg:w-auto lg:hidden">
        <ul className="mt-4 list-disc list-inside text-left xl:pl-[120px] lg:pl-[120px] md:pl-[120px] lg:hidden space-y-2 text-sm" style={{ fontFamily: '"Roboto", sans-serif' }}>
            <li>Comprehensive Development and Management Plan</li>
            <li>Environmental Management Plan</li>
            <li>Environmental Monitoring Plan</li>
            <li>Indicative Management Plan</li>
            <li>Indicative Management Plan</li>
            <li>Feasibility Study</li>
            <li>Cistern Tank Design</li>
            <li>Wastewater Treatment Facility Design</li>
        </ul>
        <div className='pt-10'>
        <button onClick={openModal} className="bg-custom-green text-white p-2 rounded mt-4 lg:hidden">Read More</button>
        </div>
      </div>
  
        {/* Full list for large screens */}
        <ul className="hidden mt-4 list-disc list-inside text-left grid grid-cols-2 gap-2 gap-x-5 xl:pl-[120px] lg:grid sm:block">
        <li>Comprehensive Development and Management Plan</li>
      <li>Environmental Management Plan</li>
      <li>Environmental Monitoring Plan</li>
      <li>Indicative Management Plan</li>
      <li>Indicative Management Plan</li>
      <li>Feasibility Study</li>
      <li>Cistern Tank Design</li>
      <li>Wastewater Treatment Facility Design</li>
      <li>Material Recovery Facility Design</li>
      <li>Hazardous Waste Storage Facility Design</li>
      <li>Topographical Plans</li>
      <li>Architectural Plans</li>
      <li>Site Development Plan</li>
      <li>Floor Plans</li>
      <li>Elevations</li>
      <li>Detailed/Blow-Up Plans</li>
      <li>Material Schedules</li>
      <li>Perspectives</li>
      <li>Exterior Perspective</li>
      <li>Interior Perspective</li>
      <li>Aerial Perspective</li>
      <li>Scaled Model/Diorama</li>
      <li>Walkthrough Video</li>
      <li>As-Built Plan</li>
      <li>Detailed Plans</li>
      <li>Septic Tank Details</li>
      <li>Wastewater Treatment Facility Details</li>
      <li>Equipment Specifications</li>
      <li>Cost Estimates</li>
        </ul>
  
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <div className="p-4">
          <h2 className="text-2xl mb-4 font-extrabold text-custom-green1 uppercase py-10" style={{ fontFamily: 'Alegreya, serif' }}>Our Services</h2>
          <ul className="list-disc list-inside text-left space-y-4 text-sm" style={{ fontFamily: '"Open Sans", sans-serif' }}>
          <li>Comprehensive Development and Management Plan</li>
      <li>Environmental Management Plan</li>
      <li>Environmental Monitoring Plan</li>
      <li>Indicative Management Plan</li>
      <li>Indicative Management Plan</li>
      <li>Feasibility Study</li>
      <li>Cistern Tank Design</li>
      <li>Wastewater Treatment Facility Design</li>
      <li>Material Recovery Facility Design</li>
      <li>Hazardous Waste Storage Facility Design</li>
      <li>Topographical Plans</li>
      <li>Architectural Plans</li>
      <li>Site Development Plan</li>
      <li>Floor Plans</li>
      <li>Elevations</li>
      <li>Detailed/Blow-Up Plans</li>
      <li>Material Schedules</li>
      <li>Perspectives</li>
      <li>Exterior Perspective</li>
      <li>Interior Perspective</li>
      <li>Aerial Perspective</li>
      <li>Scaled Model/Diorama</li>
      <li>Walkthrough Video</li>
      <li>As-Built Plan</li>
      <li>Detailed Plans</li>
      <li>Septic Tank Details</li>
      <li>Wastewater Treatment Facility Details</li>
      <li>Equipment Specifications</li>
      <li>Cost Estimates</li>
          </ul>
          <button onClick={closeModal} className="bg-custom-green text-white p-2 rounded mt-4">Close</button>
      </div>
        </Modal>
    </div>
  );
  
  }
export default Planning;