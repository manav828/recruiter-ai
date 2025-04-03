// import { useState } from "react"
// import { ChevronRight } from "lucide-react"
// import "./UserFormStyle/MyInformation.css"
// import { CalendarIcon, PlusIcon, Trash2Icon } from "lucide-react"
// import "./UserFormStyle/step3.css";

// export default function Experience() {
//     const [currentlyWorking, setCurrentlyWorking] = useState(false)
//     const [formData, setFormData] = useState({
//         fullName: "Harsh Shah",
//         jobTitle: "Senior Product Designer",
//         phoneNumber: "07728733323",
//         linkedinUrl: "www.linkedin.in",
//         addressLine1: "San Francisco",
//         city: "San Francisco",
//         postalCode: "San Francisco",
//         state: "San Francisco",
//         phoneDeviceType: "",
//         countryCode: "IN",
//         phoneNumberWithCode: "",
//         experienceLevel: "Entry",
//         minimumSalary: "$40,000",
//         jobType: "Full Time",
//     })

//     const handleInputChange = (e) => {
//         const { name, value } = e.target
//         setFormData({
//             ...formData,
//             [name]: value,
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log("Form submitted:", formData)
//         // Handle form submission logic here
//     }

//     return (
//         <div className="max-w-4xl mx-auto">
//             <div className="mb-8">
//                 <h1 className="text-2xl font-bold text-gray-900 mb-2">Enter your Experience</h1>
//                 <p className="text-gray-600">
//                     Tell us about your experience, skill, and education-so we can match you with the best opportunities!
//                 </p>
//             </div>

//             <form onSubmit={handleSubmit} id="myinfo" className="border-t border-gray-200 pt-8">
//                 {/* Profile Section */}
//                 <div className="mb-8">
//                     <div className="flex flex-col md:flex-row md:items-start mb-6" id="profile">
//                         <h2 className="w-full md:w-1/4 text-lg font-semibold text-gray-800 mb-4 md:mb-0">Work Experience</h2>
//                         <div className="w-full md:w-3/4 space-y-4">
//                             <div className="flex justify-between items-center mb-6">
//                                 <h2 className="text-xl font-semibold">Work Experience </h2>
//                                 <button className="text-red-500 flex items-center gap-1">
//                                     <Trash2Icon className="h-4 w-4" />
//                                     <span>Delete</span>
//                                 </button>
//                             </div>
//                             <div className="inputYMargin">
//                                 <label htmlFor="jobTitle" className="block text-sm font-medium lable-text mb-1">
//                                     Job Title
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="jobTitle"
//                                     className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                     defaultValue="Harsh Shah"
//                                 />
//                             </div>

//                             <div className="inputYMargin">
//                                 <label htmlFor="company" className="block text-sm font-medium lable-text mb-1">
//                                     Company
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="company"
//                                     className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                     defaultValue="Senior Product Designer"
//                                 />
//                             </div>

//                             <div className="inputYMargin">
//                                 <label htmlFor="location" className="block text-sm font-medium lable-text mb-1">
//                                     Location
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="location"
//                                     className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                     defaultValue="07128733323"
//                                 />
//                             </div>

//                             <div className="flex items-center items-end gap-4">
//                                 <div className="flex flex-col item-center">
//                                     <label htmlFor="fromDate" className="text-sm font-medium lable-text mb-1">
//                                         From
//                                     </label>
//                                     <div className="relative">
//                                         <input
//                                             type="text"
//                                             id="fromDate"
//                                             className="w-40 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 calendarInput"
//                                             defaultValue="05/2023"
//                                         />
//                                         <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
//                                     </div>
//                                 </div>

//                                 <div className="flex flex-col">
//                                     <label htmlFor="toDate" className="text-sm font-medium lable-text mb-1">
//                                         To
//                                     </label>
//                                     <div className="relative">
//                                         <input
//                                             type="text"
//                                             id="toDate"
//                                             className="w-40 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 calendarInput"
//                                             defaultValue="03/2024"
//                                             disabled={currentlyWorking}
//                                         />
//                                         <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
//                                     </div>
//                                 </div>

