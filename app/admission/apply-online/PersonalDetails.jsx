import RadioGroup from "../../components/Form/RadioGroup";
import Dropdown from "../../components/Form/Dropdown";
import React from "react";
import InputField from "../../components/Form/InputField";

export default function PersonalDetails() {
  return (
<div className="p-4 border-b rounded-t-lg bg-red-500 lg:w-1/2 mx-auto m-10">
      <h2 className="text-2xl text-white">Personal Details</h2>
      <div className="bg-gray-50 mt-4 -mb-3 -ml-3 -mr-3">

        <InputField label="Candidate's Name" name="candidate-name" />
        <Dropdown label="Gender" options={["Male", "Female","Other"]} required/>
        <InputField label="Date of Birth as per School " name="dob" />
        <RadioGroup
          label="Nationality"
          name="study-medium"
          options={[
            { label: "Indian", value: "Indian" },
            { label: "Other", value: "Other" },
          ]}
          required
        />
        <Dropdown
          label="Category"
          options={["Engineering", "Medical"]}
          required
        />
         <InputField label="Father's Name" name="father-name" />
         <InputField label="Mother's Name" name="mother-name" />        
      </div>
    </div>
  )
}
