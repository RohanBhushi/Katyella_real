

import Topblock from "./Topblock"
import Footer from "../FootPart/Footer";
import Header from "../Components/Header";
import ContactBody from "./ContactBody";

const Contact = () => {
  return (
    <div>
        <Header />
        <Topblock pageheading={"Contact"} />
        <ContactBody />
        <Footer />
    </div>
  )
}

export default Contact