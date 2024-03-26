


import CourseCards from "../FootPart/CourseCards"
import Rewrite from '../FootPart/PhotosFooter/Rewrite.png';
import Algebra from '../FootPart/PhotosFooter/Algebra.png'
import Dog from '../FootPart/PhotosFooter/Dog.png';
import Manifold from '../FootPart/PhotosFooter/Manifold.png';
import Person from '../FootPart/PhotosFooter/Person.png';
import Plug from '../FootPart/PhotosFooter/Plug.png';
import Green from '../FootPart/PhotosFooter/Green.png';
import './ArticlesBody.css';


const ArticleBody = () => {
  return (
    <div className="articleBody">
        <CourseCards source={Rewrite} timestamp = {"MAY 2, 2023 IN SPRING"} tagline={'Simplify Spring Boot Version Migration with OpenRewrite'} picsrc={Person} personName={"Matthew Wojtowicz"}
       divheight={"33rem"} divWidth={"32rem"} fontSize={"1.75rem"} fontWeight={'550'} imageHeight={"16rem"} imageWidth={"100%"} />

      <CourseCards source={Dog} timestamp = {"MAY 11, 2023 IN"} tagline={'Three Tools To Keep Your Dependencies Up To Date In A SpringBoot Project'} picsrc={Person} personName={"Matthew Wojtowicz"}
       divheight={"33rem"} divWidth={"32rem"} fontSize={"1.75rem"} fontWeight={'550'} imageHeight={"16rem"} imageWidth={"100%"} />

      <CourseCards source={Algebra} timestamp = {"MAY 1, 2023 IN JAVA"} tagline={'Java 8 To 18: Most Important Changes In The Java Platform'} picsrc={Person} personName={"Matthew Wojtowicz"}
       divheight={"33rem"} divWidth={"32rem"} fontSize={"1.75rem"} fontWeight={'550'} imageHeight={"16rem"} imageWidth={"100%"} />

      <CourseCards source={Manifold} timestamp = {"MAY 2, 2023 IN SPRING"} tagline={'Is This The Future Of Java?'} picsrc={Person} personName={"Matthew Wojtowicz"}
       divheight={"33rem"} divWidth={"32rem"} fontSize={"1.75rem"} fontWeight={'550'} imageHeight={"16rem"} imageWidth={"100%"} />

      <CourseCards source={Plug} timestamp = {"MAY 2, 2023 IN SPRING"} tagline={'Providing A GraphQL Endpoint In Spring Boot'} picsrc={Person} personName={"Matthew Wojtowicz"}
       divheight={"33rem"} divWidth={"32rem"} fontSize={"1.75rem"} fontWeight={'550'} imageHeight={"16rem"} imageWidth={"100%"} />

      <CourseCards source={Green} timestamp = {"MAY 2, 2023 IN SPRING"} tagline={'Spring Boot And Spring Batch: Creating A Job Runner For Database Exports'} picsrc={Person} personName={"Matthew Wojtowicz"}
       divheight={"33rem"} divWidth={"32rem"} fontSize={"1.75rem"} fontWeight={'550'} imageHeight={"16rem"} imageWidth={"100%"} />
    </div>
  )
}

export default ArticleBody