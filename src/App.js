import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { BackgroundImageDiv } from "./components/Common/CommonElements";
import Home from "./pages";
import About from "./pages/about";
import Gallery from "./pages/gallery"

function App() {
    return (
        <BackgroundImageDiv>
            <Router>
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/gallery" element={<Gallery />} />
                    </Routes>
            </Router>
        </BackgroundImageDiv>
    );
}

export default App;

