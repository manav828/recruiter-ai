import { useState } from "react";
import { ChevronRight } from "lucide-react";
import "./UserFormStyle/MyInformation.css"; // Import the same CSS file as Step4 for font consistency
import { ReactComponent as Arrow } from "../icons/arrow.svg";



function WorkEligibility({ setSelectedStep }) {
  const [formData, setFormData] = useState({
    authorizedToWork: "yes",
    requireSponsorship: "no",
    livedOutsideUS: "no",
    governmentEmployment: "never",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedStep(6); // Assuming the next step is 6
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-heading font-bold text-gray-900 mb-2">Work Eligibility</h2>
        <p className="text-gray-600 smText">
          To ensure we apply to jobs that match your eligibility, please confirm your work authorization status. This helps us avoid applications that may require sponsorship if you’re not eligible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="border-t border-gray-200 pt-8">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-start mb-6" id="work-authorization">
            <h3 className="w-full md:w-1/4 text-heading font-semibold text-gray-800 mb-4 md:mb-0">
              Work Authorization
            </h3>
            <div className="w-full md:w-3/4 space-y-2">
              <div className="">
                <p className="lable-text mb-3">
                  Are you legally authorized to work in your chosen country?
                </p>
                <label className="mr-6">
                  <input
                    type="radio"
                    name="authorizedToWork"
                    value="yes"
                    checked={formData.authorizedToWork === "yes"}
                    onChange={handleChange}
                    className="mr-4 custom-radio"
                  />
                  Yes
                </label>
                <label className="mr-6">
                  <input
                    type="radio"
                    name="authorizedToWork"
                    value="no"
                    checked={formData.authorizedToWork === "no"}
                    onChange={handleChange}
                    className="mr-4 custom-radio"
                  />
                  No
                </label>
              </div>

              <div className="border-t border-gray-200 py-3">
                <p className="lable-text mb-3">
                  In order to obtain or maintain employment eligibility, will you now or in the future require the company's sponsorship for an immigration-related employment benefit (i.e., a work visa, work permit, etc.)?
                </p>
                <label className="mr-6">
                  <input
                    type="radio"
                    name="requireSponsorship"
                    value="yes"
                    checked={formData.requireSponsorship === "yes"}
                    onChange={handleChange}
                    className="mr-4 custom-radio"
                  />
                  Yes
                </label>
                <label className="mr-6">
                  <input
                    type="radio"
                    name="requireSponsorship"
                    value="no"
                    checked={formData.requireSponsorship === "no"}
                    onChange={handleChange}
                    className="mr-4 custom-radio"
                  />
                  No
                </label>
              </div>

              <div className="border-t border-gray-200 py-3">
                <p className="lable-text mb-3">
                  In the past 7 years, have you lived or were physically located outside of the US for 12 consecutive months or more?
                </p>
                <label className="mr-6">
                  <input
                    type="radio"
                    name="livedOutsideUS"
                    value="yes"
                    checked={formData.livedOutsideUS === "yes"}
                    onChange={handleChange}
                    className="mr-4 custom-radio"
                  />
                  Yes
                </label>
                <label className="mr-6">
                  <input
                    type="radio"
                    name="livedOutsideUS"
                    value="no"
                    checked={formData.livedOutsideUS === "no"}
                    onChange={handleChange}
                    className="mr-4 custom-radio"
                  />
                  No
                </label>
              </div>

              <div className="border-t border-gray-200 py-3">
                <p className="lable-text mb-3">
                  Are you currently or, in the past three years, have you been a direct employee of any government entity?
                </p>
                <label className="mr-6 block mb-2 small-text">
                  <input
                    type="radio"
                    name="governmentEmployment"
                    value="never"
                    checked={formData.governmentEmployment === "never"}
                    onChange={handleChange}
                    className="mr-4 custom-radio"
                  />
                  No, I was NEVER a government employee.
                </label>
                <label className="mr-6 block mb-2 small-text">
                  <input
                    type="radio"
                    name="governmentEmployment"
                    value="former"
                    checked={formData.governmentEmployment === "former"}
                    onChange={handleChange}
                    className="mr-4 custom-radio"
                  />
                  Yes, I am a FORMER government employee.
                </label>
                <label className="mr-6 block small-text">
                  <input
                    type="radio"
                    name="governmentEmployment"
                    value="current"
                    checked={formData.governmentEmployment === "current"}
                    onChange={handleChange}
                    className="mr-4 custom-radio "
                  />
                  Yes, I am a CURRENT government employee.
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Form Actions */}

        <div className="flex justify-end space-x-4 border-t border-gray-200 pt-6 ">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 btn-back"
          >
            Back
          </button>

          <button
            className="btn-continue d-flex align-items-center gap-2 border border-gray-300 text-gray-700  focus:outline-none focus:ring-2 focus:ring-indigo-500 btn-continue"
            onClick={() => setSelectedStep(6)}
          >
            Save and Continue <Arrow />
          </button>
        </div>
      </form>
    </div>
  );
}

export default WorkEligibility;