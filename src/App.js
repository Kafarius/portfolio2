import './App.css';
import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Separator from "./components/Separator";
import {useEffect, useState} from "react";

function App() {
    let [offsetArr, setOffsetArr] = useState([]);
    const screenWidth = window.innerWidth;
    let pad = screenWidth <= 500 ? 100 : 50

    useEffect(()=>{
        const landingOff = document.getElementById('landing-section').offsetTop;
        const aboutOff = document.getElementById('about-section').offsetTop - pad;
        const projectsOff = document.getElementById('projects-section').offsetTop - pad;
        const contactOff = document.getElementById('contact-section').offsetTop - pad;
        setOffsetArr([...offsetArr, landingOff, aboutOff, projectsOff, contactOff]);

    }, [])
    // console.log(offsetArr);

  return (
    <div className="App">
        <LandingSection offsetArr={offsetArr} />
        <Separator/>
        <AboutSection offsetArr={offsetArr} />
        <Separator/>
        <ProjectsSection />
        <Separator/>
        <ContactSection offsetArr={offsetArr} />
    </div>
  );
}

export default App;
