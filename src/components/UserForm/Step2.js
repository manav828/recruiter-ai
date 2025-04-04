// import { useState } from "react"
// import { ChevronRight } from "lucide-react"
// import "./UserFormStyle/MyInformation.css"
// import { ReactComponent as Arrow } from "../icons/arrow.svg";


// export default function ProfileVerificationForm({ setSelectedStep }) {
//   const [formData, setFormData] = useState({
//     fullName: "Harsh Shah",
//     jobTitle: "Senior Product Designer",
//     phoneNumber: "07728733323",
//     linkedinUrl: "www.linkedin.in",
//     addressLine1: "San Francisco",
//     city: "San Francisco",
//     postalCode: "San Francisco",
//     state: "San Francisco",
//     phoneDeviceType: "",
//     countryCode: "IN",
//     phoneNumberWithCode: "",
//     experienceLevel: "Entry",
//     minimumSalary: "$40,000",
//     jobType: "Full Time",
//   })

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//     // Handle form submission logic here
//   }

//   return (
//     <div className="max-w-4xl mx-auto">
//       <div className="mb-8">
//         <h1 className="text-2xl font-bold text-gray-900 mb-2">Verify your profile information</h1>
//         <p className="text-gray-600 smText">
//           We have autofilled your information from your resume or LinkedIn profile. Please verify and update if anything
//           is missing or incorrect.
//         </p>
//       </div>

//       <form onSubmit={handleSubmit} id="myinfo" className="border-t border-gray-200 pt-8">
//         {/* Profile Section */}
//         <div className="mb-8">
//           <div className="flex flex-col md:flex-row md:items-start mb-6" id="profile">
//             <h2 className="w-full md:w-1/4 text-lg font-semibold text-gray-800 mb-4 md:mb-0">Profile</h2>
//             <div className="w-full md:w-3/4 space-y-4">
//               <div>
//                 <label htmlFor="fullName" className="block text-sm text-gray-600 mb-1">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="fullName"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border border-input border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="jobTitle" className="block text-sm text-gray-600 mb-1">
//                   Job Title
//                 </label>
//                 <input
//                   type="text"
//                   id="jobTitle"
//                   name="jobTitle"
//                   value={formData.jobTitle}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="phoneNumber" className="block text-sm text-gray-600 mb-1">
//                   Phone Number
//                 </label>
//                 <input
//                   type="text"
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="linkedinUrl" className="block text-sm text-gray-600 mb-1">
//                   LinkedIn URL
//                 </label>
//                 <input
//                   type="text"
//                   id="linkedinUrl"
//                   name="linkedinUrl"
//                   value={formData.linkedinUrl}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Address Section */}
//         <div className="mb-8 border-t border-gray-200 pt-8">
//           <div className="flex flex-col md:flex-row md:items-start mb-6">
//             <h2 className="w-full md:w-1/4 text-lg font-semibold text-gray-800 mb-4 md:mb-0">Address</h2>
//             <div className="w-full md:w-3/4 space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="addressLine1" className="block text-sm text-gray-600 mb-1">
//                     Address Line 1
//                   </label>
//                   <input
//                     type="text"
//                     id="addressLine1"
//                     name="addressLine1"
//                     value={formData.addressLine1}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="city" className="block text-sm text-gray-600 mb-1">
//                     City
//                   </label>
//                   <input
//                     type="text"
//                     id="city"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="postalCode" className="block text-sm text-gray-600 mb-1">
//                     Postal Code
//                   </label>
//                   <input
//                     type="text"
//                     id="postalCode"
//                     name="postalCode"
//                     value={formData.postalCode}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="state" className="block text-sm text-gray-600 mb-1">
//                     State
//                   </label>
//                   <input
//                     type="text"
//                     id="state"
//                     name="state"
//                     value={formData.state}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Phone Section */}
//         <div className="mb-8 border-t border-gray-200 pt-8">
//           <div className="flex flex-col md:flex-row md:items-start mb-6">
//             <h2 className="w-full md:w-1/4 text-lg font-semibold text-gray-800 mb-4 md:mb-0">Phone</h2>
//             <div className="w-full md:w-3/4 space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="phoneDeviceType" className="block text-sm text-gray-600 mb-1">
//                     Phone Device Type
//                   </label>
//                   <select
//                     id="phoneDeviceType"
//                     name="phoneDeviceType"
//                     value={formData.phoneDeviceType}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none bg-white"
//                   >
//                     <option value="">Select One</option>
//                     <option value="mobile">Mobile</option>
//                     <option value="home">Home</option>
//                     <option value="work">Work</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label htmlFor="phoneNumberWithCode" className="block text-sm text-gray-600 mb-1">
//                     Phone Number
//                   </label>
//                   <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-indigo-500">
//                     {/* Country Code Dropdown */}
//                     <div className="relative">
//                       <select
//                         id="countryCode"
//                         name="countryCode"
//                         value={formData.countryCode}
//                         onChange={handleInputChange}
//                         className="appearance-none  lable-text px-4 py-2 pr-8 rounded-l-md focus:outline-none"
//                       >
//                         <option value="+91">🇮🇳 +91</option>
//                         <option value="+1">🇺🇸 +1</option>
//                         <option value="+44">🇬🇧 +44</option>
//                         <option value="+1">🇨🇦 +1</option>
//                       </select>
//                       <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
//                         ⌵
//                       </div>
//                     </div>

