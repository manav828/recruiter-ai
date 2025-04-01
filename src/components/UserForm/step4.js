import { useState } from "react";
import { ChevronRight } from "lucide-react";
import "./UserFormStyle/MyInformation.css";
import { CalendarIcon, PlusIcon, Trash2Icon } from "lucide-react";

export default function Step4() {

    // for school section
    const [educationItems, setEducationItems] = useState([
        {
            school: "",
            degree: "",
            fieldOfStudy: "",
            gpa: "",
            fromDate: "",
            toDate: "",
        },
    ]);

    const handleAddEducation = () => {
        setEducationItems([
            ...educationItems,
            {
                school: "",
                degree: "",
                fieldOfStudy: "",
                gpa: "",
                fromDate: "",
                toDate: "",
            },
        ]);
    };

    const handleDeleteEducation = (index) => {
        const updatedItems = educationItems.filter((_, i) => i !== index);
        setEducationItems(updatedItems);
    };



    //   for radio
    const [isStudent, setIsStudent] = useState(true);
    const [hasExperience, setHasExperience] = useState(true);

    const handleStudentChange = (event) => {
        setIsStudent(event.target.value === 'yes');
    };

    const handleExperienceChange = (event) => {
        setHasExperience(event.target.value === 'yes');
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Education</h1>
                <p className="text-gray-600 smText">
                    Tell us about your work experience, skills, and education—so we can match you with the best opportunities!
                </p>
            </div>

            <form id="myinfo" className="border-t border-gray-200 pt-8">
                {/* Profile Section */}
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row md:items-start mb-6" id="education">
                        <h2 className="w-full md:w-1/4 text-lg font-semibold text-gray-800 mb-4 md:mb-0">Education</h2>
                        <div className="w-full md:w-3/4 space-y-4">
                            {educationItems.map((education, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-xl font-semibold">Education {index + 1}</h2>
                                        <button
                                            type="button"
                                            className="text-red-500 flex items-center gap-1"
                                            onClick={() => handleDeleteEducation(index)}
                                        >
                                            <Trash2Icon className="h-4 w-4" />
                                            <span>Delete</span>
                                        </button>
                                    </div>

                                    <div className="inputYMargin">
                                        <label htmlFor={`school-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                                            School or University
                                        </label>
                                        <input
                                            type="text"
                                            id={`school-${index}`}
                                            name="school"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder=""
                                            value={education.school}
                                            onChange={(e) => {
                                                const updatedItems = [...educationItems];
                                                updatedItems[index].school = e.target.value;
                                                setEducationItems(updatedItems);
                                            }}
                                        />
                                    </div>

                                    <div className="inputYMargin">
                                        <label htmlFor={`degree-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                                            Degree
                                        </label>
                                        <input
                                            type="text"
                                            id={`degree-${index}`}
                                            name="degree"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Select One"
                                            value={education.degree}
                                            onChange={(e) => {
                                                const updatedItems = [...educationItems];
                                                updatedItems[index].degree = e.target.value;
                                                setEducationItems(updatedItems);
                                            }}
                                        />
                                    </div>

                                    <div className="inputYMargin">
                                        <label htmlFor={`fieldOfStudy-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                                            Field of Study
                                        </label>
                                        <input
                                            type="text"
                                            id={`fieldOfStudy-${index}`}
                                            name="fieldOfStudy"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={education.fieldOfStudy}
                                            onChange={(e) => {
                                                const updatedItems = [...educationItems];
                                                updatedItems[index].fieldOfStudy = e.target.value;
                                                setEducationItems(updatedItems);
                                            }}
                                        />
                                    </div>

                                    <div className="inputYMargin w-full md:w-1/2">
                                        <label htmlFor={`gpa-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                                            Overall Result (GPA)
                                        </label>
                                        <input
                                            type="text"
                                            id={`gpa-${index}`}
                                            name="gpa"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={education.gpa}
                                            onChange={(e) => {
                                                const updatedItems = [...educationItems];
                                                updatedItems[index].gpa = e.target.value;
                                                setEducationItems(updatedItems);
                                            }}
                                        />
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center sm:items-end gap-4">
                                        <div className="flex flex-col w-full sm:w-auto">
                                            <label htmlFor={`fromDate-${index}`} className="text-sm font-medium text-gray-700 mb-1">
                                                From
                                            </label>
                                            <div className="relative w-full sm:w-auto">
                                                <input
                                                    type="text"
                                                    id={`fromDate-${index}`}
                                                    name="fromDate"
                                                    className="w-full sm:w-50 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                                                    value={education.fromDate}
                                                    onChange={(e) => {
                                                        const updatedItems = [...educationItems];
                                                        updatedItems[index].fromDate = e.target.value;
                                                        setEducationItems(updatedItems);
                                                    }}
                                                />
                                                <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                                            </div>
                                        </div>

                                        <div className="flex flex-col w-full sm:w-auto">
                                            <label htmlFor={`toDate-${index}`} className="text-sm font-medium text-gray-700 mb-1">
                                                To
                                            </label>
                                            <div className="relative w-full sm:w-auto">
                                                <input
                                                    type="text"
                                                    id={`toDate-${index}`}
                                                    name="toDate"
                                                    className="w-full sm:w-50 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                                                    value={education.toDate}
                                                    onChange={(e) => {
                                                        const updatedItems = [...educationItems];
                                                        updatedItems[index].toDate = e.target.value;
                                                        setEducationItems(updatedItems);
                                                    }}
                                                />
                                                <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="flex justify-center mt-6">
                                <button
                                    type="button"
                                    className="flex items-center gap-2 text-blue-600 border border-blue-600 rounded-full px-4 py-2 hover:bg-blue-50 transition-colors"
                                    onClick={handleAddEducation}
                                >
                                    <PlusIcon className="h-4 w-4" />
                                    <span>Add Another</span>
                                </button>
                            </div>

                            <div>
                                <div className="py-3">
                                    <p>Are you currently a student?</p>
                                    <label  
                                            className="mr-6"
                                            >
                                        <input
                                            type="radio"
                                            value="yes"
                                            checked={isStudent}
                                            onChange={handleStudentChange}
                                            className="mr-2"

                                        />
                                        Yes
                                    </label>
                                    <label className="mr-6">
                                        <input
                                            type="radio"
                                            value="no"
                                            checked={!isStudent}
                                            onChange={handleStudentChange}
                                            className="mr-4"
                                        />
                                        No
                                    </label>
                                </div>

                                <div>
                                    <p>Do you have 3+ years of relevant non-internship professional experience?</p>
                                    <label className="mr-6">
                                        <input
                                            type="radio"
                                            value="yes"
                                            checked={hasExperience}
                                            onChange={handleExperienceChange}
                                            className="mr-4"
                                        />
                                        Yes
                                    </label>
                                    <label className="mr-6">
                                        <input
                                            type="radio"
                                            value="no"
                                            checked={!hasExperience}
                                            onChange={handleExperienceChange}
                                            className="mr-4"
                                        />
                                        No
                                    </label>
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
                        className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center"
                    >
                        Save and Continue
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </button>
                </div>
            </form>
        </div>
    );
}
