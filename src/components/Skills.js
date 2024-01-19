// Skills.js
//import { colors } from 'debug/src/browser';
import React from 'react';
import "../css/skills.css"
import tools from "../Data/tools.js";
import libraries from "../Data/lib.js";
import otherSkills from "../Data/other-skills.js";
function Skills() {  
        const scrollDown = () => {
          const libsContainer = document.getElementById('libs-container');
          if (libsContainer) {
            const yOffset = -60; // Adjust this value based on your layout
            const y =
              libsContainer.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        };
        return (
          
          <div className='all-skills'>

            {/* all tools which i know */}
              <div className="tools-container">
                  <div className="tools-wrapper">
                  <h2 style={{  }}> Tooling </h2>

                    <div className='tools'>
                      {tools.map((tool, index) => (
                          <div
                              className="tool-box"
                              key={index}
                              >

                              <img src={tool.src} alt="" width={30} height={30} />
                              <span className = "name">{tool.name}</span>
                          </div>
                      ))}
                    </div>
                  </div>

                  {/* Scroll down arrow */}
                  <div className="scroll-down-arrow" onClick={scrollDown}>
                  {/* &#8595; */}
                  </div>




              </div>

            {/* all libraries which i know */}
              <div id="libs-container" className='libs-container'>
                <div className="libs-wrapper">
                  <h2 style={{ paddingBottom: '30px', margin:'0' }}> Libraries and Frameworks </h2>

                  <div style = {{maxWidth: '45rem' }} className='tools'>
                    {libraries.map((librarie, index) => (
                        <div
                            className="tool-box"
                            key={index}
                            >

                            <img src={librarie.src} alt="" width={30} height={30} />
                            <span className = "name">{librarie.name}</span>
                        </div>
                    ))}
                  </div>
                </div>


                


              </div>

            
            {/* all other skills which i know */}
            <div className='skills-container'>
                <div className="skills-wrapper">
                  <h2 style={{ paddingBottom: '30px', margin:'0' }}> Competence </h2>

                  <div style = {{maxWidth: '45rem' }} className='tools'>
                    {otherSkills.map((librarie, index) => (
                        <div
                            className="tool-box"
                            key={index}
                            >

                            <img src={librarie.src} alt="" width={30} height={30} />
                            <span className = "name">{librarie.name}</span>
                        </div>
                    ))}
                  </div>
                </div>
              </div>



          
          </div>

          


        );
    }

export default Skills;