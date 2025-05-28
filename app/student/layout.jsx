import Image from "next/image";
import bg from "../components/Assests/images/pexels-photo-301920.jpg"

export default function Layout({ children }) {
  return <section>
    <div className="h-1/5">
    <Image src={bg}  className="shadow-2xl" alt="" />
    </div>
        {children}
    </section>
}