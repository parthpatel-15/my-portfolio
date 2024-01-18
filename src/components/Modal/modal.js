// modal.js
import React, { useRef } from "react";
import './module.css';

function Modal({ modalOpen, currentProject, closeModal }) {
    const overlayRef = useRef(null);
    const buttonRef = useRef(null);
    if (!modalOpen) {
        return null;
    }

    // const toolsObj = {
    //     handlebars:
    //         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg", // Replace with actual URLs
    // };

    // const projectTechs = currentProject.technologies.toLowerCase().split(", ");

    function handleCloseModal(e) {
        if (e.target === overlayRef.current || buttonRef.current.contains(e.target)) {
            closeModal();
        }
    }

    return (
        <div>
            {modalOpen && (
                
                    <div
                        className="modalOverlay noselect"
                        ref={overlayRef}
                        onClick={(e) => handleCloseModal(e)}
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                            },
                        }}
                        exit={{
                            opacity: 0,
                            transition: {
                                duration: 0.3,
                            },
                        }}
                    >
                        {/* Modal Container */}
                    <div
                        className="modalContainer"
                        initial={{ scale: 0 }}
                        animate={{
                            scale: 1,
                            transition: {
                                duration: 0.5,
                            },
                        }}
                        exit={{
                            scale: 0,
                            transition: {
                                duration: 0.5,
                            },
                        }}
                        >
                            {/* Close Button */}
                            <button
                                className="closeButton"
                                ref={buttonRef}
                                onClick={(e) => handleCloseModal(e)}
                            >
                                X
                            </button>

                            {/* Img Wrapper */}
                            <div className="imgWrapper"
                            
                                initial={{ x: -70, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 0.4,
                                        duration: 0.6,
                                    },
                                }}>
                                <img src={currentProject.img} alt="" />
                            </div>

                            {/* Desc Wrapper */}
                            <div className="descriptionWrapper"
                                initial={{ x: -70, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 0.8,
                                        duration: 0.6,
                                    },
                                }}>
                                <p>{currentProject.description}</p>
                            </div>
                        
                     </div>
                </div>
            )}
        </div>
    );
}

export default Modal;