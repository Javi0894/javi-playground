import React from 'react';
import Dashboard from "./Components/Dashboard/Dashboard";
import ControlPanel from "./Components/ControlPanel/ControlPanel"
import './App.css';

function App() {
  return (
    <ControlPanel>
      <Dashboard/>
    </ControlPanel>

  );
}

export default App;

// <div className="App">
//   <Topbar/>
//   <div className="app-body">
//     <Sidebar/>
//     <Hexagon/>
//   </div>
// </div>
