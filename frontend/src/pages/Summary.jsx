import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Summary = () => {
    return (
      <div className="container mt-4">
        <h2 className="text-center">Health & Wellness Plan</h2>
        
        <div className="card mb-3">
          <div className="card-header bg-primary text-white">Summary</div>
          <div className="card-body">
            <p className="card-text">You have been diagnosed with mild hypertension. To manage this, you should monitor your blood pressure regularly, reduce salt intake, and maintain a balanced diet. If your symptoms worsen, follow the treatment plan below.</p>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-header bg-success text-white">Plan</div>
          <div className="card-body">
            <p className="card-text">Take Amlodipine 5mg once daily in the morning with water. Continue this for 30 days. Avoid excessive caffeine and alcohol. Engage in at least 30 minutes of moderate exercise daily. Keep a log of your blood pressure readings.</p>
          </div>
        </div>
        
        <div className="card mb-3">
          <div className="card-header bg-warning text-dark">If plan doesn't go well, we should... </div>
          <div className="card-body">
            <p className="card-text">If your blood pressure remains high (above 140/90) for more than 3 consecutive days, contact your GP or call NHS 111 for further advice. If you experience severe chest pain, dizziness, or shortness of breath, call 999 immediately for emergency assistance.</p>          
          </div>
        </div>
      </div>
    );
  };

export default Summary;
