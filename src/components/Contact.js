// Contact.js

import React from 'react';
import '../css/Contact.css';
import { EnvelopeSimple } from "phosphor-react";

function Contact() {
    return (
       
        <div className='contactContainer'>

        <div className='ContactText'>
        {/* Heading */}
            <div className= 'fristline' >
                <h4>
                    Need a new <strong>Developer</strong>, or have a{" "}
                    <strong>Project</strong> in mind?
                </h4>
            </div>
            {/* CTA */}
            <div className= 'getintouch'>
                <span>Let's get in touch!</span>
            </div>
            {/* Paragraph */}
            <div className= 'para'>
                <p>
                    If you have any questions, feedback, or would like to
                    discuss potential job opportunities or collaborations, feel
                    free to get in touch. I'm actively seeking new employment
                    opportunities and am excited to explore how my skills can
                    contribute to your organization. Your inquiries are highly
                    appreciated, and I look forward to connecting with you to
                    discuss how we can work together to achieve mutual success!
                </p>
            </div>
            {/* Open Mail */}
            <div className= 'myeamil'>
                <a href="mailto:parthpatel2927@gmail.com">
                    parthpatel2927@gmail.com
                    <EnvelopeSimple size={24} weight="bold" />
                </a>
            </div>

        <div className='SocialMedia'>
            <a
                href="https://www.linkedin.com/in/parth-patel-61278710b/"
                target="https://www.linkedin.com/in/parth-patel-61278710b/"
                //</div>rel="noopener noreferrer" 
            >
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    alt=""
                    width={60}
                />
            </a>
            <a 
            href="https://github.com/parthpatel-15" 
            target="https://github.com/parthpatel-15"
            //rel="noopener noreferrer"
             >
                <img
                    className="githubIcon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt=""
                    width={60}
                />
            </a>
        </div>
        </div>
        </div>
        );
}

export default Contact; // Ensure this line is present



// <div className="contact-container">
        //     <div className="contact-wrapper">
        //         <h4>Get in touch!</h4>
        //         <div className="inputContainer relative">
        //             <label htmlFor="name">What should I call you?</label>
        //             <input
        //                 required
        //                 type="text"
        //                 id="name"
        //                 placeholder="Name"
        //             />
        //         </div>
        //         <div>
        //             <label htmlFor="email">Where do I reply you?</label>
        //             <input
        //                 required
        //                 type="email"
        //                 id="email"
        //                 placeholder="Email"
        //             />
        //         </div>
        //         <div>
        //             <label htmlFor="content">Pen Your Thoughts</label>
        //             <textarea
        //                 required
        //                 id="content"
        //                 cols={30}
        //                 rows={10}
        //                 placeholder="In this space, your words have the power to inspire..."
        //             ></textarea>
        //         </div>
        //         <div>
        //             <button type="submit">Submit</button>
        //         </div>
        //     </div>
        // </div>
    