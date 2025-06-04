export default function FoundationCards({ data }) {
  return (
    <div className="flex flex-wrap mt-16 lg:mx-4 mx-0 mb-6 ">
      {data.map((item, i) => (
        <div className="w-full lg:w-1/5 px-2 my-2" key={i}>
          <div className="h-full p-5 bg-white rounded shadow-lg border border-gray-200 transform transition duration-500 hover:scale-105">
            <div className="mb-6 flex items-start">
              <h3 className="text-xl font-bold text-center text-red-600">
                {item.title}
              </h3>
            </div>
            <p className="text-justify"> {item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
