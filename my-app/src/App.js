import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';


    function App() {
      return (
        <Router>
          <Header />
    
          <Route exact path="/" component={Home} />
          <Route path="/courses" component={Courses} />
          <Route path="/about" component={About} />
    
          <Footer />
        </Router>
      );
    }
    
  export default App; 
