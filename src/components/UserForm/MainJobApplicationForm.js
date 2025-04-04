
// import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import "./UserFormStyle/mainJobAppForm.css";
// import Sidebar from "./Sidebar";
// import ImportOptions from "./Step1";
// import JobProfileForm from "./Step2";
// import Experience from "./Step3";
// import Step5 from "./Step5";
// import Step6 from "./Step6";
// import Step4 from "./step4";

// function MainJobApplicationForm() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [selectedStep, setSelectedStep] = useState(1);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 992);
//       if (window.innerWidth >= 992) {
//         setSidebarOpen(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="app-container">
//       {/* Mobile Navbar (Only Shows When Sidebar Is Closed) */}
//       {isMobile && !sidebarOpen && (
//         <nav className="mobile-navbar">
//           <button className="toggle-btn" onClick={() => setSidebarOpen(true)}>
//             <FontAwesomeIcon icon={faBars} size="lg" />
//           </button>
//         </nav>
//       )}

//       <div className="main-container">
//         {/* Sidebar */}
//         <div className={`sidebar ${isMobile ? "sidebar-mobile" : ""} ${sidebarOpen ? "open" : ""}`}>
//           {isMobile && (
//             <button className="close-btn" onClick={() => setSidebarOpen(false)}>
//               <FontAwesomeIcon icon={faTimes} size="lg" />
//             </button>
//           )}
//           <Sidebar selectedStep={selectedStep} setSelectedStep={setSelectedStep} />
//         </div>

//         {/* Main Content */}
//         <div className="content-area">
//           {selectedStep === 1 && <ImportOptions onFileChange={setSelectedFile} setSelectedStep={setSelectedStep} />}
//           {selectedStep === 2 && <JobProfileForm setSelectedStep={setSelectedStep} />}
//           {selectedStep === 3 && <Experience setSelectedStep={setSelectedStep} />}
//           {selectedStep === 4 && <Step4 setSelectedStep={setSelectedStep} />}
//           {selectedStep === 5 && <Step5 setSelectedStep={setSelectedStep} />}
//           {selectedStep === 6 && <Step6 setSelectedStep={setSelectedStep} />}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MainJobApplicationForm;



















import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./UserFormStyle/mainJobAppForm.css";
import Sidebar from "./Sidebar";
import ImportOptions from "./Step1";
import JobProfileForm from "./Step2";
import Experience from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
// import Summary from "./Summary";

function MainJobApplicationForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedStep, setSelectedStep] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  const [formData, setFormData] = useState({
    step1: { selectedOption: "upload", uploadedFile: null, linkedinUrl: "" },
    step2: {
      FullName: "",
      jobTitle: "",
      phoneNumber: "",
      linkedinUrl: "",
      addressLine1: "",
      city: "",
      postalCode: "",
      state: "",
      phoneDeviceType: "",
      countryCode: "IN",
      phoneNumberWithCode: "",
      experienceLevel: "Entry",
      minimumSalary: "",
      jobType: "Full Time",
    },
    step3: {
      experiences: [],
      skills: [],
      uploadedFile: null,
      websiteUrls: [""],
      linkedinUrl: "",
    },
    step4: {},
    step5: {},
    step6: {},
    step7: {},
  });

  const updateFormData = (step, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: { ...prevData[step], ...data },
    }));
  };

  // Console log Step 2 data whenever it changes
  useEffect(() => {
    console.log("Step 2 Data:", formData.step2);
  }, [formData.step2]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      if (window.innerWidth >= 992) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app-container">
      {isMobile && !sidebarOpen && (
        <nav className="mobile-navbar">
          <button className="toggle-btn" onClick={() => setSidebarOpen(true)}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </nav>
      )}

      <div className="main-container">
        <div className={`sidebar ${isMobile ? "sidebar-mobile" : ""} ${sidebarOpen ? "open" : ""}`}>
          {isMobile && (
            <button className="close-btn" onClick={() => setSidebarOpen(false)}>
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
          )}
          <Sidebar selectedStep={selectedStep} setSelectedStep={setSelectedStep} totalSteps={8} />
        </div>

        <div className="content-area">
          {selectedStep === 1 && (
            <ImportOptions
              onFileChange={setSelectedFile}
              setSelectedStep={setSelectedStep}
              formData={formData.step1}
              updateFormData={(data) => updateFormData("step1", data)}
            />
          )}
          {selectedStep === 2 && (
            <JobProfileForm
              setSelectedStep={setSelectedStep}
              formData={formData.step2}
              updateFormData={(data) => updateFormData("step2", data)}
            />
          )}
          {selectedStep === 3 && (
            <Experience
              setSelectedStep={setSelectedStep}
              formData={formData.step3}
              updateFormData={(data) => updateFormData("step3", data)}
            />
          )}
          {selectedStep === 4 && (
            <Step4
              setSelectedStep={setSelectedStep}
              formData={formData.step4}
              updateFormData={(data) => updateFormData("step4", data)}
            />
          )}
          {selectedStep === 5 && (
            <Step5
              setSelectedStep={setSelectedStep}
              formData={formData.step5}
              updateFormData={(data) => updateFormData("step5", data)}
            />
          )}
          {selectedStep === 6 && (
            <Step6
              setSelectedStep={setSelectedStep}
              formData={formData.step6}
              updateFormData={(data) => updateFormData("step6", data)}
            />
          )}
          {selectedStep === 7 && <div>Step 7 Placeholder</div>}
          {/* {selectedStep === 8 && <Summary formData={formData} setSelectedStep={setSelectedStep} />} */}
        </div>
      </div>
    </div>
  );
}

export default MainJobApplicationForm;