//                     {/* Phone Number Input */}
//                     <input
//                       type="text"
//                       id="phoneNumberWithCode"
//                       name="phoneNumberWithCode"
//                       placeholder="Enter phone number"
//                       value={formData.phoneNumberWithCode}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-2 border-l border-gray-300 focus:outline-none"
//                     />
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Job Preference Section */}
//         <div className="mb-8 border-t border-gray-200 pt-8">
//           <div className="flex flex-col md:flex-row md:items-start mb-6">
//             <h2 className="w-full md:w-1/4 text-lg font-semibold text-gray-800 mb-4 md:mb-0">Job Preference</h2>
//             <div className="w-full md:w-3/4 space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="experienceLevel" className="block text-sm text-gray-600 mb-1">
//                     Experience Level
//                   </label>
//                   <input
//                     type="text"
//                     id="experienceLevel"
//                     name="experienceLevel"
//                     value={formData.experienceLevel}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="minimumSalary" className="block text-sm text-gray-600 mb-1">
//                     Minimum Salary
//                   </label>
//                   <input
//                     type="text"
//                     id="minimumSalary"
//                     name="minimumSalary"
//                     value={formData.minimumSalary}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm text-gray-600 mb-2">Job Type</label>
//                 <div className="flex items-center space-x-6">
//                   <div className="flex items-center">
//                     <input
//                       type="radio"
//                       id="fullTime"
//                       name="jobType"
//                       value="Full Time"
//                       checked={formData.jobType === "Full Time"}
//                       onChange={handleInputChange}
//                       className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 custom-radio"
//                     />
//                     <label htmlFor="fullTime" className="ml-2 text-sm lable-text">
//                       Full Time
//                     </label>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       type="radio"
//                       id="partTime"
//                       name="jobType"
//                       value="Part Time"
//                       checked={formData.jobType === "Part Time"}
//                       onChange={handleInputChange}
//                       className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 custom-radio"
//                     />
//                     <label htmlFor="partTime" className="ml-2 text-sm lable-text">
//                       Part Time
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Form Actions */}
//         <div className="flex justify-end space-x-4 border-t border-gray-200 pt-6 ">
//           <button
//             type="button"
//             className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 btn-back"  onClick={() => setSelectedStep(1)}
//           >
//             Back
//           </button>

//           <button
//             className="btn-continue d-flex align-items-center gap-2 border border-gray-300 text-gray-700  focus:outline-none focus:ring-2 focus:ring-indigo-500 btn-continue"
//             onClick={() => setSelectedStep(3)}
//           >
//             Save and Continue <Arrow />
//           </button>
//         </div>

//       </form>
//     </div>
//   )
// }


























// import { useState, useEffect } from "react";
// import { ChevronRight, AlertCircle } from "lucide-react";
// import "./UserFormStyle/MyInformation.css";
// import { ReactComponent as Arrow } from "../icons/arrow.svg";

// export default function ProfileVerificationForm({ setSelectedStep, formData, updateFormData }) {
//   // Initialize form with data from parent or use defaults
//   const [profileData, setProfileData] = useState(formData || {
//     FullName: "",
//     jobTitle: "",
//     phoneNumber: "",
//     linkedinUrl: "",
//     addressLine1: "",
//     city: "",
//     postalCode: "",
//     state: "",
//     phoneDeviceType: "",
//     countryCode: "IN",
//     phoneNumberWithCode: "",
//     experienceLevel: "Entry",
//     minimumSalary: "",
//     jobType: "Full Time",
//   });
  
