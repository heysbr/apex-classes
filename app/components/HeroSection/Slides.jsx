import Button from "../Button/Button";

export default function Slides() {
  return (
    <div
      className="w-full bg-cover "
      style={{ backgroundImage: "url('./images/carousel/carousel.jpg')" }}
    >
      <div className="backdrop-brightness-[65%] h-screen content-center ">
        <div className="text-center text-shadow-lg/30">
          <h2 className="text-3xl mb-4 mt-12 text-shadow-white font-bold font-heading ">
            <span className="text-red-600 text-8xl">APEX</span>
          </h2>
          <p className="text-white text-2xl w-1/2 mx-auto hidden lg:block text-center">
            An educational Institute founded with a sole motto of propagating
            quality education for the students those who are seeking career in
            engineering/medical entrance examination.
          </p>
          <center>
            <Button link={"/admission/apply-online"}>Join Us</Button>
          </center>
        </div>
      </div>
    </div>
  );
}
