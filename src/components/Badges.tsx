function Badges() {
  return (
    <div id="badges">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900">Badges</h2>
          
          {/* Use flex-col for small screens, flex-row for large screens */}
          <div className="flex flex-col lg:flex-row justify-around mt-8 items-center">
            {/* Image will be on top in mobile view */}
            
            <a href="https://credly.com/badges/e3f0951c-2902-4aad-93fe-e98106faddd3">
              <img
                className="w-80 h-72 rounded-full mb-8 lg:mb-0"
                src="https://ik.imagekit.io/candyjess/download%20(1).jpeg?updatedAt=1737475008949"
                alt="CFE BADGE"
              />
            </a>
            <p className="lg:mt-0 text-center lg:text-center">
              The Certified Fraud Examiner (CFE) badge is a digital credential awarded by the Association of Certified <br /> 
              Fraud Examiners (ACFE) to individuals who have successfully completed the requirements to become a CFE. <br />
              The badge is a visible and verifiable recognition of the professional's expertise in fraud prevention, <br /> 
              detection, and investigation. Click the badge to verify or click <a className="text-blue-400" href="https://credly.com/badges/e3f0951c-2902-4aad-93fe-e98106faddd3">Here</a>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Badges;
