import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import Navbar from "./components/Navbar";
import "/src/styles/App.css";

export function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRoutes />
        </BrowserRouter>
    )
}

export default App;