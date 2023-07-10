import React from "react";
import "./experience.css";
import experience from "../../assets/experience.json";

export default function Experience() {
  return (
    <div id="experience">
      <div className="container">
        <div className="row">
          <div className="col-sm-11">
            <h2 data-aos="fade-down">Experience</h2>
            <br />
            {experience.map((item) => (
              <div className="workblock" key={item.id}>
                <div className="row">
                  <div className="col-sm-5">
                    <h5 data-aos="fade-right">{item.startDate} - {item.endDate || "Present"}</h5>
                  </div>
                  <div className="col-sm-7">
                    <div className="educationright" data-aos="fade-left">
                      <h5>{item.employer}</h5>
                      <h6 className="position">
                        <i>{item.jobTitle}</i>
                      </h6>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


// import React from "react";
// import "./experience.css";
// import experience from "../../assets/experience.json"

// export default function Experience() {
//   return (
//     <div id="experience">
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-11 offset-sm-1">
//               <h2 data-aos="fade-down">Work</h2>
//               <br />
//               {experience.map((item, i) => (
//                 <div className="workblock" key={i}>
//                   <div className="row">
//                     <div className="col-sm-5">
//                       <h5 data-aos="fade-right">{item.year}</h5>
//                     </div>
//                     <div className="col-sm-7">
//                       <div className="educationright" data-aos="fade-left">
//                         <h5>{item.companyname}</h5>
//                         <h6 className="position">
//                           <i>{item.position}</i>
//                         </h6>
//                         <h6>{item.desc}</h6>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//   );
// }
