import React, { useContext } from "react";
import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";
import { ControlContext } from "./ControlContext";
import './Components.css';

function TopbarContainer ({children}){
    return(
        <ul className="topbar-nav">
            {children}
        </ul>
    ); 
};

export default function Topbar ({onMenuClick}){
    // const [displaySidebar, setDisplaySidebar] = useState(false);
    const displaySidebar = useContext(ControlContext);
    return (
        <TopbarContainer>
            {displaySidebar && <RiMenuFoldFill className="menu-icon" onClick={onMenuClick}/>}
            {!displaySidebar && <RiMenuUnfoldFill className="menu-icon" onClick={onMenuClick}/>}
        </TopbarContainer>
    );
}