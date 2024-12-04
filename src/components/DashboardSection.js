import React from "react";
import "./DashboardSection.css";

function DashboardSection({ title, content }) {
  return (
    <div className="dashboard-section">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{content}</div>
    </div>
  );
}

export default DashboardSection;
