import React, { useEffect, useContext, useRef } from "react";
import { ControlContext } from "./ControlContext";
import './Components.css';

function useOutsideDetector(ref, onOutside){
    useEffect(() => {
        function handleClickOutside(event){
            if (ref.current && !ref.current.contains(event.target)){
                onOutside();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [ref, onOutside]);
}

function OutsideAlerter({children, onClickOutside, ...rest}){
    const wrapperRef = useRef(null);
    useOutsideDetector(wrapperRef, onClickOutside);
    return <div ref={wrapperRef} {...rest}>{children}</div>
}

function SidebarContainer ({children, onClose}){
    const displaySidebar = useContext(ControlContext);
    useEffect(() => {
        let sideNav;
        sideNav = document.getElementById("main-sidebar-nav");
        sideNav.style.transition = "transform 300ms 0s";
        sideNav.style.transform = displaySidebar?"translateX(0%)":"translateX(-110%)";
        // return () => {document.removeChild(sideNav)}
    }, [displaySidebar]);
    return( 
        <OutsideAlerter onClickOutside={onClose}>
            <ul id="main-sidebar-nav" className="sidebar-nav">
                {children}
            </ul>
        </OutsideAlerter>    
    ); 
};

export default function Sidebar ({onClose}){
    return (
        <SidebarContainer onClose={onClose}>
            <div className="navigation-tab"> Dashboards </div>
            <div className="navigation-tab"> Animations </div>
            <div className="navigation-tab"> Settings </div>
            <div className="navigation-tab"> About </div>
        </SidebarContainer>
    );
}