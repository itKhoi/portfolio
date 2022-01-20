import React from 'react'
import './Home.css'
import {FaGithubSquare,FaLinkedin, FaEnvelope, FaGoogle} from 'react-icons/fa'

export default function Home() {
    return (
        <div className="home-container">
            <div className="home-body">
                <h1>Khoi Nguyen</h1>
                <h2>Full-Stack Software Engineer</h2>
                <div className="icon-box">
                    <div className="icon">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/itKhoi">
                            <FaGithubSquare size={34}/>
                        </a>
                    </div>
                    <div className="icon">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/khoi-nguyen-619b19187/">
                            <FaLinkedin size={34}/>
                        </a>
                    </div>
                    <div className="icon">
                        <a target="_blank" rel="noopener noreferrer" href="mailto:thekhoinguyenn@gmail.com">
                            <FaEnvelope size={34}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
