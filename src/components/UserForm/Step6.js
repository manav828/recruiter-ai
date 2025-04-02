import React, { useState } from "react";
import { PlusIcon, ArrowRightIcon } from "lucide-react";
import { ReactComponent as Arrow } from "../icons/arrow.svg";
import { ReactComponent as Add } from "../icons/add.svg";



export default function CompanyBlocklist({ setSelectedStep }) {
    const [companyInput, setCompanyInput] = useState("");
    const [blockedCompanies, setBlockedCompanies] = useState([]);

    const handleAddCompany = () => {
        if (!companyInput.trim()) return;

        // Split by commas and trim each company name
        const companies = companyInput
            .split(",")
            .map((company) => company.trim())
            .filter(Boolean);

        setBlockedCompanies([...blockedCompanies, ...companies]);
        setCompanyInput("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAddCompany();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Blocked Companies:", blockedCompanies);
        // Proceed to next step (e.g., API call or navigation)
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h2 className="text-heading font-bold text-gray-900 mb-2">Company Blocklist</h2>
                <p className="text-gray-600 smText">
                    Add the name of companies you do not want to apply to, and we&apos;ll skip them.
                </p>
            </div>

            {/* Add the handleSubmit function to the form */}
            <form onSubmit={handleSubmit} className="border-t border-gray-200 ">
                <div className="">
                    <div className="max-w-3xl pt-4">




                        <div className="space-y-4">
                            <label htmlFor="company-input " className="lable-text">
                                Add a company
                            </label>
                            <div className="flex gap-2">
                                {/* Input field */}
                                <input
                                    id="company-input"
                                    value={companyInput}
                                    onChange={(e) => setCompanyInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Enter company name"
                                    className="flex-1 rounded-full h-10 px-4 border border-gray-300 focus:ring-2 focus:ring-violet-500"
                                />

                                {/* Add Button */}
                                <button
                                    type="button"
                                    onClick={handleAddCompany}
                                    className="h-10 w-14 flex items-center justify-center rounded-full bg-violet-600 hover:bg-violet-700 text-white btn-continue"
                                >
                                    <Add className="h-6 w-6 " />
                                </button>
                            </div>
                            <p className="text-sm text-gray-500">Tip: Comma separate a list of companies to add many at once</p>

                            {/* Display Blocked Companies */}
                            {blockedCompanies.length > 0 && (
                                <div className="mt-6">
                                    <h2 className="text-lg font-medium mb-2">Blocked Companies:</h2>
                                    <ul className="space-y-2">
                                        {blockedCompanies.map((company, index) => (
                                            <li key={index} className="px-4 py-2 bg-gray-100 rounded-lg">
                                                {company}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Buttons Section */}
                        <div className="flex justify-end space-x-4 pt-6 ">
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
                    </div>
                </div>
            </form>
        </div>
    );
}
