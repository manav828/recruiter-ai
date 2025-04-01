
// import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import "./UserFormStyle/mainJobAppForm.css";
// import Sidebar from "./Sidebar";
// import ImportOptions from "./Step1";
// import JobProfileForm from "./Step2";
// import Experience from "./Step3";

// function MainJobApplicationForm() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [selectedStep, setSelectedStep] = useState(1);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

//   // Update isMobile state on window resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 992);
//       if (window.innerWidth >= 992) {
//         setSidebarOpen(false); // Close sidebar on larger screens
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="min-vh-100 py-4">
//       {/* White background toggle button only when sidebar is hidden */}
//       {isMobile && !sidebarOpen && (
//         <nav className="mobile-navbar">
//           <button className="toggle-btn" onClick={() => setSidebarOpen(true)}>
//             <FontAwesomeIcon icon={faBars} size="lg" />
//           </button>
//         </nav>
//       )}

//       <div className="container rounded overflow-hidden">
//         <div className="row">
//           {/* Sidebar */}
//           <div className={`sidebarwidth bg-sidebar p-4 ${isMobile ? "sidebar-mobile" : ""} ${sidebarOpen ? "open" : ""}`}>
//             {isMobile && (
//               <button className="close-btn" onClick={() => setSidebarOpen(false)}>
//                 <FontAwesomeIcon icon={faTimes} size="lg" />
//               </button>
//             )}
//             <Sidebar selectedStep={selectedStep} setSelectedStep={setSelectedStep} />
//           </div>

//           {/* Main Content */}
//           <div className=" content-area col-lg-9">
//             {selectedStep === 1 && <ImportOptions onFileChange={setSelectedFile} setSelectedStep={setSelectedStep} />}
//             {selectedStep === 2 && <JobProfileForm setSelectedStep={setSelectedStep}/>}
//             {selectedStep === 3 && <Experience setSelectedStep={setSelectedStep} />}
//           </div>
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

function MainJobApplicationForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedStep, setSelectedStep] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

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
      {/* Mobile Navbar (Only Shows When Sidebar Is Closed) */}
      {isMobile && !sidebarOpen && (
        <nav className="mobile-navbar">
          <button className="toggle-btn" onClick={() => setSidebarOpen(true)}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </nav>
      )}

      <div className="main-container">
        {/* Sidebar */}
        <div className={`sidebar ${isMobile ? "sidebar-mobile" : ""} ${sidebarOpen ? "open" : ""}`}>
          {isMobile && (
            <button className="close-btn" onClick={() => setSidebarOpen(false)}>
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
          )}
          <Sidebar selectedStep={selectedStep} setSelectedStep={setSelectedStep} />
        </div>

        {/* Main Content */}
        <div className="content-area">
          {selectedStep === 1 && <ImportOptions onFileChange={setSelectedFile} setSelectedStep={setSelectedStep} />}
          {selectedStep === 2 && <JobProfileForm setSelectedStep={setSelectedStep} />}
          {selectedStep === 3 && <Experience setSelectedStep={setSelectedStep} />}
        </div>
      </div>
    </div>
  );
}

export default MainJobApplicationForm;
