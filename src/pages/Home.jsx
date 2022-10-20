import AboutMe from "../components/AboutMe";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
