import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppointmentForm from "./pages/AppointmentForm";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/appointment-form" element={<AppointmentForm />} />
            </Routes>
        </Router>
    );
}

export default App;
