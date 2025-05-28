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
export default RadioGroup;