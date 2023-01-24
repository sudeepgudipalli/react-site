import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Dashboard from './components/dashboard';
import Info from './components/researchinfo';
import Log from './components/log';
import Sign from './components/sign';

function App(){
    // const user = false;
    // const admin = false;
    return(
        <Router>
            <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/login" element={<Log/>}/>
            <Route path="/signup" element={<Sign/>}/>
            <Route path="/researchinfo" element={<Info/>}/>
            </Routes>
        </Router>
    );
}

//   Info, Log, Sign

export default App;
// This is the FILE that is running always...