//                                 <div className="flex flex-col">
//                                     <label className="text-sm font-medium lable-text mb-1 invisible">
//                                         Placeholder
//                                     </label>
//                                     <div className="flex items-center gap-2">
//                                         <input
//                                             type="checkbox"
//                                             id="currentlyWorking"
//                                             className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                                             checked={currentlyWorking}
//                                             onChange={(e) => setCurrentlyWorking(e.target.checked)}
//                                         />
//                                         <label htmlFor="currentlyWorking" className="text-sm lable-text">
//                                             I currently work here
//                                         </label>
//                                     </div>
//                                 </div>
//                             </div>


//                             <div className="inputYMargin">
//                                 <label htmlFor="roleDescription" className="block text-sm font-medium lable-text mb-1">
//                                     Role Description
//                                 </label>
//                                 <textarea
//                                     id="roleDescription"
//                                     rows={6}
//                                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                     defaultValue={`Drove increased adoption of`}
//                                 />
//                             </div>

//                             <div className="flex justify-center mt-6">
//                                 <button className="flex items-center gap-2 text-blue-600 border border-blue-600 rounded-full px-4 py-2 hover:bg-blue-50 transition-colors">
//                                     <PlusIcon className="h-4 w-4" />
//                                     <span>Add Another</span>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>




//                 {/* Form Actions */}
//                 <div className="flex justify-end space-x-4 border-t border-gray-200 pt-6">
//                     <button
//                         type="button"
//                         className="px-6 py-2 border border-gray-300 rounded-md lable-text hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     >
//                         Back
//                     </button>
//                     <button
//                         type="submit"
//                         className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center"
//                     >
//                         Save and Continue
//                         <ChevronRight className="ml-2 h-4 w-4" />
//                     </button>
//                 </div>
//             </form >
//         </div >
//     )
// }











import { useState, useRef } from "react"
import { ChevronRight } from "lucide-react"
// import "./UserFormStyle/MyInformation.css"
import { CalendarIcon, PlusIcon, Trash2Icon } from "lucide-react"
import "./UserFormStyle/step3.css";
import { ReactComponent as UploadResume } from "../icons/uploadResume.svg";
import { ReactComponent as Note } from "../icons/note.svg";
import { ReactComponent as CheckmarkIcon } from "../icons/checkmark.svg";
import { ReactComponent as Arrow } from "../icons/arrow.svg";



const SkillTag = ({ skill, onRemove }) => (
    <div className="bg-gray-100 lable-text px-3 py-1 rounded-lg flex items-center space-x-2">
        <span>{skill}</span>
        <button onClick={() => onRemove(skill)} className="text-gray-500 hover:lable-text">&times;</button>
    </div>
);

