




// import { useState, useEffect } from "react";
// import { AlertCircle, ChevronRight } from "lucide-react";
// import { CalendarIcon, PlusIcon, Trash2Icon } from "lucide-react";
// import "./UserFormStyle/step3.css";
// import { ReactComponent as UploadResume } from "../icons/uploadResume.svg";
// import { ReactComponent as Note } from "../icons/note.svg";
// import { ReactComponent as CheckmarkIcon } from "../icons/checkmark.svg";
// import { ReactComponent as Arrow } from "../icons/arrow.svg";

// const SkillTag = ({ skill, onRemove }) => (
//   <div className="bg-gray-100 lable-text px-3 py-1 rounded-lg flex items-center space-x-2">
//     <span>{skill}</span>
//     <button onClick={() => onRemove(skill)} className="text-gray-500 hover:lable-text">×</button>
//   </div>
// );

// export default function Experience({ setSelectedStep, formData, updateFormData }) {
//   // Work Experience
//   const [experiences, setExperiences] = useState(
//     formData?.experiences?.length > 0
//       ? formData.experiences
//       : [
//           {
//             jobTitle: "",
//             company: "",
//             location: "",
//             fromDate: "",
//             toDate: "",
//             roleDescription: "",
//             currentlyWorking: false,
//           },
//         ]
//   );

//   // Skills
//   const [skills, setSkills] = useState(formData?.skills || []);
//   const [newSkill, setNewSkill] = useState("");

//   // CV Upload
//   const [uploadedFile, setUploadedFile] = useState(formData?.uploadedFile || null);

//   // Websites
//   const [websiteUrls, setWebsiteUrls] = useState(formData?.websiteUrls || [""]);

//   // Social Network (LinkedIn)
//   const [linkedinUrl, setLinkedinUrl] = useState(formData?.linkedinUrl || "");

//   // Errors
//   const [errors, setErrors] = useState({});

//   // Send data to parent whenever state changes
//   useEffect(() => {
//     if (updateFormData) {
//       updateFormData({
//         experiences,
//         skills,
//         uploadedFile,
//         websiteUrls,
//         linkedinUrl,
//       });
//     }
//   }, [experiences, skills, uploadedFile, websiteUrls, linkedinUrl, updateFormData]);

//   // Work Experience Handlers
//   const handleInputChange = (e, index) => {
//     const { name, value } = e.target;
//     const updatedExperiences = experiences.map((exp, i) =>
//       i === index ? { ...exp, [name]: value } : exp
//     );
//     setExperiences(updatedExperiences);
//   };

//   const handleCurrentlyWorkingChange = (index, checked) => {
//     const updatedExperiences = experiences.map((exp, i) =>
//       i === index ? { ...exp, currentlyWorking: checked, toDate: checked ? "" : exp.toDate } : exp
//     );
//     setExperiences(updatedExperiences);
//   };

//   const addExperience = () => {
//     setExperiences([
//       ...experiences,
//       {
//         jobTitle: "",
//         company: "",
//         location: "",
//         fromDate: "",
//         toDate: "",
//         roleDescription: "",
//         currentlyWorking: false,
//       },
//     ]);
//   };

//   const deleteExperience = (index) => {
//     if (experiences.length === 1) {
//       setErrors({ ...errors, minExperience: "At least one work experience is required" });
//       return;
//     }
//     setExperiences(experiences.filter((_, i) => i !== index));
//     setErrors({ ...errors, minExperience: null });
//   };

//   // Skills Handlers
//   const removeSkill = (skill) => {
//     setSkills(skills.filter((s) => s !== skill));
//   };

//   const addSkill = () => {
//     if (newSkill.trim() && !skills.includes(newSkill)) {
//       setSkills([...skills, newSkill.trim()]);
//       setNewSkill("");
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       addSkill();
//     }
//   };

