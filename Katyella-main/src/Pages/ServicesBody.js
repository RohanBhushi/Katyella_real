
import React ,{useState} from 'react';
import Cards from './Cards';
import './ServicesBody.css';
const data = [
    {picUrl:"https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a8382535c8883_trophy.svg",
    topic: "Application Assessment",
    brief: "Unlock your application's potential with our thorough application assessment services, designed to identify areas for improvement and chart a roadmap to modernization. Our experienced team evaluates your application's architecture, performance, and maintainability, pinpointing opportunities to enhance efficiency, reduce technical debt, and streamline integration with modern technologies. With our in-depth analysis and actionable insights, we empower your organization to make informed decisions and drive successful digital transformation.",
    rightUrl: "https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a8300985c89d5_notebook.svg"
},
{
    picUrl:"https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a835a455c887c_workflow.svg",
    topic: "Spring Boot Migrations",
    brief:"Experience the full potential of Spring Boot as we craft bespoke, high-performance microservices tailored to your specific business requirements. Our team of experts utilizes the simplicity and power of the Spring Boot framework to develop streamlined applications with minimal configuration, ensuring rapid development cycles and ease of maintenance. By embracing the principles of modularity and separation of concerns, our Spring Boot solutions empower your business to achieve greater agility and adaptability in today's fast-paced market.",
    rightUrl: "https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a8383f75c8879_pale-logged-out-p-800.png"
},
{
    picUrl:"https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a8325cb5c887f_database.svg",
    topic: "Cloud Migration",
    brief: "Experience the advantages of cloud computing with our streamlined cloud migration services, tailored to fit your unique business needs. Our expert team collaborates with you to develop an efficient migration strategy, ensuring a secure and seamless transition of your applications and infrastructure to the cloud. By tapping into the scalability, flexibility, and cost-efficiency of cloud solutions, your organization gains a competitive edge in the digital landscape. Let us help you unlock new opportunities for growth and success with our comprehensive cloud migration support.",
    rightUrl: "https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a8329275c8870_pale-delivery-p-800.png"
},
{
    picUrl:"https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a839f555c8882_man-messaging.svg",
    topic: "Staff Augmentation",
    brief: "Boost your team's capabilities with our staff augmentation services, providing skilled professionals to complement your existing resources. We carefully assess your project requirements and help you scale efficiently to meet tight deadlines. Our talented developers and project managers seamlessly integrate with your team, ensuring smooth collaboration and knowledge transfer for maximum productivity. Enhance your in-house expertise and accelerate your projects with our targeted staff augmentation solutions.",
    rightUrl: "https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a8329275c8870_pale-delivery-p-800.png"
}
]


const ServicesBody = () => {

    const [baseurl, setUrl] = useState("https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a8300985c89d5_notebook.svg");

    
    
  return (
    <div className="servicesBody">

    <div className="topTexts">
    <h5>PICK WHAT WORKS FOR YOU</h5>
    <h1 className='serviceHead'>Customized Services Tailored to <br />
     Your Business Needs</h1>
    </div>

    <div className="dynamic">
    <div className="serviceDetails">
    {
        data.map((elem, key)=>{
            return(
                <Cards picUrl ={elem.picUrl} topic={elem.topic} brief={elem.brief} key={key} rightUrl={elem.rightUrl}   />
            )
        })
    }
    </div>

    <div className="rightImageDiv">
        <img src={baseurl} alt="" />
    </div>
    </div>
    </div>
  )

 
}

export default ServicesBody