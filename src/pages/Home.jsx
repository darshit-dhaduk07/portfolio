import Contact from "../components/Contect";
import Experience from "../components/Exprience";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Experience/>
      <Contact/>
    </>
  );
}

export default Home;
