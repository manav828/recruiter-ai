
import "./UserFormStyle/sidebar.css";
import CheckmarkIcon from "../icons/checkmark.svg";

const steps = [
  { id: 1, name: "Import Data" },
  { id: 2, name: "My Information" },
  { id: 3, name: "My Experience" },
  { id: 4, name: "Education" },
  { id: 5, name: "Work Eligibility" },
  { id: 6, name: "Self Identify" },
  { id: 7, name: "Review" },
];

function Sidebar({ selectedStep, setSelectedStep }) {
  return (
    <div>
      <h2 className="h4 fw-bold mb-4 text-dark">Jobs Agent</h2>

      <nav>
        {steps.map((step) => (
          <div
            key={step.id}
            className={`d-flex align-items-center py-2 px-3 rounded mb-2 ${
              selectedStep === step.id ? "bg-menu bg-opacity-10" : ""
            }`}
            onClick={() => setSelectedStep(step.id)}
            style={{ cursor: "pointer" }}
          >
            {/* Step Indicator */}
            <div
  className={`d-flex align-items-center justify-content-center rounded-circle me-3 ${
    selectedStep === step.id
      ? "bg-purple text-white" // Selected step → Purple background
      : step.id < selectedStep
      ? "" // Completed step → No background
      : "bg-secondary bg-opacity-25 text-muted" // Future steps → Gray background
  }`}
  style={{ width: "24px", height: "24px", fontSize: "13px" }}
>
  {step.id < selectedStep ? (
    <img src={CheckmarkIcon} alt="Completed" width="24px" height="24px" />
  ) : (
    step.id
  )}
</div>


            {/* Step Name */}
            <span
              className={`small ${
                selectedStep === step.id ? "fw-medium text-dark" : "text-muted"
              }`}
            >
              {step.name}
            </span>

            {/* Right Arrow Icon for the selected step */}
            {selectedStep === step.id && (
              <span className="ms-auto">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-muted"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;