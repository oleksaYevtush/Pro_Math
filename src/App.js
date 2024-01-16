
import './App.css';
import {NavBar,Home, Lessons} from './Components';
import AboutMe from './Components/AboutMe';
import Reviews from './Components/Reviews';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Education from './Components/Education';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <AboutMe/>
      <Education/>
      <Lessons/>
      <Reviews/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
