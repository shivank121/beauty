import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Service from './pages/Service';
import Course from './pages/Course';
import Review from './pages/Review';
import About from './pages/About';
import Contact from './pages/Contact';
import Auth from './pages/Auth';

function App() {
  return (
    <div className="App">
       <Home/>
       <Gallery/>
       <Service/>
       <Course/>
       <Review/>
       <About/>
       <Contact/>
       <Auth/>
    </div>
  );
}

export default App;
