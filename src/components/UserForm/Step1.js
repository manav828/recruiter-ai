import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faTrash } from "@fortawesome/free-solid-svg-icons";
import { CheckCircle } from "lucide-react";
import "./UserFormStyle/importoption.css";
import { ReactComponent as UploadResume } from "../icons/uploadResume.svg";
import { ReactComponent as UploadMenual } from "../icons/menual.svg";
import { ReactComponent as UploadLinkdin } from "../icons/linkdin.svg";

const options = [
  { id: "upload", name: "Upload Resume", icon: UploadResume },
  { id: "linkedin", name: "Connect LinkedIn", icon: UploadLinkdin },
  { id: "manual", name: "Add Manually", icon: UploadMenual },
];

function ImportOptions({ onFileChange, setSelectedStep }) {
  const [selectedOption, setSelectedOption] = useState("upload");
  const [file, setFile] = useState(null);
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const fileInputRef = useRef(null);

  const handleOptionClick = (id) => {
    setSelectedOption(id);
    setFile(null);
    setLinkedinUrl("");
  };

  const handleFileSelect = (e) => {
    if (e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      onFileChange(selectedFile);
    }
  };

  const handleFileDelete = () => {
    setFile(null);
    fileInputRef.current.value = "";
  };

  return (
    <>
      <h1 className="heading1 fw-bold mb-2">Import your data to get Started</h1>
      <p className="subtext1 text-muted mb-4">
        Choose the most up-to-date and complete source to auto-fill your information.
      </p>

      <div className="row g-3">
        {options.map((option) => (
          <div className="col-md-4 selectCard" key={option.id}>
            <div
              className={`p-4 d-flex flex-column align-items-center justify-content-center h-100 cursor-pointer ${
                selectedOption === option.id ? "import-box-select font-color selected-bg-card" : "import-box"
              }`}
              style={{ cursor: "pointer", maxHeight: "120px", gap: "10px" }}
              onClick={() => handleOptionClick(option.id)}
            >
              <option.icon className="font-color" width="24px" height="24px" />
              <span className="small fw-bold">{option.name}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        {selectedOption === "upload" && (
          <>
            <h2 className="heading1 fw-bold mb-2">Upload your resume</h2>
            <p className="subtext1 text-muted mb-3">
              Please upload one of .pdf, .docx, .png, .jpg, .jpeg
            </p>

            {!file ? (
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
                <FontAwesomeIcon icon={faUpload} className="font-color mb-3" size={40} />
                <p className="mb-1">
                  Drop file here or <span className="font-color">click to select</span>
                </p>
                <p className="text-muted small">PDF, DOCX, JPG, and PNG files are allowed</p>
              </div>
            ) : (
              <div className="uploaded-file p-3 d-flex align-items-center justify-content-between bg-light rounded">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faUpload} className="text-muted me-2" size={20} />
                  <div>
                    <span className="fw-bold">{file.name}</span>
                    <p className="text-success small mb-0">✔ Uploaded</p>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-danger cursor-pointer"
                  onClick={handleFileDelete}
                />
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
              onChange={(e) => setLinkedinUrl(e.target.value)}
            />
          </>
        )}
      </div>

      <div className="data-privacy mt-4 d-flex align-items-center gap-2">
        <CheckCircle className="text-success" size={20} />
        <p className="text-muted small">
          Data Privacy is our top priority. Your resume will only be used for job matching and will never be shared with third parties.
        </p>
      </div>

      <div className="mt-4 d-flex justify-content-end">
        <button className="btn btn-primary" onClick={() => setSelectedStep(2)}>Continue</button>
      </div>
    </>
  );
}

export default ImportOptions;
