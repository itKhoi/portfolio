import React from 'react'
import "./Skills.css"
import { ProgressBar } from './Progressbar'
import {useState} from "react"
import {skilldata} from "../../data/skilldata"
export default function Skills() {
    const [links, setLinks] = useState(skilldata)
    return (
        <div className="skills-container">
            <div className="skill-content-container">
                <h1>Skills</h1>
                <div className='progress-container'>
                    {links.map((link)=>{
                        const{title, width, percent} = link

                        return(
                            <div className='progress-box'>   
                                <  p>{title}</p>
                                <ProgressBar width={width} percent={percent}/>
                        </div>
                        )
                    })}
                    {/* <div className='progress-box'>
                        <p>Python</p>
                        <ProgressBar width={80} percent={90}/>
                    </div>
                    <div className='progress-box'>
                        <p>Python</p>
                        <ProgressBar width={80} percent={70}/>
                    </div>
                    <div className='progress-box'>
                        <p>Python</p>   
                        <ProgressBar width={80} percent={80}/>
                    </div>
                    <div className='progress-box'>
                        <p>Python</p>   
                        <ProgressBar width={80} percent={80}/>
                    </div>
                    <div className='progress-box'>
                        <p>Python</p>   
                        <ProgressBar width={80} percent={80}/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
