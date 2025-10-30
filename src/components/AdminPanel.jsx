import React from "react";

function AdminPanel() {
  return (
    <div className="card">
      <h2>Admin Panel</h2>
      <p style={{marginTop:12, color:'#164166'}}>This page is only accessible to <strong>admin</strong> users.</p>
    </div>
  );
}

export default AdminPanel;
