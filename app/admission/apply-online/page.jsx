import Button from "../../components/Button/Button";
import AcademicDetails from "./AcademicDetails";
import BasicDetails from "./BasicDetails";
import ContactDetails from "./ContactDetails";
import PersonalDetails from "./PersonalDetails";



 export default function page(){
  return (<>
    <BasicDetails/>
    <PersonalDetails/>
    <ContactDetails/>
    <AcademicDetails/>
    <div className="flex gap-10 justify-center m-10 text-white">
      <Button link={"/admission/apply-online"}>Reset</Button>
      <Button link={"/"}>Submit</Button>
      </div>    
  </>
  );
};


