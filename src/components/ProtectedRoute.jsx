import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, requiredRole }) {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (requiredRole && role !== requiredRole) {
    return (
      <div className="card">
        <div className="form-error" style={{margin:'30px 0',textAlign:'center'}}>Access Denied</div>
      </div>
    );
  }
  return children;
}

export default ProtectedRoute;
