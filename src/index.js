import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Link,Route} from "react-router-dom";
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Hobi from './components/Hobi';
import Contact from './components/Contact';



const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/experience" component={Experience} />
        <Route path="/education" component={Education} />
        <Route path="/hobi" component={Hobi} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
