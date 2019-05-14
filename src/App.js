import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import './App.css';
import './index.css';

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