//   const [errors, setErrors] = useState({});

//   // Update parent's formData whenever our form changes
//   useEffect(() => {
//     if (updateFormData) {
//       updateFormData(profileData);
//     }
//   }, [profileData, updateFormData]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProfileData({
//       ...profileData,
//       [name]: value,
//     });
    
//     // Clear error when field is modified
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: null
//       });
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     // Required fields validation
//     const requiredFields = [
//       'FullName', 'jobTitle', 'phoneNumber',"linkedinUrl", 'addressLine1', 
//       'city', 'postalCode', 'state', 'phoneDeviceType',
//       'phoneNumberWithCode', 'experienceLevel', 'minimumSalary'
//     ];
    
//     requiredFields.forEach(field => {
//       if(field == "FullName"){
//         console.log(profileData[field])
//       }
//       if (!profileData[field] || profileData[field].trim() === "") {
//         newErrors[field] = field+' field is required';
//       }
//     });
    
//     // Phone number validation
//     if (profileData.phoneNumber && !/^\d{10}$/.test(profileData.phoneNumber.replace(/\D/g, ''))) {
//       newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
//     }
    
//     // LinkedIn URL validation (simple check)
//     if (profileData.linkedinUrl && !profileData.linkedinUrl.includes('linkedin')) {
//       newErrors.linkedinUrl = 'Please enter a valid LinkedIn URL';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (validateForm()) {
//       console.log("Form submitted:", profileData);
//       setSelectedStep(3);
//     } else {
//       // Scroll to the first error
//       const firstErrorField = document.querySelector('.error-message');
//       if (firstErrorField) {
//         firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
//       }
//     }
//   };

//   const handleBack = () => {
//     setSelectedStep(1);
//   };

//   return (
//     <div className="max-w-4xl mx-auto">
//       <div className="mb-8">
//         <h1 className="text-2xl font-bold text-gray-900 mb-2">Verify your profile information</h1>
//         <p className="text-gray-600 smText">
//           We have autofilled your information from your resume or LinkedIn profile. Please verify and update if anything
//           is missing or incorrect.
//         </p>
//       </div>

