


import Topblock from "./Topblock";
import Footer from "../FootPart/Footer";
import Header from "../Components/Header";
import ServicesBody from "./ServicesBody";

const Services = () => {
  return (
    <div>
        
        <Header />
        <Topblock pageheading={"Services"} />
        <ServicesBody />
        <Footer />
    </div>
  )
}

export default Services