import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Tasks from './components/Tasks/Tasks';
const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Tasks />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;