export default function FoundationPara({ data }) {
  return (
    <div className="mb-16">
      {data.map((item) => (
        <div key={item.title}>
          <h3 className=" text-2xl leading-8 font-extrabold sm:text-3xl sm:leading-9 ">{item.title}</h3>
          <p className="mt-3 text-base leading-6 text-justify mb-10">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
