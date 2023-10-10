import './App.css';
import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Separator from "./components/Separator";

function App() {
  return (
    <div className="App">
        <LandingSection />
        <Separator/>
        <AboutSection />
        <Separator/>
        <ProjectsSection />
        <Separator/>
        <ContactSection />
    </div>
  );
}

export default App;