//       <form onSubmit={handleSubmit} id="myinfo" className="border-t border-gray-200 pt-8">
//         {/* Profile Section */}
//         <div className="mb-8">
//           <div className="flex flex-col md:flex-row md:items-start mb-6" id="profile">
//             <h2 className="w-full md:w-1/4 text-lg font-semibold text-gray-800 mb-4 md:mb-0">Profile</h2>
//             <div className="w-full md:w-3/4 space-y-4">
//               <div>
//                 <label htmlFor="fullName" className="block text-sm text-gray-600 mb-1">
//                   Full Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="FullName"
//                   name="FullName"
//                   value={profileData.FullName}
//                   onChange={handleInputChange}
//                   className={`w-full px-4 py-2 border ${errors.FullName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
//                 />
//                 {errors.FullName && (
//                   <div className="error-message text-red-500 text-sm mt-1 flex items-center">
//                     <AlertCircle size={16} className="mr-1" />
//                     {errors.FullName}
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="jobTitle" className="block text-sm text-gray-600 mb-1">
//                   Job Title <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="jobTitle"
//                   name="jobTitle"
//                   value={profileData.jobTitle}
//                   onChange={handleInputChange}
//                   className={`w-full px-4 py-2 border ${errors.jobTitle ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
//                 />
//                 {errors.jobTitle && (
//                   <div className="error-message text-red-500 text-sm mt-1 flex items-center">
//                     <AlertCircle size={16} className="mr-1" />
//                     {errors.jobTitle}
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="phoneNumber" className="block text-sm text-gray-600 mb-1">
//                   Phone Number <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   value={profileData.phoneNumber}
//                   onChange={handleInputChange}
//                   className={`w-full px-4 py-2 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
//                 />
//                 {errors.phoneNumber && (
//                   <div className="error-message text-red-500 text-sm mt-1 flex items-center">
//                     <AlertCircle size={16} className="mr-1" />
//                     {errors.phoneNumber}
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="linkedinUrl" className="block text-sm text-gray-600 mb-1">
//                   LinkedIn URL
//                 </label>
//                 <input
//                   type="text"
//                   id="linkedinUrl"
//                   name="linkedinUrl"
//                   value={profileData.linkedinUrl}
//                   onChange={handleInputChange}
//                   className={`w-full px-4 py-2 border ${errors.linkedinUrl ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
//                 />
//                 {errors.linkedinUrl && (
//                   <div className="error-message text-red-500 text-sm mt-1 flex items-center">
//                     <AlertCircle size={16} className="mr-1" />
//                     {errors.linkedinUrl}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Address Section */}
//         <div className="mb-8 border-t border-gray-200 pt-8">
//           <div className="flex flex-col md:flex-row md:items-start mb-6">
//             <h2 className="w-full md:w-1/4 text-lg font-semibold text-gray-800 mb-4 md:mb-0">Address</h2>
//             <div className="w-full md:w-3/4 space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="addressLine1" className="block text-sm text-gray-600 mb-1">
//                     Address Line 1 <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="addressLine1"
//                     name="addressLine1"
//                     value={profileData.addressLine1}
//                     onChange={handleInputChange}
//                     className={`w-full px-4 py-2 border ${errors.addressLine1 ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
//                   />
//                   {errors.addressLine1 && (
//                     <div className="error-message text-red-500 text-sm mt-1 flex items-center">
//                       <AlertCircle size={16} className="mr-1" />
//                       {errors.addressLine1}
//                     </div>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="city" className="block text-sm text-gray-600 mb-1">
//                     City <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="city"
//                     name="city"
//                     value={profileData.city}
//                     onChange={handleInputChange}
//                     className={`w-full px-4 py-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
//                   />
//                   {errors.city && (
//                     <div className="error-message text-red-500 text-sm mt-1 flex items-center">
//                       <AlertCircle size={16} className="mr-1" />
//                       {errors.city}
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="postalCode" className="block text-sm text-gray-600 mb-1">
//                     Postal Code <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="postalCode"
//                     name="postalCode"
//                     value={profileData.postalCode}
//                     onChange={handleInputChange}
//                     className={`w-full px-4 py-2 border ${errors.postalCode ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
//                   />
//                   {errors.postalCode && (
//                     <div className="error-message text-red-500 text-sm mt-1 flex items-center">
//                       <AlertCircle size={16} className="mr-1" />
//                       {errors.postalCode}
//                     </div>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="state" className="block text-sm text-gray-600 mb-1">
//                     State <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="state"
//                     name="state"
//                     value={profileData.state}
//                     onChange={handleInputChange}
//                     className={`w-full px-4 py-2 border ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
//                   />
//                   {errors.state && (
//                     <div className="error-message text-red-500 text-sm mt-1 flex items-center">
//                       <AlertCircle size={16} className="mr-1" />
//                       {errors.state}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Phone Section */}
//         <div className="mb-8 border-t border-gray-200 pt-8">
//           <div className="flex flex-col md:flex-row md:items-start mb-6">
//             <h2 className="w-full md:w-1/4 text-lg font-semibold text-gray-800 mb-4 md:mb-0">Phone</h2>
//             <div className="w-full md:w-3/4 space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="phoneDeviceType" className="block text-sm text-gray-600 mb-1">
//                     Phone Device Type <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative w-full">
//   <select
//     id="phoneDeviceType"
//     name="phoneDeviceType"
//     value={profileData.phoneDeviceType}
//     onChange={handleInputChange}
//     className={`w-full px-4 py-2 border ${errors.phoneDeviceType ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-8 appearance-none bg-white`}
//   >
//     <option value="">Select One</option>
//     <option value="mobile">Mobile</option>
//     <option value="home">Home</option>
//     <option value="work">Work</option>
//   </select>

//   {/* Custom dropdown icon */}
//   <svg
//     className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//   </svg>
// </div>

