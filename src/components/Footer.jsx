import React from 'react'

function Footer() {
   
    return (
        <footer className="py-6 bg-custom-green text-white">
	<div className="container px-6 mx-auto space-y-6 divide-y divide-white md:space-y-12 ">
		<div className="grid grid-cols-12">
			<div className="pb-6 col-span-full md:pb-0 md:col-span-6">
				<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
					<div className="flex items-center justify-center w-24 h-24 rounded-full">
						<img src="logowhite.svg" />
					</div>
					<span className="self-center text-2xl font-semibold">ENVI-COMM CORPORATION</span>
				</a>
			</div>
			<div className="col-span-6 text-center md:text-left md:col-span-3">
				<p className="pb-1 text-lg font-medium">Category</p>
				<ul>
					<li>
						<a rel="noopener noreferrer" href="/" className="hover:text-custom-green3">Home</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="/about" className="hover:text-custom-green3"> About</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="/services" className="hover:text-custom-green3">Services</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="/contactus" className="hover:text-custom-green3">Contact</a>
					</li>
					
				</ul>
			</div>
			<div className="col-span-6 text-center md:text-left md:col-span-3">
				<p className="pb-1 text-lg font-medium">Services</p>
				<ul>
					<li>
						<a rel="noopener noreferrer" href="#" className="hover:text-custom-green3">Applications</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#" className="hover:text-custom-green3">Designs</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#" className="hover:text-custom-green3">Monitoring</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#" className="hover:text-custom-green3">Consult</a>
					</li>
					
				</ul>
			</div>
		</div>
		<div className="grid justify-center pt-6 lg:justify-between">
			<div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
				<span>©2023 All rights reserved</span>
				
			</div>
			<div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
            <a rel="noopener noreferrer" href="#">
					<span>Privacy policy</span>
				</a>
				<a rel="noopener noreferrer" href="#">
					<span>Terms of service</span>
				</a>
			</div>
		</div>
	</div>
</footer>
   
    ) 
      
}

export default Footer