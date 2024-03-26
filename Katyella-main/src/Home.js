
import Header from './Components/Header';
import Hero from './Components/Hero';
import Process from './Components/Process';
import Testimonials from './Components/Testimonials';
import Learn from './FootPart/Learn';
import Footer from './FootPart/Footer';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Process />
      <Testimonials />
      <Learn />
      <Footer />
    </div>
  )
}

export default Home