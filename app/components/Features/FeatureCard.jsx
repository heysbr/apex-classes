export default function FeatureCard({ FeaturesData }) {
  return (
    <div className="flex flex-wrap gap-4  m-4 pb-4 pt-10 ">
      {FeaturesData.map((items, i) => (
        <div
          className="flex content-center w-full lg:w-1/5 rounded-xl mb-2 lg:mb-0 bg-white/80 mx-auto  group hover:scale-105 duration-700 hover: translate-y-2 transform  hover:bg-white/60"
          key={i}
        >
          <div className="flex flex-col flex-wrap items-center text-center py-10  px-4 w-full center">
            <h3 className="text-2xl text-black font-semibold  duration-700">
              {items.heading}
            </h3>
            <p className="text-md font-normal text-black/50 mt-2">
              {items.subheading}
            </p>
            <a className="text-black">Learn More..</a>
          </div>
        </div>
      ))}
    </div>
  );
}
