import React, {useState} from 'react';

function ApplicationList() {

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
  <div className="flex justify-center lg:justify-start w-full px-12 sm:px-6 lg:px-0">
  <div className="w-full sm:w-3/4 lg:w-auto lg:hidden">
      <ul className="mt-4 list-disc list-inside text-left xl:pl-[120px] lg:pl-[120px] md:pl-[120px] lg:hidden space-y-2 text-sm" style={{ fontFamily: '"Roboto", sans-serif' }}>
             <li>Area Clearance</li>
            <li>Certificate of Non-coverage</li>
            <li>Chemical Control Order (CCO) Registration Application</li>
            <li>Community Based Forest Management Agreement</li>
            <li>Discharge Permit</li>
            <li>Environmental Compliance Certificate (Technical & Non-Technical)</li>
            <li>Environmental Technology Verification</li>
            <li>Foreshore Lease Agreement</li>
      </ul>
      <div className='pt-10'>
      <button onClick={openModal} className="bg-custom-green text-white p-2 rounded mt-4 lg:hidden">Read More</button>
      </div>
    </div>

      {/* Full list for large screens */}
      <ul className="hidden mt-4 list-disc list-inside text-left grid grid-cols-2 gap-2 gap-x-5 xl:pl-[120px] lg:grid sm:block" >
      <li>Area Clearance</li>
              <li>Certificate of Non-coverage</li>
              <li>Chemical Control Order (CCO) Registration Application</li>
              <li>Community Based Forest Management Agreement</li>
              <li>Discharge Permit</li>
              <li>Environmental Compliance Certificate (Technical & Non-Technical)</li>
              <li>Environmental Technology Verification</li>
              <li>Foreshore Lease Agreement</li>
              <li>Forest Land Grazing Management Agreement (FLGMA)</li>
              <li>Forest Land Use Agreement (FLAg)</li>
              <li>Hazardous Waste Generator's ID</li>
              <li>Importation Clearance (IC) Application</li>
              <li>Integrated Forest Management Agreement (IFMA)</li>
              <li>Miscellaneous Lease Agreement</li>
              <li>National Water Resource Board Water Permit</li>
              <li>Ozone Depleting Substances (ODS) Dealers & Resellers Registration Application</li>
              <li>Permit to Operate</li>
              <li>Permit to Transport (PTT) Application</li>
              <li>Philippine Inventory of Chemicals and Chemical Substance Certification</li>
              <li>Pollution Control Officer Accreditation</li>
              <li>Pre-Manufacturing and Pre-Importation Notification Clearance</li>
              <li>Priority Chemical List Compliance Certificate</li>
              <li>Protected Area Management Board Clearance</li>
              <li>Small Quantity Importation</li>
              <li>Socialized Industrial Forest Management Agreement (SIFMA)</li>
              <li>Special Land Use Permit (SLUP)</li>
              <li>Special Use Agreement in Protected Areas</li>
              <li>Transportation Registration Certificate</li>
              <li>Treater, Storage, Disposal Facility Application</li>
              <li>Tree Cutting Permit (TCP)</li>
      </ul>

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
      <div className="p-4">
        <h2 className="text-2xl mb-4 font-extrabold text-custom-green1 uppercase py-10" style={{ fontFamily: 'Alegreya, serif' }}>Our Services</h2>
        <ul className="list-disc list-inside text-left space-y-4 text-sm" style={{ fontFamily: '"Open Sans", sans-serif' }}>
        <li>Certificate of Non-coverage</li>
              <li>Chemical Control Order (CCO) Registration Application</li>
              <li>Community Based Forest Management Agreement</li>
              <li>Discharge Permit</li>
              <li>Environmental Compliance Certificate (Technical & Non-Technical)</li>
              <li>Environmental Technology Verification</li>
              <li>Foreshore Lease Agreement</li>
              <li>Forest Land Grazing Management Agreement (FLGMA)</li>
              <li>Forest Land Use Agreement (FLAg)</li>
              <li>Hazardous Waste Generator's ID</li>
              <li>Importation Clearance (IC) Application</li>
              <li>Integrated Forest Management Agreement (IFMA)</li>
              <li>Miscellaneous Lease Agreement</li>
              <li>National Water Resource Board Water Permit</li>
              <li>Ozone Depleting Substances (ODS) Dealers & Resellers Registration Application</li>
              <li>Permit to Operate</li>
              <li>Permit to Transport (PTT) Application</li>
              <li>Philippine Inventory of Chemicals and Chemical Substance Certification</li>
              <li>Pollution Control Officer Accreditation</li>
              <li>Pre-Manufacturing and Pre-Importation Notification Clearance</li>
              <li>Priority Chemical List Compliance Certificate</li>
              <li>Protected Area Management Board Clearance</li>
              <li>Small Quantity Importation</li>
              <li>Socialized Industrial Forest Management Agreement (SIFMA)</li>
              <li>Special Land Use Permit (SLUP)</li>
              <li>Special Use Agreement in Protected Areas</li>
              <li>Transportation Registration Certificate</li>
              <li>Treater, Storage, Disposal Facility Application</li>
              <li>Tree Cutting Permit (TCP)</li>
        </ul>
        <button onClick={closeModal} className="bg-custom-green text-white p-2 rounded mt-4">Close</button>
    </div>
      </Modal>
  </div>
);

}

export default ApplicationList
