// import React from 'react'

function Badges() {
  return (
    <div id="badges">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Badges</h2>
          <div className="flex justify-around mt-8">
            <p className="mt-14">The Certified Fraud Examiner (CFE) badge 
              is a digital credential awarded by the Association of Certified <br /> Fraud Examiners (ACFE)
              to individuals who have successfully completed the requirements to become a CFE. <br />The badge 
              is a visible and verifiable recognition of the professional's expertise in fraud prevention,<br /> 
              detection, and investigation. Click the badge to verify or click <a className="text-blue-400" href="https://credly.com/badges/e3f0951c-2902-4aad-93fe-e98106faddd3">Here</a></p>
          <a href="https://credly.com/badges/e3f0951c-2902-4aad-93fe-e98106faddd3"><img className="w-64 h-60 rounded-full" src="https://ik.imagekit.io/candyjess/download%20(1).jpeg?updatedAt=1737475008949" alt="CFE BADGE" /></a>
          {/* <img className="w-64 h-60 rounded-full" src="https://ik.imagekit.io/candyjess/ilafe.jpg?updatedAt=1737474690617" alt="ILAFE KENYA" /> */}
          </div>
        </div>
        </div>
    </div>
  )
}

export default Badges