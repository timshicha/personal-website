import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import Navbar from "./components/Navbar";

export function App() {
    return (
        <BrowserRouter>
        <div>
            <AppRoutes />
            <Navbar />
        </div>
        </BrowserRouter>
    )
}

export default App;