//                   {errors.phoneDeviceType && (
//                     <div className="error-message text-red-500 text-sm mt-1 flex items-center">
//                       <AlertCircle size={16} className="mr-1" />
//                       {errors.phoneDeviceType}
//                     </div>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="phoneNumberWithCode" className="block text-sm text-gray-600 mb-1">
//                     Phone Number <span className="text-red-500">*</span>
//                   </label>
//                   <div className={`flex items-center border ${errors.phoneNumberWithCode ? 'border-red-500' : 'border-gray-300'} rounded-md focus-within:ring-2 focus-within:ring-indigo-500`}>
//                     {/* Country Code Dropdown */}
//                     <div className="relative">
//                       <select
//                         id="countryCode"
//                         name="countryCode"
//                         value={profileData.countryCode}
//                         onChange={handleInputChange}
//                         className="appearance-none lable-text px-4 py-2 pr-8 rounded-l-md focus:outline-none"
//                       >
//                         <option value="+91">🇮🇳 +91</option>
//                         <option value="+1">🇺🇸 +1</option>
//                         <option value="+44">🇬🇧 +44</option>
//                         <option value="+1">🇨🇦 +1</option>
//                       </select>
//                       <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
//                         ⌵
//                       </div>
//                     </div>

//                     {/* Phone Number Input */}
//                     <input
//                       type="text"
//                       id="phoneNumberWithCode"
//                       name="phoneNumberWithCode"
//                       placeholder="Enter phone number"
//                       value={profileData.phoneNumberWithCode}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-2 border-l border-gray-300 focus:outline-none"
//                     />
//                   </div>
//                   {errors.phoneNumberWithCode && (
//                     <div className="error-message text-red-500 text-sm mt-1 flex items-center">
//                       <AlertCircle size={16} className="mr-1" />
//                       {errors.phoneNumberWithCode}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Job Preference Section */}
//         <div className="mb-8 border-t border-gray-200 pt-8">
//           <div className="flex flex-col md:flex-row md:items-start mb-6">
//             <h2 className="w-full md:w-1/4 text-lg font-semibold text-gray-800 mb-4 md:mb-0">Job Preference</h2>
//             <div className="w-full md:w-3/4 space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="experienceLevel" className="block text-sm text-gray-600 mb-1">
//                     Experience Level <span className="text-red-500">*</span>
//                   </label>
//                 {/* Experience Level Dropdown */}
// <div className="relative w-full">
//   <select
//     id="experienceLevel"
//     name="experienceLevel"
//     value={profileData.experienceLevel}
//     onChange={handleInputChange}
//     className={`w-full px-4 py-2 border ${errors.experienceLevel ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-8 appearance-none bg-white`}
//   >
//     <option value="Entry">Entry Level</option>
//     <option value="Mid">Mid Level</option>
//     <option value="Senior">Senior Level</option>
//     <option value="Executive">Executive Level</option>
//   </select>
//   {/* Custom dropdown icon */}
//   <svg
//     className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//   </svg>
// </div>
//                   {errors.experienceLevel && (
//                     <div className="error-message text-red-500 text-sm mt-1 flex items-center">
//                       <AlertCircle size={16} className="mr-1" />
//                       {errors.experienceLevel}
//                     </div>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="minimumSalary" className="block text-sm text-gray-600 mb-1">
//                     Minimum Salary <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="minimumSalary"
//                     name="minimumSalary"
//                     value={profileData.minimumSalary}
//                     onChange={handleInputChange}
//                     className={`w-full px-4 py-2 border ${errors.minimumSalary ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
//                     placeholder="e.g. $40,000"
//                   />
//                   {errors.minimumSalary && (
//                     <div className="error-message text-red-500 text-sm mt-1 flex items-center">
//                       <AlertCircle size={16} className="mr-1" />
//                       {errors.minimumSalary}
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm text-gray-600 mb-2">Job Type</label>
//                 <div className="flex items-center space-x-6">
//                   <div className="flex items-center">
//                     <input
//                       type="radio"
//                       id="fullTime"
//                       name="jobType"
//                       value="Full Time"
//                       checked={profileData.jobType === "Full Time"}
//                       onChange={handleInputChange}
//                       className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 custom-radio"
//                     />
//                     <label htmlFor="fullTime" className="ml-2 text-sm lable-text">
//                       Full Time
//                     </label>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       type="radio"
//                       id="partTime"
//                       name="jobType"
//                       value="Part Time"
//                       checked={profileData.jobType === "Part Time"}
//                       onChange={handleInputChange}
//                       className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 custom-radio"
//                     />
//                     <label htmlFor="partTime" className="ml-2 text-sm lable-text">
//                       Part Time
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Form Actions */}
//         <div className="flex justify-end space-x-4 border-t border-gray-200 pt-6 ">
//           <button
//             type="button"
//             className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 btn-back"  
//             onClick={handleBack}
//           >
//             Back
//           </button>

