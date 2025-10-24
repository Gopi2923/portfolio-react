import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ExperienceTimeline from "./Components/ExperienceTimeline/ExperienceTimeline";
import FloatingActionButton from "./Components/FloatingActionButton/FloatingActionButton";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
};

export default App;