//   // CV Upload Handler
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       if (file.size > 5 * 1024 * 1024) { // 5MB in bytes
//         setErrors({ ...errors, uploadedFile: "File size must not exceed 5MB" });
//         return;
//       }
//       setUploadedFile({ name: file.name, size: (file.size / 1024).toFixed(1) });
//       setErrors({ ...errors, uploadedFile: null });
//     }
//   };

//   const handleDelete = () => {
//     setUploadedFile(null);
//   };

//   // Website Handlers
//   const handleAddWebsite = () => {
//     setWebsiteUrls([...websiteUrls, ""]);
//   };

//   const handleRemoveWebsite = (index) => {
//     setWebsiteUrls(websiteUrls.filter((_, i) => i !== index));
//   };

//   const handleWebsiteInputChange = (index, value) => {
//     const newUrls = [...websiteUrls];
//     newUrls[index] = value;
//     setWebsiteUrls(newUrls);
//   };

//   // Social Network Handler
//   const handleLinkedinChange = (e) => {
//     setLinkedinUrl(e.target.value);
//   };

//   // Validation
//   const validateForm = () => {
//     const newErrors = {};

//     // At least one work experience
//     if (experiences.length === 0) {
//       newErrors.minExperience = "At least one work experience is required";
//     } else {
//       experiences.forEach((exp, index) => {
//         if (!exp.jobTitle) newErrors[`jobTitle-${index}`] = "Please enter a job title";
//         if (!exp.company) newErrors[`company-${index}`] = "Please enter a company name";
//         if (!exp.location) newErrors[`location-${index}`] = "Please enter a location";
//         if (!exp.fromDate) newErrors[`fromDate-${index}`] = "Please enter a start date";
//         if (!exp.currentlyWorking && !exp.toDate) newErrors[`toDate-${index}`] = "Please enter an end date or check 'I currently work here'";
//         if (!exp.roleDescription) newErrors[`roleDescription-${index}`] = "Please enter a role description";
//       });
//     }

//     // At least 2 skills
//     if (skills.length < 2) {
//       newErrors.skills = "Please add at least 2 skills";
//     }

//     // CV upload (optional but checked for size if present)
//     if (uploadedFile && uploadedFile.size > 5 * 1024) {
//       newErrors.uploadedFile = "File size must not exceed 5MB";
//     }

//     // Website URLs (optional but validated if present)
//     websiteUrls.forEach((url, index) => {
//       if (url && !isValidUrl(url)) {
//         newErrors[`website-${index}`] = "Please enter a valid URL (e.g., https://example.com)";
//       }
//     });

//     // LinkedIn URL (optional but validated if present)
//     if (linkedinUrl && !isValidUrl(linkedinUrl)) {
//       newErrors.linkedinUrl = "Please enter a valid LinkedIn URL (e.g., https://linkedin.com/in/your-profile)";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // URL Validation Helper
//   const isValidUrl = (string) => {
//     try {
//       new URL(string);
//       return true;
//     } catch (_) {
//       return false;
//     }
//   };

//   // Form Submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Step 3 Data:", { experiences, skills, uploadedFile, websiteUrls, linkedinUrl });
//       setSelectedStep(4);
//     } else {
//       const firstErrorField = document.querySelector(".error-message");
//       if (firstErrorField) {
//         firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
//       }
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto">
//       <div className="mb-8">
//         <h1 className="text-2xl font-bold text-gray-900 mb-2">Enter your Experience</h1>
//         <p className="text-gray-600 smText">
//           Tell us about your experience, skills, and education—so we can match you with the best opportunities!
//         </p>
//       </div>

//       <form onSubmit={handleSubmit} id="myinfo" className="border-t border-gray-200 pt-8">
//         {/* Work Experience */}
//         <div className="mb-8">
//           <div className="flex flex-col md:flex-row md:items-start mb-6" id="profile">
//             <h2 className="w-full md:w-1/4 text-lg font-semibold text-gray-800 mb-4 md:mb-0">Work Experience</h2>
//             <div className="w-full md:w-3/4 space-y-4">
//               {experiences.map((exp, index) => (
//                 <div key={index}>
//                   <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-xl font-semibold">Work Experience {index + 1}</h2>
//                     <button
//                       className="text-red-500 flex items-center gap-1"
//                       onClick={() => deleteExperience(index)}
//                       disabled={experiences.length === 1}
//                     >
//                       <Trash2Icon className="h-4 w-4" />
//                       <span>Delete</span>
//                     </button>
//                   </div>
//                   <div className="inputYMargin">
//                     <label htmlFor={`jobTitle-${index}`} className="block text-sm font-medium lable-text mb-1">
//                       Job Title <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       id={`jobTitle-${index}`}
//                       name="jobTitle"
//                       className={`w-full px-4 py-2 border ${errors[`jobTitle-${index}`] ? "border-red-500" : "border-gray-300"} rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                       value={exp.jobTitle}
//                       onChange={(e) => handleInputChange(e, index)}
//                     />
//                     {errors[`jobTitle-${index}`] && (
//                       <div className="error-message text-red-500 text-sm mt-1 flex items-center">
//                         <AlertCircle size={16} className="mr-1" />
//                         {errors[`jobTitle-${index}`]}
//                       </div>
//                     )}
//                   </div>

//                   <div className="inputYMargin">
//                     <label htmlFor={`company-${index}`} className="block text-sm font-medium lable-text mb-1">
//                       Company <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       id={`company-${index}`}
//                       name="company"
//                       className={`w-full px-4 py-2 border ${errors[`company-${index}`] ? "border-red-500" : "border-gray-300"} rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                       value={exp.company}
//                       onChange={(e) => handleInputChange(e, index)}
//                     />
//                     {errors[`company-${index}`] && (
//                       <div className="error-message text-red-500 text-sm mt-1 flex items-center">
//                         <AlertCircle size={16} className="mr-1" />
//                         {errors[`company-${index}`]}
//                       </div>
//                     )}
//                   </div>

//                   <div className="inputYMargin">
//                     <label htmlFor={`location-${index}`} className="block text-sm font-medium lable-text mb-1">
//                       Location <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       id={`location-${index}`}
//                       name="location"
//                       className={`w-full px-4 py-2 border ${errors[`location-${index}`] ? "border-red-500" : "border-gray-300"} rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                       value={exp.location}
//                       onChange={(e) => handleInputChange(e, index)}
//                     />
//                     {errors[`location-${index}`] && (
//                       <div className="error-message text-red-500 text-sm mt-1 flex items-center">
//                         <AlertCircle size={16} className="mr-1" />
//                         {errors[`location-${index}`]}
//                       </div>
//                     )}
//                   </div>

//                   <div className="flex flex-col sm:flex-row sm:items-center sm:items-end gap-2 sm:gap-4">
//                     <div className="flex flex-col w-full sm:w-auto">
//                       <label htmlFor={`fromDate-${index}`} className="text-sm font-medium lable-text mb-1">
//                         From <span className="text-red-500">*</span>
//                       </label>
//                       <div className="relative w-full sm:w-auto">
//                         <input
//                           type="date"
//                           id={`fromDate-${index}`}
//                           name="fromDate"
//                           className={`w-full sm:w-40 px-4 py-2 border ${errors[`fromDate-${index}`] ? "border-red-500" : "border-gray-300"} rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 calendarInput custom-date-input`}
//                           value={exp.fromDate}
//                           onChange={(e) => handleInputChange(e, index)}
//                         />
//                       </div>
//                       {errors[`fromDate-${index}`] && (
//                         <div className="error-message text-red-500 text-sm mt-1 flex items-center">
//                           <AlertCircle size={16} className="mr-1" />
//                           {errors[`fromDate-${index}`]}
//                         </div>
//                       )}
//                     </div>

//                     <div className="flex flex-col w-full sm:w-auto">
//                       <label htmlFor={`toDate-${index}`} className="text-sm font-medium lable-text mb-1">
//                         To <span className="text-red-500">{exp.currentlyWorking ? "" : "*"}</span>
//                       </label>
//                       <div className="relative w-full sm:w-auto">
//                         <input
//                           type="date"
//                           id={`toDate-${index}`}
//                           name="toDate"
//                           className={`w-full sm:w-40 px-4 py-2 border ${errors[`toDate-${index}`] ? "border-red-500" : "border-gray-300"} rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 calendarInput custom-date-input`}
//                           value={exp.toDate}
//                           onChange={(e) => handleInputChange(e, index)}
//                           disabled={exp.currentlyWorking}
//                         />
//                       </div>
//                       {errors[`toDate-${index}`] && (
//                         <div className="error-message text-red-500 text-sm mt-1 flex items-center">
//                           <AlertCircle size={16} className="mr-1" />
//                           {errors[`toDate-${index}`]}
//                         </div>
//                       )}
//                     </div>

//                     <div className="flex flex-col w-full sm:w-auto">
//                       <label className="invisible-text text-sm font-medium lable-text mb-1 invisible sm:visible">
//                         Placeholder
//                       </label>
//                       <div className="flex items-center gap-2">
//                         <input
//                           type="checkbox"
//                           id={`currentlyWorking-${index}`}
//                           className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                           checked={exp.currentlyWorking}
//                           onChange={(e) => handleCurrentlyWorkingChange(index, e.target.checked)}
//                         />
//                         <label htmlFor={`currentlyWorking-${index}`} className="text-sm lable-text">
//                           I currently work here
//                         </label>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="inputYMargin">
//                     <label htmlFor={`roleDescription-${index}`} className="block text-sm font-medium lable-text mb-1">
//                       Role Description <span className="text-red-500">*</span>
//                     </label>
//                     <textarea
//                       id={`roleDescription-${index}`}
//                       name="roleDescription"
//                       rows={6}
//                       className={`w-full px-4 py-2 border ${errors[`roleDescription-${index}`] ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                       value={exp.roleDescription}
//                       onChange={(e) => handleInputChange(e, index)}
//                     />
//                     {errors[`roleDescription-${index}`] && (
//                       <div className="error-message text-red-500 text-sm mt-1 flex items-center">
//                         <AlertCircle size={16} className="mr-1" />
//                         {errors[`roleDescription-${index}`]}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//               {errors.minExperience && (
//                 <div className="error-message text-red-500 text-sm mt-1 flex items-center">
//                   <AlertCircle size={16} className="mr-1" />
//                   {errors.minExperience}
//                 </div>
//               )}

//               <div className="flex justify-center mt-6">
//                 <button
//                   className="flex items-center gap-2 text-blue-600 rounded-full px-3 py-2 btn-add"
//                   onClick={addExperience}
//                   type="button"
//                 >
//                   <PlusIcon className="h-4 w-4" />
//                   <span>Add Another</span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Skills */}
//           <div className="flex flex-col md:flex-row md:items-start mb-6 border-t border-gray-200 pt-8" id="skills">
//             <div className="w-full md:w-1/4 py-4">
//               <h2 className="text-lg font-semibold text-gray-800 md:mb-0">Skills</h2>
//               <p className="text-gray-500 smText">Add at least 2 skills relevant to your experience.</p>
//             </div>

//             <div className="w-full md:w-3/4 space-y-4 mt-2">
//               <label className="block text-sm font-medium lable-text mb-1">
//                 Type or Add Skills <span className="text-red-500">*</span>
//               </label>
//               <div className={`flex flex-wrap gap-2 border ${errors.skills ? "border-red-500" : "border-gray-300"} rounded-lg p-4`}>
//                 {skills.map((skill) => (
//                   <SkillTag key={skill} skill={skill} onRemove={removeSkill} />
//                 ))}
//               </div>
//               {errors.skills && (
//                 <div className="error-message text-red-500 text-sm mt-1 flex items-center">
//                   <AlertCircle size={16} className="mr-1" />
//                   {errors.skills}
//                 </div>
//               )}

//               <div className="mt-3 flex gap-2 border border-gray-300 rounded-lg p-2">
//                 <input
//                   type="text"
//                   value={newSkill}
//                   onChange={(e) => setNewSkill(e.target.value)}
//                   onKeyDown={handleKeyDown}
//                   className="flex-1 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Type a skill and press Enter"
//                 />
//                 <button onClick={addSkill} className="px-3 py-1 rounded-lg text-sm btn-add" type="button">
//                   Add Skill
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* CV/Gradesheet */}
//           <div className="flex flex-col md:flex-row md:items-start mb-6 border-t border-gray-200 pt-8" id="file">
//             <h2 className="text-lg font-semibold text-gray-800 mb-2 w-full md:w-1/4 pt-1">CV/Gradesheet</h2>
//             <div className="w-full md:w-3/4 space-y-4 mt-2">
//               <label className={`block border-2 border-dashed ${errors.uploadedFile ? "border-red-500" : "border-gray-300"} rounded-lg p-6 text-center cursor-pointer hover:bg-gray-100 flex flex-col items-center justify-center space-y-2`}>
//                 <input type="file" className="hidden" onChange={handleFileChange} />
//                 <UploadResume className="font-color" width="24px" height="24px" />
//                 <p className="text-gray-600 text-sm">
//                   Drop file here or <span className="text-blue-500 underline">click to select</span>
//                 </p>
//                 <p className="text-gray-400 text-xs">PDF, DOCX, JPG, and PNG files are allowed (5MB max)</p>
//               </label>
//               {errors.uploadedFile && (
//                 <div className="error-message text-red-500 text-sm mt-1 flex items-center">
//                   <AlertCircle size={16} className="mr-1" />
//                   {errors.uploadedFile}
//                 </div>
//               )}

