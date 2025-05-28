import RadioGroup from "../../components/Form/RadioGroup";
import Dropdown from "../../components/Form/Dropdown";
import React from "react";
import InputField from "../../components/Form/InputField";

export default function AcademicDetails() {
  return (
    <div className="p-4 border-b rounded-t-lg bg-red-500 w-1/3 mx-auto m-10">
      <h2 className="text-2xl text-white">Basic Details</h2>
      <div className="bg-gray-50 mt-4 -mb-3 -ml-3 -mr-3">
        <Dropdown
          label="Select Stream"
          options={["Engineering", "Medical"]}
          required
        />
        <Dropdown
          label="Current Class"
          options={["Engineering", "Medical"]}
          required
        />
        <Dropdown
          label="Current Class"
          options={["Engineering", "Medical"]}
          required
        />
        <Dropdown
          label="Course Name"
          options={["Engineering", "Medical"]}
          required
        />
        <RadioGroup
          label="Preferred Study Medium"
          name="study-medium"
          options={[
            { label: "English", value: "english" },
            { label: "Hindi", value: "hindi" },
          ]}
          required
        />
        <Dropdown
          label="Study Centre Choice"
          options={["Centre 1", "Centre 2"]}
          required
        />
        <Dropdown
          label="Test Centre Choice"
          options={["Centre 1", "Centre 2"]}
          required
        />
        <RadioGroup
          label="Are you Bansalite?"
          name="bansalite"
          options={[{ label: "Yes", value: "yes" },{ label: "No", value: "no" },]}
        />
        <InputField label="BC Roll No" name="bc-roll-no" />
      </div>
    </div>
  )
}
