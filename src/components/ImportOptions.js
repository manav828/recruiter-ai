
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faPen } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FileIcon, CheckCircle } from "lucide-react";
import "../styles/importoption.css";

// Import options array
const options = [
  { id: "upload", name: "Upload Resume", icon: faUpload },
  { id: "linkedin", name: "Connect LinkedIn", icon: faLinkedin },
  { id: "manual", name: "Add Manually", icon: faPen },
];

function ImportOptions({ onFileChange }) {
  const [selectedOption, setSelectedOption] = useState("upload");
  const [file, setFile] = useState(null);
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const fileInputRef = useRef(null);

  // Handle option selection
  const handleOptionClick = (id) => {
    setSelectedOption(id);
    setFile(null); // Reset file selection on option change
    setLinkedinUrl(""); // Reset LinkedIn URL on option change
  };

  // Handle file selection
  const handleFileSelect = (e) => {
    if (e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      onFileChange(selectedFile);
    }
  };

  return (
    <>
      <h1 className="heading1 fw-bold mb-2">Import your data to get Started</h1>
      <p className="subtext1 text-muted mb-4">
        Choose the most up-to-date and complete source to auto-fill your information
      </p>

      {/* Import Options */}
      <div className="row g-3">
        {options.map((option) => (
          <div className="col-md-4" key={option.id}>
            <div
              className={` p-4 d-flex flex-column align-items-center justify-content-center h-100 cursor-pointer ${
                selectedOption === option.id ? "import-box-select font-color selected-bg-card " : "import-box"
              }`}
              style={{ cursor: "pointer", maxHeight: "120px" }}
              onClick={() => handleOptionClick(option.id)}
            >
              <FontAwesomeIcon icon={option.icon} size="lg" className="mb-3" />
              <span className="small fw-bold">{option.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Conditional Rendering Based on Selected Option */}
      <div className="mt-5">
        {selectedOption === "upload" && (
          <>
            <h2 className="heading1 fw-bold mb-2">Upload your resume</h2>
            <p className="subtext1 text-muted mb-3">
              Please upload one of .pdf, .docx, .png, .jpg, .jpeg
            </p>

            <div
              className="resumeUpload border-1 border-dashed rounded p-4 text-center cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                className="d-none"
                accept=".pdf,.docx,.png,.jpg,.jpeg"
              />
              <div className="d-flex justify-content-center">
  <FileIcon className="font-color mb-3" size={40} />
</div>
              <p className="mb-1">Drop file here or <span className="font-color">click to select</span></p>
              <p className="text-muted small">PDF, DOCX, JPG, and PNG files are allowed</p>

              {file && (
                <div className="mt-3 p-2 bg-light rounded d-flex align-items-center justify-content-center">
                  <FileIcon className="text-muted me-2" size={16} />
                  <span className="small text-muted">{file.name}</span>
                </div>
              )}
            </div>
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
              onChange={(e) => setLinkedinUrl(e.target.value)}
            />
          </>
        )}

        {/* Continue Button for LinkedIn & Manual Selection */}
        {(selectedOption === "linkedin" || selectedOption === "manual") && (
          <div className="mt-4 d-flex justify-content-end">
            <button className="btn btn-primary">Continue</button>
          </div>
        )}
      </div>

      {/* Data Privacy Info */}
      <div className="data-privacy mt-4 d-flex align-items-center gap-2">
        <CheckCircle className="text-success" size={20} />
        <p className="text-muted small">
          Data Privacy is our top priority. Your resume will only be used for job matching and will never be shared with third parties.
        </p>
      </div>
    </>
  );
}

export default ImportOptions;
