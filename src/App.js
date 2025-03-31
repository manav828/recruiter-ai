

// import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import "./App.css";
// import Sidebar from "./components/Sidebar";
// import ImportOptions from "./components/ImportOptions";
// import JobProfileForm from "./components/MyInformation";

// function App() {
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
//     <div className="min-vh-100">
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
//           <div className={`col-md-3 bg-sidebar p-4 ${isMobile ? "sidebar-mobile" : ""} ${sidebarOpen ? "open" : ""}`}>
//             {isMobile && (
//               <button className="close-btn" onClick={() => setSidebarOpen(false)}>
//                 <FontAwesomeIcon icon={faTimes} size="lg" />
//               </button>
//             )}
//             <Sidebar selectedStep={selectedStep} setSelectedStep={setSelectedStep} />
//           </div>

//           {/* Main Content */}
//           <div className=" content-area col-lg-9">
//             {selectedStep === 1 && <ImportOptions onFileChange={setSelectedFile} />}
//             {selectedStep === 2 && <JobProfileForm />}
//             {selectedStep === 3 && (
//               <>
//                 <h1 className="h3 fw-bold mb-2">My Experience</h1>
//                 <p className="text-muted mb-4">Provide details of your work experience.</p>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;








import { useState } from "react";
// import LoginPage from "./auth/LoginPage";
import JobApplicationForm from "./components/UserForm/MainJobApplicationForm";
// import FinalDashboard from "./home/FinalDashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isFormCompleted, setIsFormCompleted] = useState(false);

  return (
    <div>

        <JobApplicationForm onComplete={() => setIsFormCompleted(true)} />
    
    </div>
  );
}

export default App;
