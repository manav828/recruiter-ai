import { useState } from "react"
import { ChevronRight } from "lucide-react"
import "./UserFormStyle/MyInformation.css"

export default function ProfileVerificationForm({setSelectedStep}) {
  const [formData, setFormData] = useState({
    fullName: "Harsh Shah",
    jobTitle: "Senior Product Designer",
    phoneNumber: "07728733323",
    linkedinUrl: "www.linkedin.in",
    addressLine1: "San Francisco",
    city: "San Francisco",
    postalCode: "San Francisco",
    state: "San Francisco",
    phoneDeviceType: "",
    countryCode: "IN",
    phoneNumberWithCode: "",
    experienceLevel: "Entry",
    minimumSalary: "$40,000",
    jobType: "Full Time",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Verify your profile information</h1>
        <p className="text-gray-600 smText">
          We have autofilled your information from your resume or LinkedIn profile. Please verify and update if anything
          is missing or incorrect.
        </p>
      </div>

      <form onSubmit={handleSubmit} id="myinfo" className="border-t border-gray-200 pt-8">
        {/* Profile Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-start mb-6" id="profile">
            <h2 className="w-full md:w-1/4 text-lg font-semibold text-gray-800 mb-4 md:mb-0">Profile</h2>
            <div className="w-full md:w-3/4 space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm text-gray-600 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-input border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="jobTitle" className="block text-sm text-gray-600 mb-1">
                  Job Title
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm text-gray-600 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="linkedinUrl" className="block text-sm text-gray-600 mb-1">
                  LinkedIn URL
                </label>
                <input
                  type="text"
                  id="linkedinUrl"
                  name="linkedinUrl"
                  value={formData.linkedinUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="mb-8 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row md:items-start mb-6">
            <h2 className="w-full md:w-1/4 text-lg font-semibold text-gray-800 mb-4 md:mb-0">Address</h2>
            <div className="w-full md:w-3/4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="addressLine1" className="block text-sm text-gray-600 mb-1">
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    id="addressLine1"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm text-gray-600 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="postalCode" className="block text-sm text-gray-600 mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm text-gray-600 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phone Section */}
        <div className="mb-8 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row md:items-start mb-6">
            <h2 className="w-full md:w-1/4 text-lg font-semibold text-gray-800 mb-4 md:mb-0">Phone</h2>
            <div className="w-full md:w-3/4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phoneDeviceType" className="block text-sm text-gray-600 mb-1">
                    Phone Device Type
                  </label>
                  <select
                    id="phoneDeviceType"
                    name="phoneDeviceType"
                    value={formData.phoneDeviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none bg-white"
                  >
                    <option value="">Select One</option>
                    <option value="mobile">Mobile</option>
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                  </select>
                </div>

                <div>
  <label htmlFor="phoneNumberWithCode" className="block text-sm text-gray-600 mb-1">
    Phone Number
  </label>
  <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-indigo-500">
    {/* Country Code Dropdown */}
    <div className="relative">
      <select
        id="countryCode"
        name="countryCode"
        value={formData.countryCode}
        onChange={handleInputChange}
        className="appearance-none  text-gray-700 px-4 py-2 pr-8 rounded-l-md focus:outline-none"
      >
        <option value="+91">🇮🇳 +91</option>
        <option value="+1">🇺🇸 +1</option>
        <option value="+44">🇬🇧 +44</option>
        <option value="+1">🇨🇦 +1</option>
      </select>
      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
        ⌵
      </div>
    </div>

    {/* Phone Number Input */}
    <input
      type="text"
      id="phoneNumberWithCode"
      name="phoneNumberWithCode"
      placeholder="Enter phone number"
      value={formData.phoneNumberWithCode}
      onChange={handleInputChange}
      className="w-full px-4 py-2 border-l border-gray-300 focus:outline-none"
    />
  </div>
</div>

              </div>
            </div>
          </div>
        </div>

        {/* Job Preference Section */}
        <div className="mb-8 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row md:items-start mb-6">
            <h2 className="w-full md:w-1/4 text-lg font-semibold text-gray-800 mb-4 md:mb-0">Job Preference</h2>
            <div className="w-full md:w-3/4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="experienceLevel" className="block text-sm text-gray-600 mb-1">
                    Experience Level
                  </label>
                  <input
                    type="text"
                    id="experienceLevel"
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="minimumSalary" className="block text-sm text-gray-600 mb-1">
                    Minimum Salary
                  </label>
                  <input
                    type="text"
                    id="minimumSalary"
                    name="minimumSalary"
                    value={formData.minimumSalary}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Job Type</label>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="fullTime"
                      name="jobType"
                      value="Full Time"
                      checked={formData.jobType === "Full Time"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label htmlFor="fullTime" className="ml-2 text-sm text-gray-700">
                      Full Time
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="partTime"
                      name="jobType"
                      value="Part Time"
                      checked={formData.jobType === "Part Time"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label htmlFor="partTime" className="ml-2 text-sm text-gray-700">
                      Part Time
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4 border-t border-gray-200 pt-6">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center" onClick={() => setSelectedStep(3)}
          >
            Save and Continue
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  )
}

