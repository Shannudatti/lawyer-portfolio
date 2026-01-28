import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import About from "./components/About";
import PracticeAreas from "./components/PracticeAreas";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
// import Appointment from "./components/Appointment";
import "./styles/main.scss";

export default function App() {
  return (
    <>
      <TopBar />
<Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <Experience />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
      {/* <Appointment /> */}
    </>
  );
}
