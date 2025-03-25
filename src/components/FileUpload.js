// import { useState, useRef } from "react"  // Import React hooks
// import { FileIcon } from "lucide-react"   // Import file icon component from lucide-react

// function FileUpload({ onFileChange }) {
//   // State to track if a file is being dragged over the drop zone
//   const [isDragging, setIsDragging] = useState(false)

//   // State to store the selected file
//   const [file, setFile] = useState(null)

//   // Ref to access the hidden file input element
//   const fileInputRef = useRef(null)

//   // Handle drag-over event to indicate a file is being dragged
//   const handleDragOver = (e) => {
//     e.preventDefault()  // Prevent default behavior to allow drop
//     setIsDragging(true) // Update state to show dragging effect
//   }

//   // Handle drag leave event when file is dragged out
//   const handleDragLeave = (e) => {
//     e.preventDefault()
//     setIsDragging(false) // Reset dragging state
//   }

//   // Handle file drop event
//   const handleDrop = (e) => {
//     e.preventDefault()
//     setIsDragging(false) // Reset dragging state

//     // Check if a file is dropped
//     if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
//       const droppedFile = e.dataTransfer.files[0] // Get the first file
//       setFile(droppedFile)  // Update state with the selected file
//       onFileChange(droppedFile)  // Call the parent callback function
//     }
//   }

//   // Handle file selection from file input
//   const handleFileSelect = (e) => {
//     if (e.target.files && e.target.files.length > 0) {
//       const selectedFile = e.target.files[0] // Get the selected file
//       setFile(selectedFile)  // Update state
//       onFileChange(selectedFile)  // Pass the selected file to the parent component
//     }
//   }

//   // Handle click event to open file selection dialog
//   const handleClick = () => {
//     fileInputRef.current?.click() // Trigger the file input click
//   }

//   return (
//       <div
//         className={`border border-2 border-dashed rounded p-4 text-center ${
//           isDragging ? "border-primary bg-primary bg-opacity-10" : "border-secondary"
//         }`}
//         style={{ cursor: "pointer" }}
//         onDragOver={handleDragOver}  // Listen for drag over event
//         onDragLeave={handleDragLeave}  // Listen for drag leave event
//         onDrop={handleDrop}  // Listen for file drop event
//         onClick={handleClick}  // Open file selection dialog when clicked
//       >
//         {/* Hidden file input field */}
//         <input
//           type="file"
//           ref={fileInputRef}  // Reference to input field
//           onChange={handleFileSelect}  // Handle file selection
//           className="d-none"
//           accept=".pdf,.docx,.png,.jpg,.jpeg"  // Allowed file types
//         />

//         <div className="py-3">
//           {/* File icon */}
//           <FileIcon className="text-primary mb-3" size={40} />

//           {/* Instruction text */}
//           <p className="mb-1">
//             Drop file here or <span className="text-primary">click to select</span>
//           </p>
//           <p className="text-muted small">PDF, DOCX, JPG, and PNG files are allowed</p>

//           {/* Show selected file name if available */}
//           {file && (
//             <div className="mt-3 p-2 bg-light rounded d-flex align-items-center justify-content-center">
//               <FileIcon className="text-muted me-2" size={16} />
//               <span className="small text-muted">{file.name}</span>
//             </div>
//           )}
//         </div>
//       </div>
//   )
// }

// export default FileUpload
