
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

export default Dropdown;