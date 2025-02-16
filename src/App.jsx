import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      
      <InViewAnimation>
        <Home />
      </InViewAnimation>

      <InViewAnimation>
        <About />
      </InViewAnimation>

      <InViewAnimation>
        <Experience />
      </InViewAnimation>

      <InViewAnimation>
        <Projects />
      </InViewAnimation>

      <Footer />
    </div>
  );
}

const InViewAnimation = ({children})=>{
  const { ref, inView} = useInView({triggerOnce: false, threshold: 0.2});

  return(
    <motion.div
    ref = {ref}
    initial = {{ opacity: 0, y: 50}}
    animate = {inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
    transition={{duration: 0.8}}
    >
      {children}
    </motion.div>
  )
}

export default App;