//               {uploadedFile && (
//                 <div className="flex items-center justify-between mt-4 px-3 border border-gray-200 rounded-lg bg-uploaded">
//                   <div className="flex items-center space-x-3">
//                     <Note className="text-gray-500" width="24px" height="24px" />
//                     <div className="flex flex-col">
//                       <p className="text-gray-800 text-sm font-medium smText mb-1">{uploadedFile.name}</p>
//                       <div className="flex items-center gap-1 text-gray-500 text-xs">
//                         <p className="p-0 m-0">{uploadedFile.size} KB ·</p>
//                         <CheckmarkIcon className="text-green-500" width="12px" height="12px" />
//                         <span className="text-green-500">Uploaded</span>
//                       </div>
//                     </div>
//                   </div>
//                   <button onClick={handleDelete} className="text-gray-500 hover:text-red-500" type="button">
//                     <Trash2Icon className="font-color" width="24px" height="24px" />
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Websites */}
//           <div className="mb-8 border-t border-gray-200 pt-8">
//             <div className="flex flex-col md:flex-row md:items-start mb-6" id="websiteurl">
//               <div className="w-full md:w-1/4">
//                 <h2 className="text-lg font-semibold text-gray-800 md:mb-0">Websites</h2>
//                 <p className="text-gray-500 smText">Add any relevant websites (optional).</p>
//               </div>
//               <div className="w-full md:w-3/4 space-y-4">
//                 {websiteUrls.map((url, index) => (
//                   <div key={index}>
//                     <label htmlFor={`website_${index}`} className="block text-sm text-gray-600 mb-1">
//                       Website {index + 1}
//                     </label>
//                     <div className="flex items-center space-x-2">
//                       <input
//                         type="text"
//                         id={`website_${index}`}
//                         name={`website_${index}`}
//                         value={url}
//                         onChange={(e) => handleWebsiteInputChange(index, e.target.value)}
//                         className={`w-full px-4 py-2 border ${errors[`website-${index}`] ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
//                         placeholder="https://example.com"
//                       />
//                       {websiteUrls.length > 1 && (
//                         <button
//                           type="button"
//                           onClick={() => handleRemoveWebsite(index)}
//                           className="p-2 border border-gray-300 rounded-full text-gray-500 hover:text-red-500 hover:border-red-500 transition-all"
//                         >
//                           <Trash2Icon width="20px" height="20px" />
//                         </button>
//                       )}
//                     </div>
//                     {errors[`website-${index}`] && (
//                       <div className="error-message text-red-500 text-sm mt-1 flex items-center">
//                         <AlertCircle size={16} className="mr-1" />
//                         {errors[`website-${index}`]}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//                 <div className="flex justify-center mt-6">
//                   <button
//                     type="button"
//                     onClick={handleAddWebsite}
//                     className="flex items-center gap-2 text-blue-600 rounded-full px-3 py-2 btn-add"
//                   >
//                     <PlusIcon className="h-4 w-4" />
//                     <span>Add Another</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Social Network URLs */}
//           <div className="mb-8 border-t border-gray-200 pt-8">
//             <div className="flex flex-col md:flex-row md:items-start mb-6" id="socialNetwork">
//               <div className="w-full md:w-1/4">
//                 <h2 className="text-lg font-semibold text-gray-800 md:mb-0">Social Network URLs</h2>
//               </div>
//               <div className="w-full md:w-3/4 space-y-4">
//                 <div>
//                   <label htmlFor="LinkedinUrl" className="block text-sm text-gray-600 mb-1">
//                     LinkedIn Profile (optional)
//                   </label>
//                   <div className="flex items-center space-x-2">
//                     <input
//                       type="text"
//                       id="LinkedinUrl"
//                       name="LinkedinUrl"
//                       value={linkedinUrl}
//                       onChange={handleLinkedinChange}
//                       className={`w-full px-4 py-2 border ${errors.linkedinUrl ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
//                       placeholder="https://linkedin.com/in/your-profile"
//                     />
//                   </div>
//                   {errors.linkedinUrl && (
//                     <div className="error-message text-red-500 text-sm mt-1 flex items-center">
//                       <AlertCircle size={16} className="mr-1" />
//                       {errors.linkedinUrl}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Form Actions */}
//         <div className="flex justify-end space-x-4 border-t border-gray-200 pt-6">
//           <button
//             type="button"
//             className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 btn-back"
//             onClick={() => setSelectedStep(2)}
//           >
//             Back
//           </button>
//           <button
//             type="submit"
//             className="btn-continue d-flex align-items-center gap-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             Save and Continue <Arrow />
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }









































