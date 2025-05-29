import RadioGroup from "../../components/Form/RadioGroup";
import Dropdown from "../../components/Form/Dropdown";
import React from "react";
import InputField from "../../components/Form/InputField";

const states= [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ]

export default function ContactDetails() {
  return (
<div className="p-4 border-b rounded-t-lg bg-red-500 lg:w-1/2 mx-auto m-10">
      <h2 className="text-2xl text-white">Addresses & Contact Details</h2>
      <div className="bg-gray-50 mt-4 -mb-3 -ml-3 -mr-3">
        <InputField label="Address Line No. 1" name="address1" />
        <InputField label="Address Line No. 2" name="address2" />
        <InputField label="City / Town / Post / Tehsil / District " name="address3" />
        <InputField label="Pin Code" name="pincode" />
        <Dropdown
          label="State Name"
          options={states}
          required
        />
        <InputField label="Mobile No" name="bc-roll-no" />
        <InputField label="E-Mail Address" name="bc-roll-no" />
      </div>
    </div>
  )
}
