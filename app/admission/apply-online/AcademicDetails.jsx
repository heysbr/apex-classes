import RadioGroup from "../../components/Form/RadioGroup";
import Dropdown from "../../components/Form/Dropdown";
import React from "react";
import InputField from "../../components/Form/InputField";
import TextArea from "../../components/Form/TextArea";

const educationBoards = [
  "Central Board of Secondary Education (CBSE)",
  "Council for the Indian School Certificate Examinations (CISCE)",
  "Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)",
  "Tamil Nadu State Board of School Examination",
  "Karnataka Secondary Education Examination Board (KSEEB)",
  "West Bengal Board of Secondary Education (WBBSE)",
  "Uttar Pradesh Madhyamik Shiksha Parishad (UPMSP)",
  "International Baccalaureate (IB)",
  "Cambridge International (CIE)",
  "National Institute of Open Schooling (NIOS)",
  "Bihar State Madrasa Education Board"
];

const cities = [
  "Mumbai",
  "Delhi",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad"
];

export default function AcademicDetails() {
  return (
<div className="p-4 border-b rounded-t-lg bg-red-500 lg:w-1/2 mx-auto m-10">
      <h2 className="text-2xl text-white">Academic (Qualification) Details</h2>
      <div className="bg-gray-50 mt-4 -mb-3 -ml-3 -mr-3">
        
        <InputField label="Current School Name " name="school-name" />
        <Dropdown
          label="Current School City Name"
          options={cities}
          required
        />
        <Dropdown
          label="Education Board"
          options={educationBoards}
          required
        />

        <TextArea 
      label="Remark" 
      name="Remark" 
      placeholder="Write your remark here..." 
      required 
      rows={5} 
    />
      </div>
    </div>
  )
}
