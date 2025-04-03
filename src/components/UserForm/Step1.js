
// import { useState, useRef, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUpload } from "@fortawesome/free-solid-svg-icons";
// import { CheckCircle, Trash2Icon } from "lucide-react";
// import "./UserFormStyle/importoption.css";
// import { ReactComponent as UploadResumeColor } from "../icons/uploadResume.svg";
// import { ReactComponent as UploadMenualBlack } from "../icons/menual.svg";
// import { ReactComponent as UploadLinkdinBlack } from "../icons/linkdin.svg";
// import { ReactComponent as UploadResumeBlack } from "../icons/resumeUploadBlack.svg";
// import { ReactComponent as UploadMenualColor } from "../icons/menualColor.svg";
// import { ReactComponent as UploadLinkdinColor } from "../icons/linkedin_color.svg";
// import { ReactComponent as Arrow } from "../icons/arrow.svg";
// import { ReactComponent as Note } from "../icons/note.svg";

// function ImportOptions({ onFileChange, setSelectedStep }) {
//   const [selectedOption, setSelectedOption] = useState("upload");
//   const [uploadedFile, setUploadedFile] = useState(null);
//   const [linkedinUrl, setLinkedinUrl] = useState("");
//   const [icons, setIcons] = useState({
//     upload: UploadResumeColor,
//     linkedin: UploadLinkdinBlack,
//     manual: UploadMenualBlack,
//   });

//   const fileInputRef = useRef(null);

//   useEffect(() => {
//     // First set all icons to black (default)
//     const newIcons = {
//       upload: UploadResumeBlack,
//       linkedin: UploadLinkdinBlack,
//       manual: UploadMenualBlack,
//     };
    
//     // Then change the selected option's icon to color
//     if (selectedOption === 'upload') {
//       newIcons.upload = UploadResumeColor;
//     } else if (selectedOption === 'linkedin') {
//       newIcons.linkedin = UploadLinkdinColor;
//     } else if (selectedOption === 'manual') {
//       newIcons.manual = UploadMenualColor;
//     }
    
//     // Also handle the case when there's a file or LinkedIn URL
//     if (uploadedFile) {
//       newIcons.upload = UploadResumeColor;
//     }
//     if (linkedinUrl) {
//       newIcons.linkedin = UploadLinkdinColor;
//     }
    
//     setIcons(newIcons);
//   }, [selectedOption, uploadedFile, linkedinUrl]); // Add selectedOption to dependency array

//   const handleOptionClick = (id) => {
//     setSelectedOption(id);
//     setUploadedFile(null);
//     setLinkedinUrl("");
//   };

//   const handleFileSelect = (e) => {
//     if (e.target.files.length > 0) {
//       const selectedFile = e.target.files[0];
//       setUploadedFile(selectedFile);
//       onFileChange(selectedFile);
//     }
//   };

//   const handleDelete = () => {
//     setUploadedFile(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   const options = [
//     { id: "upload", name: "Upload Resume" },
//     { id: "linkedin", name: "Connect LinkedIn" },
//     { id: "manual", name: "Add Manually" },
//   ];

//   return (
//     <>
//       <h1 className="heading1 fw-bold mb-2">Import your data to get Started</h1>
//       <p className="subtext1 text-muted mb-4">
//         Choose the most up-to-date and complete source to auto-fill your information.
//       </p>

//       <div className="row g-3">
//         {options.map((option) => {
//           const IconComponent = icons[option.id];
//           return (
//             <div className="col-md-4 selectCard" key={option.id}>
//               <div
//                 className={`p-4 d-flex flex-column align-items-center justify-content-center h-100 cursor-pointer ${
//                   selectedOption === option.id ? "import-box-select font-color selected-bg-card" : "import-box"
//                 }`}
//                 style={{ cursor: "pointer", maxHeight: "120px", gap: "10px" }}
//                 onClick={() => handleOptionClick(option.id)}
//               >
//                 <IconComponent className="font-color" width="24px" height="24px" />
//                 <span className="small fw-bold">{option.name}</span>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <div className="mt-5">
//         {selectedOption === "upload" && (
//           <>
//             <h2 className="heading1 fw-bold mb-2">Upload your resume</h2>
//             <p className="subtext1 text-muted mb-3">
//               Please upload one of .pdf, .docx, .png, .jpg, .jpeg
//             </p>

