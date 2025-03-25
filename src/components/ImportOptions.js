// import { Upload, Linkedin, PenSquare } from "lucide-react" // Importing icons from lucide-react
// import "../styles/importoption.css" // Importing custom styles

// // Array of import options
// const options = [
//   {
//     id: "upload", // Unique identifier
//     name: "Upload Resume", // Display name
//     icon: Upload, // Icon component
//     selected: true, // Indicates if this option is selected
//   },
//   {
//     id: "linkedin",
//     name: "Connect LinkedIn",
//     icon: Linkedin,
//     selected: false,
//   },
//   {
//     id: "manual",
//     name: "Add Manually",
//     icon: PenSquare,
//     selected: false,
//   },
// ]

// function ImportOptions() {






//   return (
//     <div className="row g-3">
//       {/* Loop through each option and render UI */}
//       {options.map((option) => (
//         <div className="col-md-4" key={option.id}>
//           <div
//             className={`border rounded p-4 d-flex flex-column align-items-center justify-content-center h-100 cursor-pointer ${
//               option.selected ? "selected-br-card selected-bg-card bg-opacity-10" : "border-secondary"
//             }`}
//             style={{ cursor: "pointer", minHeight: "140px" }} // Ensure a minimum height
//           >
//             {/* Icon container */}
//             <div
//               className={`rounded-circle d-flex align-items-center justify-content-center mb-3 ${
//                 option.selected ? "bg-primary bg-opacity-10 text-primary" : "bg-light text-dark"
//               }`}
//               style={{ width: "48px", height: "48px" }} // Set fixed size for icon container
//             >
//               <option.icon size={24} /> {/* Render the icon dynamically */}
//             </div>

//             {/* Display option name */}
//             <span className="small fw-medium selected-font">{option.name}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default ImportOptions
















import { Upload, Linkedin, PenSquare } from "lucide-react" // Importing icons from lucide-react
import "../styles/importoption.css" // Importing custom styles
import { useState, useRef } from "react"  // Import React hooks
import { FileIcon } from "lucide-react"   // Import file icon component from lucide-react
import { CheckCircle } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faPen } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";



// Array of import options
const options = [
  {
    id: "upload",
    name: "Upload Resume",
    icon: faUpload, // FontAwesome icon class
    selected: true,
  },
  {
    id: "linkedin",
    name: "Connect LinkedIn",
    icon: faLinkedin, // FontAwesome LinkedIn icon
    selected: false,
  },
  {
    id: "manual",
    name: "Add Manually",
    icon: faPen, // FontAwesome Pen icon
    selected: false,
  },
];

function ImportOptions({ onFileChange }) {

  // State to track if a file is being dragged over the drop zone
  const [isDragging, setIsDragging] = useState(false)

  // State to store the selected file
  const [file, setFile] = useState(null)

  // Ref to access the hidden file input element
  const fileInputRef = useRef(null)

  // Handle drag-over event to indicate a file is being dragged
  const handleDragOver = (e) => {
    e.preventDefault()  // Prevent default behavior to allow drop
    setIsDragging(true) // Update state to show dragging effect
  }

  // Handle drag leave event when file is dragged out
  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false) // Reset dragging state
  }

  // Handle file drop event
  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false) // Reset dragging state

    // Check if a file is dropped
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0] // Get the first file
      setFile(droppedFile)  // Update state with the selected file
      onFileChange(droppedFile)  // Call the parent callback function
    }
  }

  // Handle file selection from file input
  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0] // Get the selected file
      setFile(selectedFile)  // Update state
      onFileChange(selectedFile)  // Pass the selected file to the parent component
    }
  }

  // Handle click event to open file selection dialog
  const handleClick = () => {
    fileInputRef.current?.click() // Trigger the file input click
  }





  return (

    <>
 <h1 className="heading1 fw-bold mb-2">Import your data to get Started</h1>
                <p className="subtext1 text-muted mb-4">
                  Choose the most up-to-date and complete source to auto-fill your information
                </p>
      <div className="row g-3">
        {/* Loop through each option and render UI */}
        {options.map((option) => (
          <div className="col-md-4" key={option.id}>
            <div
              className={`${option.id == 'upload' ? "import-box-select font-color":"import-box" } p-4 d-flex flex-column align-items-center justify-content-center h-100 cursor-pointer ${option.selected ? "selected-br-card selected-bg-card bg-opacity-10" : "border-secondary"
                }`}
             style={{ cursor: "pointer", maxHeight: "120px", padding: "1rem" }}
 // Ensure a minimum height
            >
              {/* Icon container */}
              <div
                className={` d-flex align-items-center justify-content-center mb-3 ${option.selected ? "  text-primary" : " text-dark"
                  }`}
                style={{ width: "48px", height: "48px" }} // Set fixed size for icon container
              >
                {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
                <FontAwesomeIcon icon={option.icon} size="lg" />
             

                {/* Render the icon dynamically */}
              </div>

              {/* Display option name */}
              <span className="small fw-bold selected-font">{option.name}</span>
            </div>
          </div>
        ))}
      </div>



      <div className="mt-5">
        <h2 className="heading1 fw-bold mb-2">Upload your resume</h2>
        <p className="subtext1 text-muted mb-3">
          Please upload one of .pdf, .docx, .png, .jpg, .jpeg
        </p>

        {/* <FileUpload onFileChange={handleFileChange} /> */}


        <div
          className={`resumeUpload border-1 border-dashed rounded p-4 text-center ${isDragging ? "border-primary bg-primary bg-opacity-10" : "border-secondary"
            }`}
          style={{ cursor: "pointer" }}
          onDragOver={handleDragOver}  // Listen for drag over event
          onDragLeave={handleDragLeave}  // Listen for drag leave event
          onDrop={handleDrop}  // Listen for file drop event
          onClick={handleClick}  // Open file selection dialog when clicked
        >
          {/* Hidden file input field */}
          <input
            type="file"
            ref={fileInputRef}  // Reference to input field
            onChange={handleFileSelect}  // Handle file selection
            className="d-none"
            accept=".pdf,.docx,.png,.jpg,.jpeg"  // Allowed file types
          />

          <div className="py-3">
            {/* File icon */}
            <div className="flex justify-center">
    <FileIcon className="font-color mb-3" size={40} />
  </div>
            {/* Instruction text */}
            <p className="mb-1">
              Drop file here or <span className="font-color">click to select</span>
            </p>
            <p className="text-muted small">PDF, DOCX, JPG, and PNG files are allowed</p>

            {/* Show selected file name if available */}
            {file && (
              <div className="mt-3 p-2 bg-light rounded d-flex align-items-center justify-content-center">
                <FileIcon className="text-muted me-2" size={16} />
                <span className="small text-muted">{file.name}</span>
              </div>
            )}
          </div>
        </div>

        <div className="data-privacy mt-4 d-flex align-items-center  gap-2">
          <CheckCircle className="text-success" size={20} />
          <p className="text-muted small d-flex align-items-center dp-text">
            Data Privacy is the top priority at Jobs Agent. Your resume will only be
            used for job matching and will never be shared with third parties.
          </p>
        </div>


        <div className="mt-5 d-flex justify-content-end">
          <button className="btn btn-primary">
            Continue <span className="ms-1">→</span>
          </button>
        </div>
      </div>


    </>

  )
}

export default ImportOptions
