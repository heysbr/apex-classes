import React from "react";

const Dropdown = ({ label, options, required = false }) => (
  <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
    <p className="text-gray-600">
      {label} {required && <span className="text-red-600">*</span>}
    </p>
    <select
      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
    >
      <option>Please Select</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const RadioGroup = ({ label, options, name, required = false }) => (
  <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
    <p className="text-gray-600">
      {label} {required && <span className="text-red-600">*</span>}
    </p>
    <div className="mt-4 space-y-4">
      {options.map((option, index) => (
        <div className="flex items-center" key={index}>
          <input
            id={`${name}-${index}`}
            name={name}
            type="radio"
            value={option.value}
            className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300"
          />
          <label
            htmlFor={`${name}-${index}`}
            className="ml-3 block text-sm font-medium text-gray-700"
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  </div>
);

const InputField = ({ label, name }) => (
  <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4">
    <p className="text-gray-600">{label}</p>
    <input
      type="text"
      name={name}
      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
    />
  </div>
);

 export default function BasicDetails(){
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
          label="name"
          options={["sbr", "priyanshu"]}
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
  );
};


