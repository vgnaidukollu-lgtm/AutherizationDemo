import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

function Dashboard() {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="card">
      <h2 style={{marginBottom:28}}>Dashboard</h2>
      <p style={{fontWeight:500}}>Hello, <b>{user.username}</b>!</p>
      <p>Your role: <b>{user.role}</b></p>
      {user.role === "admin" && (
        <p style={{ margin: '14px 0 14px 0', textAlign:'center' }}>
          <Link to="/admin" className="link">Go to Admin Panel</Link>
        </p>
      )}
      <button style={{ marginTop: 32 }} onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
