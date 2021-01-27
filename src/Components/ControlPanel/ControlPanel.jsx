import React, { useState } from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import ControlBody from "./ControlBody"
import {ControlContext} from "./ControlContext";
import "./Components.css";

export default function ControlPanel({children}){
    const [displaySidebar, setDisplaySidebar] = useState(false);
    const handleDisplaySidebarToggle = () => setDisplaySidebar(displaySidebar?false:true);
    return (
        <div className="control-panel-header">
            <ControlContext.Provider value={displaySidebar}>
                <Topbar onMenuClick={handleDisplaySidebarToggle}/>
                <div className="control-panel-body">
                    <Sidebar onClose={()=>setDisplaySidebar(false)}/>
                    <ControlBody>
                        {children}
                    </ControlBody>
                </div>
            </ControlContext.Provider>
        </div>
    );
}