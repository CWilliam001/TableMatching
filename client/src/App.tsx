import { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Routes, useNavigate } from 'react-router-dom';

import Display from './page/Display';
import Output from './page/Output';
// import './App.css'

import { Button } from "@/components/ui/button"

function App() {
    return (
        <Router>
            <div className="m-2">
                <div className="bg-white shadow-md rounded-lg p-4 my-4">
                    <NavigationButtons />
                </div>
            </div>
            <Routes>
                <Route path='/display' element={ <Display /> } />
                <Route path='/output' element={ <Output /> } />
            </Routes>
        </Router>
    );
}

function NavigationButtons() {
    const navigate = useNavigate();

    const navigateToDisplay = () => {
        navigate('/display');
    };

    const navigateToOutput = () => {
        navigate('/output');
    };

    return (
        <div className="flex">
            <Button className="w-1/2 m-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded" onClick={navigateToDisplay}>Display</Button>
            <Button className="w-1/2 m-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded" onClick={navigateToOutput}>Output</Button>
        </div>
    )
}

export default App;