// App.jsx
import React from 'react';
import './styles.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About'; 
import Contact from './components/Contact';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

    
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/work-experience" element={<WorkExperience />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

