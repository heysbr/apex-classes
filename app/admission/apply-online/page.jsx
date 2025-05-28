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
  </>
  );
};


