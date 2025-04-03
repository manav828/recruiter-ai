import React, { useState } from "react"; // Import React and useState for managing component state
import { ReactComponent as Arrow } from "../icons/arrow.svg"; // Import SVG icon for the "Continue" button
import { ReactComponent as Add } from "../icons/add.svg"; // Import SVG icon for the "Add" button

export default function CompanyBlocklist({ setSelectedStep }) {
    // State to hold the input field value
    const [companyInput, setCompanyInput] = useState("");

    // State to store the list of blocked companies
    const [blockedCompanies, setBlockedCompanies] = useState([]);

    // Function to add a company to the blocklist
    const handleAddCompany = () => {
        if (!companyInput.trim()) return; // Prevent adding empty values

        // Split input by commas, trim whitespace, and filter out empty values
        const companies = companyInput
            .split(",")
            .map((company) => company.trim())
            .filter(Boolean);

        // Update the state with new companies
        setBlockedCompanies([...blockedCompanies, ...companies]);

        // Clear the input field after adding companies
        setCompanyInput("");
    };

    // Function to handle 'Enter' key press for adding a company
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent form submission on Enter
            handleAddCompany();
        }
    };

    // Function to remove a company from the blocklist
    const handleRemoveCompany = (index) => {
        setBlockedCompanies(blockedCompanies.filter((_, i) => i !== index));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
       // console.log("Blocked Companies:", blockedCompanies); // Log blocked companies for debugging
        // Proceed to next step (e.g., API call or navigation)
    };

    return (
        <div className="max-w-4xl mx-auto">
            {/* Section title and description */}
            <div className="mb-8">
                <h2 className="text-heading font-bold text-gray-900 mb-2">Company Blocklist</h2>
                <p className="text-gray-600 smText">
                    Add the name of companies you do not want to apply to, and we&apos;ll skip them.
                </p>
            </div>

            {/* Form for adding companies */}
            <form onSubmit={handleSubmit} className="border-t border-gray-200">
                <div className="max-w-3xl pt-4 space-y-4">
                    {/* Input field label */}
                    <label htmlFor="company-input" className="lable-text">
                        Add a company
                    </label>

                    {/* Input field with button */}
                    <div className="flex gap-2">
                        <input
                            id="company-input"
                            value={companyInput}
                            onChange={(e) => setCompanyInput(e.target.value)}
                            onKeyDown={handleKeyDown} // Handle 'Enter' key press
                            placeholder="Enter company name"
                            className="flex-1 rounded-full h-10 px-4 border border-gray-300 focus:ring-2 focus:ring-violet-500"
                        />

                        {/* Add button */}
                        <button
                            type="button"
                            onClick={handleAddCompany} // Calls function to add company
                            className="h-10 w-14 flex items-center justify-center rounded-full bg-violet-600 hover:bg-violet-700 text-white btn-continue"
                        >
                            <Add className="h-6 w-6" />
                        </button>
                    </div>
                    <p className="text-sm text-gray-500">
                        Tip: Comma separate a list of companies to add many at once
                    </p>

                    {/* Display Blocked Companies as Tags */}
                    {blockedCompanies.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {blockedCompanies.map((company, index) => (
                                <div
                                    key={index}
                                    className="flex items-center addBlockCpyTagBg text-gray-700 smText rounded-full"
                                >
                                    {company}
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveCompany(index)} // Removes a tag
                                        className="ml-2 text-gray-500 hover:text-gray-700 "
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Buttons Section */}
                    <div className="flex justify-end space-x-4 pt-6">
                        {/* Back Button */}
                        <button
                            type="button"
                            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 btn-back"  onClick={() => setSelectedStep(5)}
                        >
                            Back
                        </button>

                        {/* Save and Continue Button */}
                        <button
                            className="btn-continue flex items-center gap-2 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onClick={() => setSelectedStep(7)}
                        >
                            Save and Continue <Arrow />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
