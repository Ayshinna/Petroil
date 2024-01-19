import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Banner from './components/Banner';
import About from './components/About';
import Service from './components/Service';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
function App() {
  return (
    <>
   <Header/>
   <Nav />
   <Banner/>
   <About/>
   <Service/>
   <Gallery/>
   <Blog/>
   <Contact/>
   </>
  );
}

export default App;