export default function Experience({ setSelectedStep }) {

    // for tags
    const [skills, setSkills] = useState([
        "User Experience (UX)",
        "User Interface Design (UI)",
        "User Flows",
        "Animation",
        "Branding",
        "Wireframing",
        "User Feedback",
        "Product Management",
    ]);
    const [newSkill, setNewSkill] = useState("");

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


    // for add work exp
    const [currentlyWorking, setCurrentlyWorking] = useState(false);
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
    });

    const [experiences, setExperiences] = useState([
        {
            jobTitle: "Harsh Shah",
            company: "Senior Product Designer",
            location: "07128733323",
            fromDate: "05/2023",
            toDate: "03/2024",
            roleDescription: "Drove increased adoption of",
            currentlyWorking: false,
        },
    ]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedExperiences = experiences.map((exp, i) =>
            i === index ? { ...exp, [name]: value } : exp
        );
        setExperiences(updatedExperiences);
    };

    const handleCurrentlyWorkingChange = (index, checked) => {
        const updatedExperiences = experiences.map((exp, i) =>
            i === index ? { ...exp, currentlyWorking: checked } : exp
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
        setExperiences(experiences.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", experiences);
        // Handle form submission logic here
    };


    // for file upload

    const [uploadedFile, setUploadedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedFile({ name: file.name, size: (file.size / 1024).toFixed(1) });
        }
    };

    const handleDelete = () => {
        setUploadedFile(null);
    };



    // for website url -------

    const [websiteUrls, setWebsiteUrls] = useState([""]);

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



    // calander
    // Handle date input change for "From" and "To" fields
    const handleCalInputChange = (e, index) => {
        const { name, value } = e.target;
        let formattedValue = value;

        // If the field is a date input, format the value as MM/YYYY
        if (name === "fromDate" || name === "toDate") {
            if (value) {
                const date = new Date(value);
                const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month (0-11) and add 1, pad with 0
                const year = date.getFullYear();
                formattedValue = `${month}/${year}`;
            } else {
                formattedValue = "";
            }
        }

        const updatedExperiences = experiences.map((exp, i) =>
            i === index ? { ...exp, [name]: formattedValue } : exp
        );
        setExperiences(updatedExperiences);
    };



    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Enter your Experience</h1>
                <p className="text-gray-600 smText">
                    Tell us about your experience, skill, and education-so we can match you with the best opportunities!
                </p>
            </div>

            <form onSubmit={handleSubmit} id="myinfo" className="border-t border-gray-200 pt-8">
                {/* Profile Section */}
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row md:items-start mb-6" id="profile">
                        <h2 className="w-full md:w-1/4 text-lg font-semibold text-gray-800 mb-4 md:mb-0">Work Experience</h2>
                        <div className="w-full md:w-3/4 space-y-4">
                            {experiences.map((exp, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-xl font-semibold">Work Experience {index + 1} </h2>
                                        <button
                                            className="text-red-500 flex items-center gap-1"
                                            onClick={() => deleteExperience(index)}
                                        >
                                            <Trash2Icon className="h-4 w-4" />
                                            <span>Delete</span>
                                        </button>
                                    </div>
                                    <div className="inputYMargin">
                                        <label htmlFor={`jobTitle-${index}`} className="block text-sm font-medium lable-text mb-1">
                                            Job Title
                                        </label>
                                        <input
                                            type="text"
                                            id={`jobTitle-${index}`}
                                            name="jobTitle"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={exp.jobTitle}
                                            onChange={(e) => handleInputChange(e, index)}
                                        />
                                    </div>

                                    <div className="inputYMargin">
                                        <label htmlFor={`company-${index}`} className="block text-sm font-medium lable-text mb-1">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            id={`company-${index}`}
                                            name="company"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={exp.company}
                                            onChange={(e) => handleInputChange(e, index)}
                                        />
                                    </div>

                                    <div className="inputYMargin">
                                        <label htmlFor={`location-${index}`} className="block text-sm font-medium lable-text mb-1">
                                            Location
                                        </label>
                                        <input
                                            type="text"
                                            id={`location-${index}`}
                                            name="location"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={exp.location}
                                            onChange={(e) => handleInputChange(e, index)}
                                        />
                                    </div>

                                    {/* <div className="flex flex-col sm:flex-row sm:items-center sm:items-end gap-4">
                                        <div className="flex flex-col  w-full sm:w-auto">
                                            <label htmlFor={`fromDate-${index}`} className="text-sm font-medium lable-text mb-1">
                                                From
                                            </label>
                                            <div className="relative w-full sm:w-auto">
                                                <input
                                                    type="text"
                                                    id={`fromDate-${index}`}
                                                    name="fromDate"
                                                    className="w-full sm:w-40 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 calendarInput"
                                                    value={exp.fromDate}
                                                    onChange={(e) => handleInputChange(e, index)}
                                                />
                                                <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                                            </div>
                                        </div>

                                        <div className="flex flex-col  w-full sm:w-auto">
                                            <label htmlFor={`toDate-${index}`} className="text-sm font-medium lable-text mb-1">
                                                To
                                            </label>
                                            <div className="relative w-full sm:w-auto">
                                                <input
                                                    type="text"
                                                    id={`toDate-${index}`}
                                                    name="toDate"
                                                    className="w-full sm:w-40 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 calendarInput"
                                                    value={exp.toDate}
                                                    disabled={exp.currentlyWorking}
                                                    onChange={(e) => handleInputChange(e, index)}
                                                />
                                                <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                                            </div>
                                        </div>

                                        <div className="flex flex-col  w-full sm:w-auto">
                                            <label className="invisible-text text-sm font-medium lable-text mb-1 invisible sm:visible">
                                                Placeholder
                                            </label>
                                            <div className="flex items-center gap-2">
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
                                    </div> */}
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:items-end gap-2 sm:gap-4">
                                        <div className="flex flex-col w-full sm:w-auto">
                                            <label htmlFor={`fromDate-${index}`} className="text-sm font-medium lable-text mb-1">
                                                From
                                            </label>
                                            <div className="relative w-full sm:w-auto">
                                                <input
                                                    type="date"
                                                    id={`fromDate-${index}`}
                                                    name="fromDate"
                                                    className="w-full sm:w-40 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 calendarInput custom-date-input"
                                                    value={exp.fromDate ? `${exp.fromDate.split("/")[1]}-${exp.fromDate.split("/")[0]}-01` : ""}
                                                    onChange={(e) => handleInputChange(e, index)}
                                                />
                                                {/* <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" /> */}
                                            </div>
                                        </div>

                                        <div className="flex flex-col w-full sm:w-auto">
                                            <label htmlFor={`toDate-${index}`} className="text-sm font-medium lable-text mb-1">
                                                To
                                            </label>
                                            <div className="relative w-full sm:w-auto">
                                                <input
                                                    type="date"
                                                    id={`toDate-${index}`}
                                                    name="toDate"
                                                    className="w-full sm:w-40 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 calendarInput custom-date-input"
                                                    value={exp.toDate ? `${exp.toDate.split("/")[1]}-${exp.toDate.split("/")[0]}-01` : ""}
                                                    onChange={(e) => handleInputChange(e, index)}
                                                    disabled={exp.currentlyWorking}
                                                />
                                                {/* <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" /> */}
                                            </div>
                                        </div>

                                        <div className="flex flex-col w-full sm:w-auto">
                                            <label className="invisible-text text-sm font-medium lable-text mb-1 invisible sm:visible">
                                                Placeholder
                                            </label>
                                            <div className="flex items-center gap-2">
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


                                    <div className="inputYMargin">
                                        <label htmlFor={`roleDescription-${index}`} className="block text-sm font-medium lable-text mb-1">
                                            Role Description
                                        </label>
                                        <textarea
                                            id={`roleDescription-${index}`}
                                            name="roleDescription"
                                            rows={6}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={exp.roleDescription}
                                            onChange={(e) => handleInputChange(e, index)}
                                        />
                                    </div>
                                </div>
                            ))}

                            <div className="flex justify-center mt-6">
                                <button
                                    className="flex items-center gap-2 text-blue-600  rounded-full px-3 py-2 btn-add"
                                    onClick={addExperience}
                                >
                                    <PlusIcon className="h-4 w-4" />
                                    <span>Add Another</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start mb-6 border-t border-gray-200 pt-8" id="skills">
                        <div className="w-full md:w-1/4 py-4">
                            <h2 className="text-lg font-semibold text-gray-800 md:mb-0">Skills</h2>
                            <p className="text-gray-500 smText">
                                Based on your resume, suggested skills are displayed below
                            </p>
                        </div>

                        <div className="w-full md:w-3/4 space-y-4  mt-2">

                            <label className="block text-sm font-medium lable-text mb-1 ">
                                Type or Add Skills
                            </label>
                            {/* Moved the text outside the box */}

                            <div className="flex flex-wrap gap-2 border border-gray-300 rounded-lg p-4">
                                {skills.map((skill) => (
                                    <SkillTag key={skill} skill={skill} onRemove={removeSkill} />
                                ))}
                            </div>

                            {/* Input field and button container */}
                            <div className="mt-3 flex gap-2 border border-gray-300 rounded-lg p-2">
                                <input
                                    type="text"
                                    value={newSkill}
                                    onChange={(e) => setNewSkill(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="flex-1 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Type a skill and press Enter"
                                />
                                <button
                                    onClick={addSkill}
                                    className="px-3 py-1 rounded-lg text-sm  btn-add"
                                >
                                    Add Skill
                                </button>
                            </div>
                        </div>
                    </div>




                    {/* upload cv section */}
                    <div className="flex flex-col md:flex-row md:items-start mb-6 border-t border-gray-200 pt-8" id="file">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2 w-full md:w-1/4 pt-1">CV/Gradesheet</h2>


                        <div className="w-full md:w-3/4 space-y-4  mt-2">
                            {/* Upload Box */}
                            <label className="block border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-100 flex flex-col items-center justify-center space-y-2">
                                <input type="file" className="hidden" onChange={handleFileChange} />

                                <UploadResume className="font-color" width="24px" height="24px" />

                                <p className="text-gray-600 text-sm">
                                    Drop file here or <span className="text-blue-500 underline">click to select</span>
                                </p>

                                <p className="text-gray-400 text-xs">
                                    PDF, DOCX, JPG and PNG files are allowed (5MB max)
                                </p>
                            </label>


                            {/* Uploaded File */}
                            {uploadedFile && (
                                <div className="flex items-center justify-between mt-4 px-3 border border-gray-200 rounded-lg bg-uploaded">
                                    {/* Left Section: File Icon + Details */}
                                    <div className="flex items-center space-x-3">
                                        {/* File Icon */}
                                        <Note className="text-gray-500" width="24px" height="24px" />

                                        {/* File Details */}
                                        <div className="flex flex-col">
  {/* File Name */}
  <p className="text-gray-800 text-sm font-medium smText mb-1 ">{uploadedFile.name}</p>

  {/* File Size, Icon, and Uploaded Text aligned properly */}
  <div className="flex items-center gap-1 text-gray-500 text-xs">
    <p className="p-0 m-0">{uploadedFile.size} KB ·</p>
    <CheckmarkIcon className="text-green-500" width="12px" height="12px" />
    <span className="text-green-500">Uploaded</span>
  </div>
</div>

                                    </div>

                                    {/* Right Section: Delete Button */}
                                    <button onClick={handleDelete} className="text-gray-500 hover:text-red-500">
                                        <Trash2Icon className="font-color" width="24px" height="24px" />
                                    </button>
                                </div>

                            )}
                        </div>

                    </div>

                    {/* add website url section */}
                    <div className="mb-8 border-t border-gray-200 pt-8">
                        <div className="flex flex-col md:flex-row md:items-start mb-6" id="websiteurl">
                            <div className="w-full md:w-1/4">
                                <h2 className="text-lg font-semibold text-gray-800 md:mb-0">Websites</h2>
                                <p className="text-gray-500 smText">Add any relevant websites.</p>
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
                                                className="w-full px-4 py-2 border border-input border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                placeholder="URL"
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
                                    </div>
                                ))}

                                <div className="flex justify-center mt-6">
                                    <button
                                        type="button"
                                        onClick={handleAddWebsite}
                                        className="flex items-center gap-2 text-blue-600  rounded-full px-3 py-2 btn-add"
                                    >
                                        <PlusIcon className="h-4 w-4" />
                                        <span>Add Another</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* add Social Network URL */}
                    <div className="mb-8 border-t border-gray-200 pt-8">
                        <div className="flex flex-col md:flex-row md:items-start mb-6" id="socialNetwork">
                            <div className="w-full md:w-1/4">
                                <h2 className="text-lg font-semibold text-gray-800 md:mb-0">Social Network URLs</h2>

                            </div>

                            <div className="w-full md:w-3/4 space-y-4">

                                <div >
                                    <label htmlFor="" className="block text-sm text-gray-600 mb-1">
                                        Please provide a link to your LinkedIn profile:
                                    </label>
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            id="LinkedinUrl"
                                            name="LinkedinUrl"

                                            className="w-full px-4 py-2 border border-input border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Linkedin URL"
                                        />

                                    </div>
                                </div>



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
                        onClick={() => setSelectedStep(4)}
                    >
                        Save and Continue <Arrow />
                    </button>
                </div>
            </form>
        </div>
    );
}