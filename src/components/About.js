// About.js

import React from 'react';
import '../css/About.css';
import "tailwindcss/tailwind.css";

function About() {
    return (
        <div className="about fullsize-div-about "  style={{  padding: '20px' }}>
            <h2 id = 'aboutH'>THE PERSON BEHIND THE PIXELS</h2>
            <p id= 'AboutP' >Dive into the world of innovation with a passionate and forward-thinking software engineer! 
            With a robust 2-year background in Software Development and Testing within Agile environments, I recently earned a Post-Graduation Diploma in Software Engineering Technology with Honors (4.1 CGPA). 
            My academic journey, including a Bachelor of Technology in Computer Science and Technology, forms the bedrock of my expertise. </p>
            <p id= 'AboutP' >My academic pursuits in Artificial Intelligence, having explored a multitude of machine learning and deep learning models. 
            My hands-on experience extends to cloud computing and machine learning using <strong>AWS services</strong>, mastering big data processing with <strong>Apache Spark</strong>, Android mobile application development, and web development, while navigating the intricacies of the software development life cycle (SDLC). </p>
            <p id= 'AboutP' > Proficient in <strong>Java, Python, C++, HTML, JavaScript, TypeScript, CSS, Datastructure and SQL,</strong>  I bring a strong foundation in quality assurance processes.
             My track record speaks of agility, collaboration, and thriving in high-paced environments.
             Join me on the journey to turn ideas into cutting-edge solutions!</p>
        </div>
    );
}


export default About; 
