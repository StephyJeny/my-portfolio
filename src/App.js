import { motion } from 'framer-motion';
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
    </motion.div>
  );
}

export default App;