import { useState, useEffect } from "react";
import { AlertCircle, ChevronRight } from "lucide-react";
import { CalendarIcon, PlusIcon, Trash2Icon } from "lucide-react";
import "./UserFormStyle/step3.css";
import { ReactComponent as UploadResume } from "../icons/uploadResume.svg";
import { ReactComponent as Note } from "../icons/note.svg";
import { ReactComponent as CheckmarkIcon } from "../icons/checkmark.svg";
import { ReactComponent as Arrow } from "../icons/arrow.svg";

const SkillTag = ({ skill, onRemove }) => (
    <div className="bg-gray-100 lable-text px-3 py-1 rounded-lg flex items-center space-x-2">
        <span>{skill}</span>
        <button onClick={() => onRemove(skill)} className="text-gray-500 hover:lable-text">×</button>
    </div>
);

export default function Experience({ setSelectedStep, formData, updateFormData }) {
    const [experiences, setExperiences] = useState(
        formData?.experiences?.length > 0
            ? formData.experiences
            : [
                {
                    jobTitle: "",
                    company: "",
                    location: "",
                    fromDate: "",
                    toDate: "",
                    roleDescription: "",
                    currentlyWorking: false,
                },
            ]
    );
    const [skills, setSkills] = useState(formData?.skills || []);
    const [newSkill, setNewSkill] = useState("");
    const [uploadedFile, setUploadedFile] = useState(formData?.uploadedFile || null);
    const [websiteUrls, setWebsiteUrls] = useState(formData?.websiteUrls || [""]);
    const [linkedinUrl, setLinkedinUrl] = useState(formData?.linkedinUrl || "");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (updateFormData) {
            updateFormData({
                experiences,
                skills,
                uploadedFile,
                websiteUrls,
                linkedinUrl,
            });
        }
    }, [experiences, skills, uploadedFile, websiteUrls, linkedinUrl, updateFormData]);

    // Work Experience Handlers
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedExperiences = experiences.map((exp, i) =>
            i === index ? { ...exp, [name]: value } : exp
        );
        setExperiences(updatedExperiences);
    };

    const handleCurrentlyWorkingChange = (index, checked) => {
        const updatedExperiences = experiences.map((exp, i) =>
            i === index ? { ...exp, currentlyWorking: checked, toDate: checked ? "" : exp.toDate } : exp
        );
        setExperiences(updatedExperiences);
    };

    const addExperience = () => {
        setExperiences([
            ...experiences,
            {
                jobTitle: "",
                company: "",
                location: "",
                fromDate: "",
                toDate: "",
                roleDescription: "",
                currentlyWorking: false,
            },
        ]);
    };

    const deleteExperience = (index) => {
        if (experiences.length === 1) {
            setErrors({ ...errors, minExperience: "At least one work experience is required" });
            return;
        }
        setExperiences(experiences.filter((_, i) => i !== index));
        setErrors({ ...errors, minExperience: null });
    };

    // Skills Handlers
    const removeSkill = (skill) => {
        setSkills(skills.filter((s) => s !== skill));
    };

    const addSkill = () => {
        if (newSkill.trim() && !skills.includes(newSkill)) {
            setSkills([...skills, newSkill.trim()]);
            setNewSkill("");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addSkill();
        }
    };

    // CV Upload Handler
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                setErrors({ ...errors, uploadedFile: "File size must not exceed 5MB" });
                return;
            }
            setUploadedFile({ name: file.name, size: (file.size / 1024).toFixed(1) });
            setErrors({ ...errors, uploadedFile: null });
        }
    };

    const handleDelete = () => {
        setUploadedFile(null);
    };

    // Website Handlers
    const handleAddWebsite = () => {
        setWebsiteUrls([...websiteUrls, ""]);
    };

    const handleRemoveWebsite = (index) => {
        setWebsiteUrls(websiteUrls.filter((_, i) => i !== index));
    };

    const handleWebsiteInputChange = (index, value) => {
        const newUrls = [...websiteUrls];
        newUrls[index] = value;
        setWebsiteUrls(newUrls);
    };

    // Social Network Handler
    const handleLinkedinChange = (e) => {
        setLinkedinUrl(e.target.value);
    };

    // Validation
    const validateForm = () => {
        const newErrors = {};

        if (experiences.length === 0) {
            newErrors.minExperience = "At least one work experience is required";
        } else {
            experiences.forEach((exp, index) => {
                if (!exp.jobTitle) newErrors[`jobTitle-${index}`] = "Please enter a job title";
                if (!exp.company) newErrors[`company-${index}`] = "Please enter a company name";
                if (!exp.location) newErrors[`location-${index}`] = "Please enter a location";
                if (!exp.fromDate) newErrors[`fromDate-${index}`] = "Please enter a start date";
                if (!exp.currentlyWorking && !exp.toDate) {
                    newErrors[`toDateOrCurrentlyWorking-${index}`] = "Please enter an end date or check 'I currently work here'";
                }
                if (!exp.roleDescription) newErrors[`roleDescription-${index}`] = "Please enter a role description";
            });
        }

        if (skills.length < 2) {
            newErrors.skills = "Please add at least 2 skills";
        }

        if (uploadedFile && uploadedFile.size > 5 * 1024) {
            newErrors.uploadedFile = "File size must not exceed 5MB";
        }

        websiteUrls.forEach((url, index) => {
            if (url && !isValidUrl(url)) {
                newErrors[`website-${index}`] = "Please enter a valid URL (e.g., https://example.com)";
            }
        });

        if (linkedinUrl && !isValidUrl(linkedinUrl)) {
            newErrors.linkedinUrl = "Please enter a valid LinkedIn URL (e.g., https://linkedin.com/in/your-profile)";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const isValidUrl = (string) => {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Step 3 Data:", { experiences, skills, uploadedFile, websiteUrls, linkedinUrl });
            setSelectedStep(4);
        } else {
            const firstErrorField = document.querySelector(".error-message");
            if (firstErrorField) {
                firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Enter your Experience</h1>
                <p className="text-gray-600 smText">
                    Tell us about your experience, skills, and education—so we can match you with the best opportunities!
                </p>
            </div>

            <form onSubmit={handleSubmit} id="myinfo" className="border-t border-gray-200 pt-8">
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row md:items-start mb-6" id="profile">
                        <h2 className="w-full md:w-1/4 text-lg font-semibold text-gray-800 mb-4 md:mb-0">Work Experience</h2>
                        <div className="w-full md:w-3/4 space-y-4">
                            {experiences.map((exp, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-xl font-semibold">Work Experience {index + 1}</h2>
                                        <button
                                            className="text-red-500 flex items-center gap-1"
                                            onClick={() => deleteExperience(index)}
                                            disabled={experiences.length === 1}
                                        >
                                            <Trash2Icon className="h-4 w-4" />
                                            <span>Delete</span>
                                        </button>
                                    </div>
                                    <div className="inputYMargin">
                                        <label htmlFor={`jobTitle-${index}`} className="block text-sm font-medium lable-text mb-1">
                                            Job Title <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id={`jobTitle-${index}`}
                                            name="jobTitle"
                                            className={`w-full px-4 py-2 border ${errors[`jobTitle-${index}`] ? "border-red-500" : "border-gray-300"} rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                            value={exp.jobTitle}
                                            onChange={(e) => handleInputChange(e, index)}
                                        />
                                        {errors[`jobTitle-${index}`] && (
                                            <div className="error-message text-red-500 text-sm mt-1 flex items-center">
                                                <AlertCircle size={16} className="mr-1" />
                                                {errors[`jobTitle-${index}`]}
                                            </div>
                                        )}
                                    </div>

                                    <div className="inputYMargin">
                                        <label htmlFor={`company-${index}`} className="block text-sm font-medium lable-text mb-1">
                                            Company <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id={`company-${index}`}
                                            name="company"
                                            className={`w-full px-4 py-2 border ${errors[`company-${index}`] ? "border-red-500" : "border-gray-300"} rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                            value={exp.company}
                                            onChange={(e) => handleInputChange(e, index)}
                                        />
                                        {errors[`company-${index}`] && (
                                            <div className="error-message text-red-500 text-sm mt-1 flex items-center">
                                                <AlertCircle size={16} className="mr-1" />
                                                {errors[`company-${index}`]}
                                            </div>
                                        )}
                                    </div>

                                    <div className="inputYMargin">
                                        <label htmlFor={`location-${index}`} className="block text-sm font-medium lable-text mb-1">
                                            Location <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id={`location-${index}`}
                                            name="location"
                                            className={`w-full px-4 py-2 border ${errors[`location-${index}`] ? "border-red-500" : "border-gray-300"} rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                            value={exp.location}
                                            onChange={(e) => handleInputChange(e, index)}
                                        />
                                        {errors[`location-${index}`] && (
                                            <div className="error-message text-red-500 text-sm mt-1 flex items-center">
                                                <AlertCircle size={16} className="mr-1" />
                                                {errors[`location-${index}`]}
                                            </div>
                                        )}
                                    </div>


                                    {/* date section  */}
                                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                                        <div className="flex flex-col from">
                                            <label htmlFor={`fromDate-${index}`} className="text-sm font-medium lable-text mb-1">
                                                From <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="date"
                                                    id={`fromDate-${index}`}
                                                    name="fromDate"
                                                    className={`w-full px-4 py-2 border ${errors[`fromDate-${index}`] ? "border-red-500" : "border-gray-300"} rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 custom-date-input`}
                                                    value={exp.fromDate}
                                                    onChange={(e) => handleInputChange(e, index)}
                                                />
                                            </div>
                                            {errors[`fromDate-${index}`] && (
                                                <div className="error-message text-red-500 text-sm mt-1 flex items-center">
                                                    <AlertCircle size={16} className="mr-1" />
                                                    {errors[`fromDate-${index}`]}
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-col sm:flex-1 toCurrently">
                                            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                                                <div className="flex flex-col to">
                                                    <label htmlFor={`toDate-${index}`} className="text-sm font-medium lable-text mb-1">
                                                        To <span className="text-red-500">{exp.currentlyWorking ? "" : "*"}</span>
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            type="date"
                                                            id={`toDate-${index}`}
                                                            name="toDate"
                                                            className={`w-full px-4 py-2 border ${errors[`toDateOrCurrentlyWorking-${index}`] ? "border-red-500" : "border-gray-300"} rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 custom-date-input`}
                                                            value={exp.toDate}
                                                            onChange={(e) => handleInputChange(e, index)}
                                                            disabled={exp.currentlyWorking}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex flex-col w-full sm:w-48 pt-sm-1">
                                                    <label className="text-sm font-medium lable-text mb-1 invisible">Placeholder</label>
                                                    <div className="flex items-center gap-2" style={{ height: 'auto' }}>
                                                        <input
                                                            type="checkbox"
                                                            id={`currentlyWorking-${index}`}
                                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                            checked={exp.currentlyWorking}
                                                            onChange={(e) => handleCurrentlyWorkingChange(index, e.target.checked)}
                                                        />
                                                        <label htmlFor={`currentlyWorking-${index}`} className="text-sm lable-text">
                                                            I currently work here
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            {errors[`toDateOrCurrentlyWorking-${index}`] && (
                                                <div className="error-message text-red-500 text-sm mt-1 flex items-center w-full">
                                                    <AlertCircle size={16} className="mr-1" />
                                                    {errors[`toDateOrCurrentlyWorking-${index}`]}
                                                </div>
                                            )}
                                        </div>
                                    </div>


                                    <div className="inputYMargin">
                                        <label htmlFor={`roleDescription-${index}`} className="block text-sm font-medium lable-text mb-1">
                                            Role Description <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id={`roleDescription-${index}`}
                                            name="roleDescription"
                                            rows={6}
                                            className={`w-full px-4 py-2 border ${errors[`roleDescription-${index}`] ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                            value={exp.roleDescription}
                                            onChange={(e) => handleInputChange(e, index)}
                                        />
                                        {errors[`roleDescription-${index}`] && (
                                            <div className="error-message text-red-500 text-sm mt-1 flex items-center">
                                                <AlertCircle size={16} className="mr-1" />
                                                {errors[`roleDescription-${index}`]}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {errors.minExperience && (
                                <div className="error-message text-red-500 text-sm mt-1 flex items-center">
                                    <AlertCircle size={16} className="mr-1" />
                                    {errors.minExperience}
                                </div>
                            )}

                            <div className="flex justify-center mt-6">
                                <button
                                    className="flex items-center gap-2 text-blue-600 rounded-full px-3 py-2 btn-add"
                                    onClick={addExperience}
                                    type="button"
                                >
                                    <PlusIcon className="h-4 w-4" />
                                    <span>Add Another</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-col md:flex-row md:items-start mb-6 border-t border-gray-200 pt-8" id="skills">
                        <div className="w-full md:w-1/4 py-4">
                            <h2 className="text-lg font-semibold text-gray-800 md:mb-0">Skills</h2>
                            <p className="text-gray-500 smText">Add at least 2 skills relevant to your experience.</p>
                        </div>

                        <div className="w-full md:w-3/4 space-y-4 mt-2">
                            <label className="block text-sm font-medium lable-text mb-1">
                                Type or Add Skills <span className="text-red-500">*</span>
                            </label>
                            <div className={`flex flex-wrap gap-2 border ${errors.skills ? "border-red-500" : "border-gray-300"} rounded-lg p-4`}>
                                {skills.map((skill) => (
                                    <SkillTag key={skill} skill={skill} onRemove={removeSkill} />
                                ))}
                            </div>
                            {errors.skills && (
                                <div className="error-message text-red-500 text-sm mt-1 flex items-center">
                                    <AlertCircle size={16} className="mr-1" />
                                    {errors.skills}
                                </div>
                            )}

                            <div className="mt-3 flex gap-2 border border-gray-300 rounded-lg p-2">
                                <input
                                    type="text"
                                    value={newSkill}
                                    onChange={(e) => setNewSkill(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="flex-1 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Type a skill and press Enter"
                                />
                                <button onClick={addSkill} className="px-3 py-1 rounded-lg text-sm btn-add" type="button">
                                    Add Skill
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* CV/Gradesheet */}
                    <div className="flex flex-col md:flex-row md:items-start mb-6 border-t border-gray-200 pt-8" id="file">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2 w-full md:w-1/4 pt-1">CV/Gradesheet</h2>
                        <div className="w-full md:w-3/4 space-y-4 mt-2">
                            <label className={`block border-2 border-dashed ${errors.uploadedFile ? "border-red-500" : "border-gray-300"} rounded-lg p-6 text-center cursor-pointer hover:bg-gray-100 flex flex-col items-center justify-center space-y-2`}>
                                <input type="file" className="hidden" onChange={handleFileChange} />
                                <UploadResume className="font-color" width="24px" height="24px" />
                                <p className="text-gray-600 text-sm">
                                    Drop file here or <span className="text-blue-500 underline">click to select</span>
                                </p>
                                <p className="text-gray-400 text-xs">PDF, DOCX, JPG, and PNG files are allowed (5MB max)</p>
                            </label>
                            {errors.uploadedFile && (
                                <div className="error-message text-red-500 text-sm mt-1 flex items-center">
                                    <AlertCircle size={16} className="mr-1" />
                                    {errors.uploadedFile}
                                </div>
                            )}

                            {uploadedFile && (
                                <div className="flex items-center justify-between mt-4 px-3 border border-gray-200 rounded-lg bg-uploaded">
                                    <div className="flex items-center space-x-3">
                                        <Note className="text-gray-500" width="24px" height="24px" />
                                        <div className="flex flex-col">
                                            <p className="text-gray-800 text-sm font-medium smText mb-1">{uploadedFile.name}</p>
                                            <div className="flex items-center gap-1 text-gray-500 text-xs">
                                                <p className="p-0 m-0">{uploadedFile.size} KB ·</p>
                                                <CheckmarkIcon className="text-green-500" width="12px" height="12px" />
                                                <span className="text-green-500">Uploaded</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={handleDelete} className="text-gray-500 hover:text-red-500" type="button">
                                        <Trash2Icon className="font-color" width="24px" height="24px" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Websites */}
                    <div className="mb-8 border-t border-gray-200 pt-8">
                        <div className="flex flex-col md:flex-row md:items-start mb-6" id="websiteurl">
                            <div className="w-full md:w-1/4">
                                <h2 className="text-lg font-semibold text-gray-800 md:mb-0">Websites</h2>
                                <p className="text-gray-500 smText">Add any relevant websites (optional).</p>
                            </div>
                            <div className="w-full md:w-3/4 space-y-4">
                                {websiteUrls.map((url, index) => (
                                    <div key={index}>
                                        <label htmlFor={`website_${index}`} className="block text-sm text-gray-600 mb-1">
                                            Website {index + 1}
                                        </label>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="text"
                                                id={`website_${index}`}
                                                name={`website_${index}`}
                                                value={url}
                                                onChange={(e) => handleWebsiteInputChange(index, e.target.value)}
                                                className={`w-full px-4 py-2 border ${errors[`website-${index}`] ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                                                placeholder="https://example.com"
                                            />
                                            {websiteUrls.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveWebsite(index)}
                                                    className="p-2 border border-gray-300 rounded-full text-gray-500 hover:text-red-500 hover:border-red-500 transition-all"
                                                >
                                                    <Trash2Icon width="20px" height="20px" />
                                                </button>
                                            )}
                                        </div>
                                        {errors[`website-${index}`] && (
                                            <div className="error-message text-red-500 text-sm mt-1 flex items-center">
                                                <AlertCircle size={16} className="mr-1" />
                                                {errors[`website-${index}`]}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <div className="flex justify-center mt-6">
                                    <button
                                        type="button"
                                        onClick={handleAddWebsite}
                                        className="flex items-center gap-2 text-blue-600 rounded-full px-3 py-2 btn-add"
                                    >
                                        <PlusIcon className="h-4 w-4" />
                                        <span>Add Another</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Network URLs */}
                    <div className="mb-8 border-t border-gray-200 pt-8">
                        <div className="flex flex-col md:flex-row md:items-start mb-6" id="socialNetwork">
                            <div className="w-full md:w-1/4">
                                <h2 className="text-lg font-semibold text-gray-800 md:mb-0">Social Network URLs</h2>
                            </div>
                            <div className="w-full md:w-3/4 space-y-4">
                                <div>
                                    <label htmlFor="LinkedinUrl" className="block text-sm text-gray-600 mb-1">
                                        LinkedIn Profile (optional)
                                    </label>
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            id="LinkedinUrl"
                                            name="LinkedinUrl"
                                            value={linkedinUrl}
                                            onChange={handleLinkedinChange}
                                            className={`w-full px-4 py-2 border ${errors.linkedinUrl ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                                            placeholder="https://linkedin.com/in/your-profile"
                                        />
                                    </div>
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
                </div>

                <div className="flex justify-end space-x-4 border-t border-gray-200 pt-6">
                    <button
                        type="button"
                        className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 btn-back"
                        onClick={() => setSelectedStep(2)}
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