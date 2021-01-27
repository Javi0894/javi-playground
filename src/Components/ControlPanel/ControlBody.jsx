import React, { useContext } from "react";
import { ControlContext } from "./ControlContext";

export default function ControlBody({children}){
    const displaySidebar = useContext(ControlContext);
    return (
        <div className="control-panel-body">
            {displaySidebar && <div className="overlay-screen"/>}
            {children}
        </div>
    );
}