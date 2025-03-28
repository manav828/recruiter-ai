import "../styles/sidebar.css"

// Define the navigation steps with their respective IDs and names
const steps = [
  { id: 1, name: "Import Data" },
  { id: 2, name: "My Information" },
  { id: 3, name: "My Experience" },
  { id: 4, name: "Education" },
  { id: 5, name: "Work Eligibility" },
  { id: 6, name: "Self Identify" },
  { id: 7, name: "Review" },
];

// Sidebar component takes in selectedStep (current active step) 
// and setSelectedStep (function to change active step) as props
function Sidebar({ selectedStep, setSelectedStep }) {
  return (
    <div>
      {/* Sidebar title */}
      <h2 className="h4 fw-bold mb-4 text-dark">Jobs Agent</h2>

      {/* Navigation Menu */}
      <nav>
        {steps.map((step) => (
          <div
            key={step.id}
            className={`d-flex align-items-center py-2 px-3 rounded mb-2 ${
              selectedStep === step.id ? "bg-menu bg-opacity-10" : ""
            }`}
            onClick={() => setSelectedStep(step.id)} // Change the selected step on click
            style={{ cursor: "pointer" }}
          >
            {/* Step Number Circle */}
            <div
              className={`d-flex align-items-center justify-content-center rounded-circle me-3 ${
                selectedStep === step.id ? "bg-purple text-white" : "bg-secondary bg-opacity-25 text-muted"
              }`}
              style={{ width: "24px", height: "24px", fontSize: "12px" }}
            >
              {step.id}
            </div>

            {/* Step Name */}
            <span className={`small ${selectedStep === step.id ? "fw-medium text-dark" : "text-muted"}`}>
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
