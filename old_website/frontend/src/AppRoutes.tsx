import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";
import Faith from "./pages/Faith";

export function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/hobbies" element={<Hobbies />} />
                <Route path="/faith" element={<Faith />} />
            </Routes>
        </div>
    );
}