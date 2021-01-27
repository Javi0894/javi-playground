import React, {useState} from 'react';
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import './Hexagon.css';

export default function Hexagon (){
    const [panel, setPanel] = useState(0);
    const handlePanelRightDecrement = () => { setPanel(panel - 1);};
    const handlePanelLeftIncrement = () => { setPanel(panel + 1);};
    let boxArea;

    const rotateRight = () => {
    
        boxArea = document.getElementById('main-box-area');
        boxArea.style.transition = "transform 1s linear 0s";
        boxArea.style.transform = `rotate3d(0,1,0, ${(panel-1)*60}deg)`;
        handlePanelRightDecrement();
        boxArea=null;
      };
    const rotateLeft = () => {
    
        boxArea = document.getElementById('main-box-area');
        boxArea.style.transition = "transform 1s linear 0s";
        boxArea.style.transform = `rotate3d(0,1,0, ${(panel+1)*60}deg)`;
        handlePanelLeftIncrement();
        boxArea=null;
    };

    return (
        <div className="hexagon-panel">
            <div className="side left" onClick={rotateLeft}><IoMdArrowDropleft/></div>
            <div className="wrapper">
                <div id="main-box-area" className="box-area">
                <div className="box face1"/>
                <div className="box face2"/>
                <div className="box face3"/>
                <div className="box face4"/>
                <div className="box face5"/>
                <div className="box face6"/>
                </div> 
            </div>
            <div className="side right" onClick={rotateRight}><IoMdArrowDropright/></div>
        </div>
    );

}