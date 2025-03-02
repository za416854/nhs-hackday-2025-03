import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppointmentForm from "./pages/AppointmentForm";
import Summary from "./pages/Summary";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/appointment-form" element={<AppointmentForm />} />
                <Route path="/summary" element={<Summary />} />
            </Routes>
        </Router>
    );
}

export default App;
