import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import './App.css';
import './index.css';
// import About from './components/About';
// import Resume from './components/Education';
// import Portfolio from './components/Experience';
// import Testimonials from  './components/Hobi';
// import ContactUs from './components/Skills';
// import Footer from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <About About={About}/> */}
        {/* <Education />
        <Experience />
        <Hobi />
        <Skills />
        <Contact /> */}
        
      </div>
    );
  }
}
export default App;