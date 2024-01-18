// About.js

import React from 'react';
import '../css/About.css';
import "tailwindcss/tailwind.css";

function About() {
    return (
        <div className="about fullsize-div-about "  style={{  padding: '20px' }}>
            <h2 id = 'aboutH'>THE PERSON BEHIND THE PIXELS</h2>
            <p id= 'AboutP'> An innovative and results-driven software engineer with specialization in Artificial Intelligence, with 2 years experience in Software Development, Testing, and working in an Agile environment. 
                Knowledgeable of machine learning, algorithms, and data management with a proven technical acumen.</p>

            <p id= 'AboutP' > Recently, I have completed Post graduation dimploma in Software Engineering Technology with specializing in Artificial Intelligence, maintaining a competitive 4.1 CGPA.
                 In addition, I have completed a Bachelor of Technology in Computer Science and Technology. 
                 I have developed a foundational understanding of Machine Learning and Deep learning  Models like support vector machine(SVM), Logistic and Linear regression, Decision trees,K-nearest neighbour(KNN), Principal Component Analysis (PCA), NLP techniques,
                 Neural Networks,Convolutional Neural Networks (CNNs), Long Short Term Memory Networks (LSTMs), Recurrent Neural Networks (RNNs) etc., 
                 and algorithms & data structures, cloud computing and machine learnig using AWS services, Big data usign Apache Spark, Android mobile application development,
                 Web development, Software development life cycle (SDLC). 
                 I am proficient with Java, Python, C++, HTML, JavaScript, CSS, and SQL, as well as have a sound knowledge of quality assurance processes. 
                 Throughout my work experience, I have demonstrated my capacity to be agile, collaborative, and work within high-paced environments.</p>
        </div>
    );
}


export default About; 
