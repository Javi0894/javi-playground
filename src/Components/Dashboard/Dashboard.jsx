import React, { useState } from "react";
import { MdViewCarousel } from "react-icons/md";
import { IoGridSharp } from "react-icons/io5";
import { CSSTransition } from "react-transition-group";
import Hexagon from "./Hexagon";
import Gallery from "./Gallery";
import "./Dashboard.css";

export default function Dashboard(){
    const [ view, setView ] = useState("gallery")
    return (
        <div className="dashboard">
            <div className="dashboard-header">
                { view==="gallery" && <MdViewCarousel onClick={()=>setView("hexagon")} className="dashboard-icon"/> }
                { view==="hexagon" && <IoGridSharp onClick={()=>setView("gallery")} className="dashboard-icon"/>  }
            </div>
            <CSSTransition 
                in={view === "gallery"}
                unmountOnExit
                timeout={300}
                classNames="dashboard-gallery"
            >
                <Gallery/>
            </CSSTransition>
            <CSSTransition 
                in={view === "hexagon"}
                unmountOnExit
                timeout={300}
                classNames="dashboard-hexagon"
            >
                <Hexagon/>
            </CSSTransition>
        </div>
    );
}