//           <button
//             type="submit"
//             className="btn-continue d-flex align-items-center gap-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             Save and Continue <Arrow />
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }






























import { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";
import "./UserFormStyle/MyInformation.css";
import { ReactComponent as Arrow } from "../icons/arrow.svg";

export default function ProfileVerificationForm({ setSelectedStep, formData, updateFormData }) {
  const [profileData, setProfileData] = useState(formData || {
    FullName: "",
    jobTitle: "",
    phoneNumber: "",
    linkedinUrl: "",
    addressLine1: "",
    city: "",
    postalCode: "",
    state: "",
    phoneDeviceType: "",
    countryCode: "US", // Default to US for this example
    phoneNumberWithCode: "",
    experienceLevel: "Entry",
    minimumSalary: "",
    jobType: "Full Time",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (updateFormData) {
      updateFormData(profileData);
    }
  }, [profileData, updateFormData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Restrict phoneNumber and phoneNumberWithCode to digits only
    if (name === "phoneNumber" || name === "phoneNumberWithCode") {
      if (!/^\d*$/.test(value)) return; // Only allow digits
      if (value.length > 10) return; // Limit to 10 digits
    }

    // Restrict postalCode to digits only (US 5-digit ZIP)
    if (name === "postalCode") {
      if (!/^\d*$/.test(value)) return; // Only allow digits
      if (value.length > 5) return; // Limit to 5 digits
    }

    setProfileData({
      ...profileData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [ 
      { key: "FullName", message: "Please enter your full name" },
      { key: "jobTitle", message: "Please enter your job title" },
      { key: "phoneNumber", message: "Please enter your phone number" },
      { key: "linkedinUrl", message: "Please enter Linkedin URL" },
      { key: "addressLine1", message: "Please enter your address" },
      { key: "city", message: "Please enter your city" },
      { key: "postalCode", message: "Please enter your postal code" },
      { key: "state", message: "Please enter your state" },
      { key: "phoneDeviceType", message: "Please select a phone device type" },
      { key: "phoneNumberWithCode", message: "Please enter your phone number with country code" },
      { key: "experienceLevel", message: "Please select your experience level" },
      { key: "minimumSalary", message: "Please enter your minimum salary" },
    ];

    requiredFields.forEach(({ key, message }) => {
      if (!profileData[key] || profileData[key].trim() === "") {
        newErrors[key] = message;
      }
    });

    // Phone Number validation (exactly 10 digits)
    if (profileData.phoneNumber) {
      if (!/^\d{10}$/.test(profileData.phoneNumber)) {
        newErrors.phoneNumber = "Phone number must be exactly 10 digits";
      }
    }

    // Phone Number with Code validation (exactly 10 digits after country code)
    if (profileData.phoneNumberWithCode) {
      if (!/^\d{10}$/.test(profileData.phoneNumberWithCode)) {
        newErrors.phoneNumberWithCode = "Phone number must be exactly 10 digits";
      }
    }

    // Postal Code validation (exactly 5 digits for US)
    if (profileData.postalCode) {
      if (!/^\d{5}$/.test(profileData.postalCode)) {
        newErrors.postalCode = "Postal code must be exactly 5 digits";
      }
    }

    // LinkedIn URL validation (optional)
    if (profileData.linkedinUrl && !profileData.linkedinUrl.includes("linkedin")) {
      newErrors.linkedinUrl = "Please enter a valid LinkedIn URL (e.g., https://linkedin.com/in/your-profile)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", profileData);
      setSelectedStep(3);
    } else {
      const firstErrorField = document.querySelector(".error-message");
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  const handleBack = () => {
    setSelectedStep(1);
  };

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
                <label htmlFor="FullName" className="block text-sm text-gray-600 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="FullName"
                  name="FullName"
                  value={profileData.FullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border ${errors.FullName ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                />
                {errors.FullName && (
                  <div className="error-message text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.FullName}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="jobTitle" className="block text-sm text-gray-600 mb-1">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={profileData.jobTitle}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border ${errors.jobTitle ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                />
                {errors.jobTitle && (
                  <div className="error-message text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.jobTitle}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm text-gray-600 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={profileData.phoneNumber}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border ${errors.phoneNumber ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="1234567890"
                />
                {errors.phoneNumber && (
                  <div className="error-message text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.phoneNumber}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="linkedinUrl" className="block text-sm text-gray-600 mb-1">
                  LinkedIn URL
                </label>
                <input
                  type="text"
                  id="linkedinUrl"
                  name="linkedinUrl"
                  value={profileData.linkedinUrl}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border ${errors.linkedinUrl ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                />
                {errors.linkedinUrl && (
                  <div className="error-message text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.linkedinUrl}
                  </div>
                )}
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
                    Address Line 1 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="addressLine1"
                    name="addressLine1"
                    value={profileData.addressLine1}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${errors.addressLine1 ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  />
                  {errors.addressLine1 && (
                    <div className="error-message text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.addressLine1}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm text-gray-600 mb-1">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={profileData.city}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${errors.city ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  />
                  {errors.city && (
                    <div className="error-message text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.city}
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="postalCode" className="block text-sm text-gray-600 mb-1">
                    Postal Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={profileData.postalCode}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${errors.postalCode ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    placeholder="12345"
                  />
                  {errors.postalCode && (
                    <div className="error-message text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.postalCode}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm text-gray-600 mb-1">
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={profileData.state}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${errors.state ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  />
                  {errors.state && (
                    <div className="error-message text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.state}
                    </div>
                  )}
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
                    Phone Device Type <span className="text-red-500">*</span>
                  </label>
                  <div className="relative w-full">
                    <select
                      id="phoneDeviceType"
                      name="phoneDeviceType"
                      value={profileData.phoneDeviceType}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border ${errors.phoneDeviceType ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-8 appearance-none bg-white`}
                    >
                      <option value="">Select One</option>
                      <option value="mobile">Mobile</option>
                      <option value="home">Home</option>
                      <option value="work">Work</option>
                    </select>
                    <svg
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {errors.phoneDeviceType && (
                    <div className="error-message text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.phoneDeviceType}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="phoneNumberWithCode" className="block text-sm text-gray-600 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className={`flex items-center border ${errors.phoneNumberWithCode ? "border-red-500" : "border-gray-300"} rounded-md focus-within:ring-2 focus-within:ring-indigo-500`}>
                    <div className="relative">
                      <select
                        id="countryCode"
                        name="countryCode"
                        value={profileData.countryCode}
                        onChange={handleInputChange}
                        className="appearance-none lable-text px-4 py-2 pr-8 rounded-l-md focus:outline-none"
                      >
                        <option value="US">🇺🇸 +1</option> {/* Limited to US for this example */}
                      </select>
                      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">⌵</div>
                    </div>
                    <input
                      type="text"
                      id="phoneNumberWithCode"
                      name="phoneNumberWithCode"
                      placeholder="1234567890"
                      value={profileData.phoneNumberWithCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border-l border-gray-300 focus:outline-none"
                    />
                  </div>
                  {errors.phoneNumberWithCode && (
                    <div className="error-message text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.phoneNumberWithCode}
                    </div>
                  )}
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
                    Experience Level <span className="text-red-500">*</span>
                  </label>
                  <div className="relative w-full">
                    <select
                      id="experienceLevel"
                      name="experienceLevel"
                      value={profileData.experienceLevel}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border ${errors.experienceLevel ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-8 appearance-none bg-white`}
                    >
                      <option value="Entry">Entry Level</option>
                      <option value="Mid">Mid Level</option>
                      <option value="Senior">Senior Level</option>
                      <option value="Executive">Executive Level</option>
                    </select>
                    <svg
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {errors.experienceLevel && (
                    <div className="error-message text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.experienceLevel}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="minimumSalary" className="block text-sm text-gray-600 mb-1">
                    Minimum Salary <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="minimumSalary"
                    name="minimumSalary"
                    value={profileData.minimumSalary}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${errors.minimumSalary ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    placeholder="e.g. $40,000"
                  />
                  {errors.minimumSalary && (
                    <div className="error-message text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.minimumSalary}
                    </div>
                  )}
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
                      checked={profileData.jobType === "Full Time"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 custom-radio"
                    />
                    <label htmlFor="fullTime" className="ml-2 text-sm lable-text">
                      Full Time
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="partTime"
                      name="jobType"
                      value="Part Time"
                      checked={profileData.jobType === "Part Time"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 custom-radio"
                    />
                    <label htmlFor="partTime" className="ml-2 text-sm lable-text">
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
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 btn-back"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            type="submit"
            className="btn-continue d-flex align-items-center gap-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Save and Continue <Arrow />
          </button>
        </div>
      </form>
    </div>
  );
}