
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navrbar from './components/Navrbar';
import Testimonials from './components/Testimonials';
import Demo from './components/Demo';
function App() {
  return (
    <div >
      <Navrbar/>
      <Hero/>
      <About/>
      <Testimonials/>
      <Demo/>
      <Footer/>
    </div>
  );
}

export default App;
