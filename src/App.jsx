import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ExperienceTimeline from "./Components/ExperienceTimeline/ExperienceTimeline";
import FloatingActionButton from "./Components/FloatingActionButton/FloatingActionButton";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";

const App = () => {
  return (
    <div>
      <LoadingScreen />
      <Navbar />
      <Hero />
      <About />
      <ExperienceTimeline />
      <MyWork />
      <Contact />
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default App;
