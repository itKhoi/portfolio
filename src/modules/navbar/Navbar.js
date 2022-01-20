import {FaAlignJustify} from 'react-icons/fa'
import {useState} from "react"
import {Link} from "react-router-dom"
import React from 'react'
import {navdata} from "../../data/navdata"
import "./Navbar.css"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [links, setLinks] = useState(navdata)
    return (
        <div>
            <div className = "navButton">
                <button onClick={()=> setIsOpen(!isOpen)}>
                    <FaAlignJustify/>
                </button>
            </div>
            <header className={`${isOpen ? "header open" : "header"}`}>
                <nav>
                    <ul>
                        {links.map((link)=>{
                            const{id,title,url} = link

                            return(
                                <li key={id} onClick={()=>{setIsOpen(!isOpen)}}>
                                    <Link to={url}>{title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </header>
            
        </div>
    )
}
