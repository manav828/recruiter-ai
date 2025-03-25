// import { useState } from "react"
// import "bootstrap/dist/css/bootstrap.min.css"
// import "./App.css"
// import Sidebar from "./components/Sidebar"
// import ImportOptions from "./components/ImportOptions"
// import FileUpload from "./components/FileUpload"
// import { CheckCircle } from "lucide-react"

// function App() {
//   const [selectedFile, setSelectedFile] = useState(null)
//   const [selectedStep, setSelectedStep] = useState(1) // Manage sidebar selection

//   const handleFileChange = (file) => {
//     setSelectedFile(file)
//   }

//   return (
//     <div className="min-vh-100 p-3 p-md-5">
//       <div className="container rounded overflow-hidden">
//         <div className="row">
//           <div className="col-md-3 bg-sidebar p-4">
//             {/* Pass selectedStep and setSelectedStep to Sidebar */}
//             <Sidebar selectedStep={selectedStep} setSelectedStep={setSelectedStep} />
//           </div>
//           <div className="col-md-9 p-4 p-md-5">
//             {/* Conditional rendering based on selected step */}
//             {selectedStep === 1 && (
//               <>
//                 <h1 className="h3 fw-bold mb-2">Import your data to get Started</h1>
//                 <p className="text-muted mb-4">
//                   Choose the most up-to-date and complete source to auto-fill your information
//                 </p>

//                 <ImportOptions />

//                 <div className="mt-5">
//                   <h2 className="h5 fw-semibold mb-2">Upload your resume</h2>
//                   <p className="text-muted mb-3">
//                     Please upload one of .pdf, .docx, .png, .jpg, .jpeg
//                   </p>

//                   <FileUpload onFileChange={handleFileChange} />

//                   <div className="mt-4 d-flex align-items-start gap-2">
//                     <CheckCircle className="text-success" size={20} />
//                     <p className="text-muted small">
//                       Data Privacy is the top priority at Jobs Agent. Your resume will only be
//                       used for job matching and will never be shared with third parties.
//                     </p>
//                   </div>

//                   <div className="mt-5 d-flex justify-content-end">
//                     <button className="btn btn-primary">
//                       Continue <span className="ms-1">→</span>
//                     </button>
//                   </div>
//                 </div>
//               </>
//             )}

//             {selectedStep === 2 && (
//               <>
//                 <h1 className="h3 fw-bold mb-2">My Information</h1>
//                 <p className="text-muted mb-4">Enter your personal details to proceed.</p>
//                 {/* My information form */}
//               </>
//             )}

//             {selectedStep === 3 && (
//               <>
//                 <h1 className="h3 fw-bold mb-2">My Experience</h1>
//                 <p className="text-muted mb-4">Provide details of your work experience.</p>
//                 {/* Experience input fields here */}
//               </>
//             )}

           
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App















import { useState } from "react"
// import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Sidebar from "./components/Sidebar"
import ImportOptions from "./components/ImportOptions"

import JobProfileForm from "./components/MyInformation"

function App() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [selectedStep, setSelectedStep] = useState(1) // Manage sidebar selection

  const handleFileChange = (file) => {
    setSelectedFile(file)
  }

  return (
    <div className="min-vh-100 p-3 p-md-5">
      <div className="container rounded overflow-hidden">
        <div className="row">
          <div className="col-md-3 bg-sidebar p-4">
            {/* Pass selectedStep and setSelectedStep to Sidebar */}
            <Sidebar selectedStep={selectedStep} setSelectedStep={setSelectedStep} />
          </div>
          <div className="col-md-9 p-4 p-md-5">
            {/* Conditional rendering based on selected step */}
            {selectedStep === 1 && (
              <>
                <h1 className="h3 fw-bold mb-2">Import your data to get Started</h1>
                <p className="text-muted mb-4">
                  Choose the most up-to-date and complete source to auto-fill your information
                </p>

                <ImportOptions onFileChange={handleFileChange}/>

              
              </>
            )}

            {selectedStep === 2 && (
              <>
                {/* <h1 className="h3 fw-bold mb-2">My Information</h1>
                <p className="text-muted mb-4">Enter your personal details to proceed.</p>
                My information form */}
                <JobProfileForm/>
              </>
            )}

            {selectedStep === 3 && (
              <>
                <h1 className="h3 fw-bold mb-2">My Experience</h1>
                <p className="text-muted mb-4">Provide details of your work experience.</p>
                {/* Experience input fields here */}
              </>
            )}

           
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