//             {!uploadedFile ? (
//               <div
//                 className="resumeUpload border-2 border-dashed rounded p-4 text-center cursor-pointer"
//                 onClick={() => fileInputRef.current?.click()}
//               >
//                 <input
//                   type="file"
//                   ref={fileInputRef}
//                   onChange={handleFileSelect}
//                   className="d-none"
//                   accept=".pdf,.docx,.png,.jpg,.jpeg"
//                 />
//                 <FontAwesomeIcon icon={faUpload} className="font-color mb-3" size={40} />
//                 <p className="mb-1">
//                   Drop file here or <span className="font-color">click to select</span>
//                 </p>
//                 <p className="text-muted small">PDF, DOCX, JPG, and PNG files are allowed</p>
//               </div>
//             ) : (
//               <div className="flex items-center justify-between mt-4 px-3 border border-gray-200 rounded-lg bg-uploaded">
//                 <div className="flex items-center space-x-3">
//                   <Note className="text-gray-500" width="24px" height="24px" />
//                   <div className="flex flex-col">
//                     <p className="text-gray-800 text-sm font-medium smText mb-1 ">{uploadedFile.name}</p>
//                     <div className="flex items-center gap-1 text-gray-500 text-xs">
//                       <p className="p-0 m-0">{(uploadedFile.size / 1024).toFixed(2)} KB ·</p>
//                       <CheckCircle className="text-green-500" width="12px" height="12px" />
//                       <span className="text-green-500">Uploaded</span>
//                     </div>
//                   </div>
//                 </div>
//                 <button onClick={handleDelete} className="text-gray-500 hover:text-red-500">
//                   <Trash2Icon className="font-color" width="24px" height="24px" />
//                 </button>
//               </div>
//             )}
//           </>
//         )}

//         {selectedOption === "linkedin" && (
//           <>
//             <h2 className="heading1 fw-bold mb-2">Enter your LinkedIn profile link</h2>
//             <input
//               type="text"
//               className="form-control mt-2"
//               placeholder="https://www.linkedin.com/in/your-profile"
//               value={linkedinUrl}
//               onChange={(e) => setLinkedinUrl(e.target.value)}
//             />
//           </>
//         )}
        
//         {selectedOption === "manual" && (
//           <>
//             <h2 className="heading1 fw-bold mb-2">Enter your information manually</h2>
//             <p className="subtext1 text-muted mb-3">
//               You'll be able to fill in your professional details in the next steps.
//             </p>
//           </>
//         )}
//       </div>

//       <div className="data-privacy mt-4 d-flex align-items-center gap-2">
//         <CheckCircle className="text-success" size={20} />
//         <p className="text-muted small m-0">
//           Data Privacy is our top priority. Your resume will only be used for job matching and will never be shared with third parties.
//         </p>
//       </div>

//       <div className="mt-4 d-flex justify-content-end">
//         <button className="btn-continue d-flex align-items-center gap-2" onClick={() => setSelectedStep(2)}>
//           Continue <Arrow />
//         </button>
//       </div>
//     </>
//   );
// }

// export default ImportOptions;




















import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { CheckCircle, Trash2Icon, AlertCircle } from "lucide-react";
import "./UserFormStyle/importoption.css";
import { ReactComponent as UploadResumeColor } from "../icons/uploadResume.svg";
import { ReactComponent as UploadMenualBlack } from "../icons/menual.svg";
import { ReactComponent as UploadLinkdinBlack } from "../icons/linkdin.svg";
import { ReactComponent as UploadResumeBlack } from "../icons/resumeUploadBlack.svg";
import { ReactComponent as UploadMenualColor } from "../icons/menualColor.svg";
import { ReactComponent as UploadLinkdinColor } from "../icons/linkedin_color.svg";
import { ReactComponent as Arrow } from "../icons/arrow.svg";
import { ReactComponent as Note } from "../icons/note.svg";

