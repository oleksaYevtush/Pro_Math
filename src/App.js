import './App.css';
import { NavBar, Home, Lessons } from './Components';
import AboutMe from './Components/AboutMe';
import Reviews from './Components/Reviews';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Education from './Components/Education';
import { ReactLenis } from "@studio-freight/react-lenis";

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      <div className="App">
        <NavBar />
        <Home />
        <AboutMe />
        <Education />
        <Lessons />
        <Reviews />
        <ContactUs />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
