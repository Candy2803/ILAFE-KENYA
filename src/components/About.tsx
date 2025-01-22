// import React from 'react'

function About() {
  return (
    <div id="about">
        <h1 className="font-extrabold text-center text-3xl mt-14">About</h1>
        <div className="flex mt-8 text-center justify-around">
            <p className="mt-16">
            <span className="font-bold italic text-lg">ILAFE Kenya</span> (International Loss Adjusters and Fraud Examiners) is a leading professional organization <br /> 
            dedicated to providing expert services in loss adjustment and fraud examination. ILAFE Kenya brings together <br />
            experienced professionals who specialize in assessing insurance claims, determining the extent of loss or damage, <br />
            and investigating fraud across various industries. The organization offers specialized services in loss adjusting, <br />
            ensuring that claims are handled with precision, fairness, and efficiency. Additionally, ILAFE Kenya plays a critical <br />
            role in fraud detection and prevention, helping businesses and individuals mitigate financial risks and maintain <br />
            ethical standards. Through its comprehensive approach, ILAFE Kenya ensures transparency, professionalism, and integrity <br />
            in every case it handles.
            </p>
            <div>
               <img className="mr-24 rounded-full w-80 h-80" src="https://ik.imagekit.io/candyjess/ilafe.jpg?updatedAt=1737474690617" alt="ILAFE LOGO" />
            </div>
        </div>
        <div className="flex mt-24 text-center justify-around">
            <div>
            <img className=" rounded-full w-80 h-80" src="https://ik.imagekit.io/candyjess/images.jpeg?updatedAt=1737557514877" alt="Peter Mzungu" />
            <p className="text-center text-sm"><i><span className="font-bold text-lg">Peter Mzungu </span><br /> CEO ILAFE KENYA, Fraud examiner, <br /> Motor assessor, Loss assessor</i></p>
            </div>
            <p className="mt-16">
            Peter Mzungu is a highly skilled professional specializing in fraud prevention and risk assessment. <br />
            As a Certified Fraud Examiner (CFE), Peter brings expertise in detecting, investigating, and preventing <br />
            financial fraud. In addition to his fraud examination skills, he is an experienced Loss Assessor, adept <br />
            at evaluating the extent of damage and determining compensation in insurance claims. Peter also serves as <br />
            a Motor Assessor, where he uses his knowledge to assess vehicle damage and provide accurate valuations for repairs. <br />
            His multi-disciplinary expertise makes him a valuable asset in safeguarding financial interests and ensuring fair <br />
            and accurate assessments in various sectors.
            </p>
        </div>
    </div>
  )
}

export default About