function ImportOptions({ onFileChange, setSelectedStep, formData, updateFormData }) {
  // Initialize state from formData if available
  const [selectedOption, setSelectedOption] = useState(formData?.selectedOption || "upload");
  const [uploadedFile, setUploadedFile] = useState(formData?.uploadedFile || null);
  const [linkedinUrl, setLinkedinUrl] = useState(formData?.linkedinUrl || "");
  const [validationError, setValidationError] = useState("");
  const [icons, setIcons] = useState({
    upload: UploadResumeColor,
    linkedin: UploadLinkdinBlack,
    manual: UploadMenualBlack,
  });

  const fileInputRef = useRef(null);

  useEffect(() => {
    // First set all icons to black (default)
    const newIcons = {
      upload: UploadResumeBlack,
      linkedin: UploadLinkdinBlack,
      manual: UploadMenualBlack,
    };
    
    // Then change the selected option's icon to color
    if (selectedOption === 'upload') {
      newIcons.upload = UploadResumeColor;
    } else if (selectedOption === 'linkedin') {
      newIcons.linkedin = UploadLinkdinColor;
    } else if (selectedOption === 'manual') {
      newIcons.manual = UploadMenualColor;
    }
    
    // Also handle the case when there's a file or LinkedIn URL
    if (uploadedFile) {
      newIcons.upload = UploadResumeColor;
    }
    if (linkedinUrl) {
      newIcons.linkedin = UploadLinkdinColor;
    }
    
    setIcons(newIcons);
  }, [selectedOption, uploadedFile, linkedinUrl]);

  // Update parent form data when any value changes
  useEffect(() => {
    if (updateFormData) {
      updateFormData({
        selectedOption,
        uploadedFile,
        linkedinUrl
      });
    }
  }, [selectedOption, uploadedFile, linkedinUrl, updateFormData]);

  const handleOptionClick = (id) => {
    setSelectedOption(id);
    setUploadedFile(null);
    setLinkedinUrl("");
    setValidationError("");
  };

  const handleFileSelect = (e) => {
    if (e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setUploadedFile(selectedFile);
      onFileChange(selectedFile);
      setValidationError("");
    }
  };

  const handleDelete = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleLinkedinUrlChange = (e) => {
    setLinkedinUrl(e.target.value);
    if (e.target.value) {
      setValidationError("");
    }
  };

  const validateAndContinue = () => {
    // Validate based on the selected option
    if (selectedOption === "upload" && !uploadedFile) {
      setValidationError("Please upload your resume before continuing.");
      return;
    }
    
    if (selectedOption === "linkedin" && !linkedinUrl) {
      setValidationError("Please enter your LinkedIn profile URL before continuing.");
      return;
    }
    
    // If we get here, validation passed
    setSelectedStep(2);
  };

  const options = [
    { id: "upload", name: "Upload Resume" },
    { id: "linkedin", name: "Connect LinkedIn" },
    { id: "manual", name: "Add Manually" },
  ];

  return (
    <>
      <h1 className="heading1 fw-bold mb-2">Import your data to get Started</h1>
      <p className="subtext1 text-muted mb-4">
        Choose the most up-to-date and complete source to auto-fill your information.
      </p>

      <div className="row g-3">
        {options.map((option) => {
          const IconComponent = icons[option.id];
          return (
            <div className="col-md-4 selectCard" key={option.id}>
              <div
                className={`p-4 d-flex flex-column align-items-center justify-content-center h-100 cursor-pointer ${
                  selectedOption === option.id ? "import-box-select font-color selected-bg-card" : "import-box"
                }`}
                style={{ cursor: "pointer", maxHeight: "120px", gap: "10px" }}
                onClick={() => handleOptionClick(option.id)}
              >
                <IconComponent className="font-color" width="24px" height="24px" />
                <span className="small fw-bold">{option.name}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5">
        {selectedOption === "upload" && (
          <>
            <h2 className="heading1 fw-bold mb-2">Upload your resume</h2>
            <p className="subtext1 text-muted mb-3">
              Please upload one of .pdf, .docx, .png, .jpg, .jpeg
            </p>

            {!uploadedFile ? (
              <div
                className="resumeUpload border-2 border-dashed rounded p-4 text-center cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  className="d-none"
                  accept=".pdf,.docx,.png,.jpg,.jpeg"
                />
                <FontAwesomeIcon icon={faUpload} className="font-color mb-3" size={40} />
                <p className="mb-1">
                  Drop file here or <span className="font-color">click to select</span>
                </p>
                <p className="text-muted small">PDF, DOCX, JPG, and PNG files are allowed</p>
              </div>
            ) : (
              <div className="flex items-center justify-between mt-4 px-3 border border-gray-200 rounded-lg bg-uploaded">
                <div className="flex items-center space-x-3">
                  <Note className="text-gray-500" width="24px" height="24px" />
                  <div className="flex flex-col">
                    <p className="text-gray-800 text-sm font-medium smText mb-1 ">{uploadedFile.name}</p>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <p className="p-0 m-0">{(uploadedFile.size / 1024).toFixed(2)} KB ·</p>
                      <CheckCircle className="text-green-500" width="12px" height="12px" />
                      <span className="text-green-500">Uploaded</span>
                    </div>
                  </div>
                </div>
                <button onClick={handleDelete} className="text-gray-500 hover:text-red-500">
                  <Trash2Icon className="font-color" width="24px" height="24px" />
                </button>
              </div>
            )}
          </>
        )}

        {selectedOption === "linkedin" && (
          <>
            <h2 className="heading1 fw-bold mb-2">Enter your LinkedIn profile link</h2>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="https://www.linkedin.com/in/your-profile"
              value={linkedinUrl}
              onChange={handleLinkedinUrlChange}
            />
          </>
        )}
        
        {selectedOption === "manual" && (
          <>
            <h2 className="heading1 fw-bold mb-2">Enter your information manually</h2>
            <p className="subtext1 text-muted mb-3">
              You'll be able to fill in your professional details in the next steps.
            </p>
          </>
        )}
      </div>

      {validationError && (
        <div className="alert alert-danger d-flex align-items-center mt-4" role="alert">
          <AlertCircle className="me-2" size={20} />
          <div>{validationError}</div>
        </div>
      )}

      <div className="data-privacy mt-4 d-flex align-items-center gap-2">
        <CheckCircle className="text-success" size={20} />
        <p className="text-muted small m-0">
          Data Privacy is our top priority. Your resume will only be used for job matching and will never be shared with third parties.
        </p>
      </div>

      <div className="mt-4 d-flex justify-content-end">
        <button 
          className="btn-continue d-flex align-items-center gap-2" 
          onClick={validateAndContinue}
        >
          Continue <Arrow />
        </button>
      </div>
    </>
  );
}

export default ImportOptions;