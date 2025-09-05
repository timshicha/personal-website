import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import BogeyPadPage from "./pages/projects/BogeyPadPage";
import BinChallengeSystemPage from "./pages/projects/BinChallengeSystem";

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/projects/bogey-pad" element={<BogeyPadPage />}/>
            <Route path="/projects/bin-challenge-system" element={<BinChallengeSystemPage />}/>
        </Routes>
    );
}

export default App;