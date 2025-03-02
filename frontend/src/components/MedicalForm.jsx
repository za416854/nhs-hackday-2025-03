import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MedicalForm = () => {
    const [symptoms, setSymptoms] = useState([]);
    const [currentSymptom, setCurrentSymptom] = useState("");
    const [selectedSeverity, setSelectedSeverity] = useState("");

    const severityLevels = [
        { label: "Mild", value: "mild", className: "bg-success text-white" },
        { label: "Moderate", value: "moderate", className: "bg-warning text-dark" },
        { label: "Severe", value: "severe", className: "bg-danger text-white" },
    ];

    const addSymptom = () => {
        if (!currentSymptom.trim()) {
            alert("Please enter a symptom description.");
            return;
        }
        if (!selectedSeverity) {
            alert("Please select a severity level.");
            return;
        }

        setSymptoms([...symptoms, { text: currentSymptom, severity: selectedSeverity }]);
        setCurrentSymptom(""); // Clear input after adding
        setSelectedSeverity(""); // Reset severity selection
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-3">Medical Form</h2>

            <form className="border p-3 mb-4">
                {/* Patient Name and Preferred Language */}
                <div className="row mb-3">
                    <div className="col-md-6 d-flex align-items-center">
                        <label className="form-label me-2 mb-0">Patient Name:</label>
                        <span>John Doe</span>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="preferredLanguage" className="form-label">Preferred Language</label>
                        <select className="form-select" id="preferredLanguage">
                            <option value="">Select language</option>
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                        </select>
                    </div>
                </div>

                {/* What's Happening Now */}
                <div className="mb-3 border p-3">
                    <label className="form-label">What is happening now?</label>
                    <textarea
                        className="form-control mb-2"
                        rows="3"
                        placeholder="Describe the situation..."
                        value={currentSymptom}
                        onChange={(e) => setCurrentSymptom(e.target.value)}
                    />

                    {/* Button BELOW the textarea */}
                    <button type="button" className="btn btn-primary mb-3" onClick={addSymptom}>
                        Show symptoms
                    </button>

                    {/* How serious is the feeling */}
                    <div className="mt-3">
                        <label className="form-label">How serious is the feeling?</label>
                        <div className="d-flex gap-2">
                            {severityLevels.map((level) => (
                                <button
                                    key={level.value}
                                    type="button"
                                    className={`btn ${level.className} ${selectedSeverity === level.value ? "border border-dark" : ""}`}
                                    onClick={() => setSelectedSeverity(level.value)}
                                >
                                    {level.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* List of symptoms */}
                    <ul className="list-group mt-3">
                        {symptoms.map((symptom, index) => (
                            <li key={index} className={`list-group-item ${severityLevels.find((s) => s.value === symptom.severity)?.className}`}>
                                {symptom.text} - <strong>{symptom.severity.toUpperCase()}</strong>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* What do you want from the doctor */}
                <div className="mb-3 border p-3">
                    <label className="form-label">What do you want from the doctor?</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="bloodTest" />
                        <label className="form-check-label" htmlFor="bloodTest">Blood test</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="medication" />
                        <label className="form-check-label" htmlFor="medication">Medication</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="diagnosisPlan" defaultChecked />
                        <label className="form-check-label" htmlFor="diagnosisPlan">Diagnosis plan</label>
                    </div>
                </div>

                {/* Highlight previous experiences (Checkbox List) */}
                <div className="mb-3 border p-3">
                    <label className="form-label">Is any past experience you would like to highlight?</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="pastExperience1" />
                        <label className="form-check-label" htmlFor="pastExperience1">Previous surgery</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="pastExperience2" />
                        <label className="form-check-label" htmlFor="pastExperience2">Chronic illness</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="pastExperience3" />
                        <label className="form-check-label" htmlFor="pastExperience3">Family history of disease</label>
                    </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    );
};

export default MedicalForm;
