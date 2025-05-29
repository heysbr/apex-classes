const FeeTable = ({data, children, index}) => {
  return (<div className="flex m-20 max-w-[70vw]">
  {/* <div className="mb-4 mr-6 py-4 px-6 rounded text-red-500 bg-red-50 font-bold h-fit">
          {index}
        </div> */}
        <div>

    <h3 className="mb-4 text-xl lg:text-2xl font-bold">{children}</h3>
    <table className="min-w-full bg-white border">
      <thead className="bg-red-800 text-white">
        <tr>
          <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
            Courses
          </th>
          <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
            Eligibility
          </th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
            Fee
          </th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {data.map((item, index) => (
            <tr key={index}>
            <td className="w-1/3 text-left py-3 px-4">{item.course}</td>
            <td className="w-1/3 text-left py-3 px-4">{item.eligibility}</td>
            <td className="w-1/3 text-left py-3 px-4">{item.fee}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
        </div>
  );
};

export default FeeTable