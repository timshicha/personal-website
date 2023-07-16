import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}