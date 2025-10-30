import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { login, isAuthenticated, user } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(username, password);
    if (!result.success) {
      setError(result.error);
    } else {
      setError("");
      navigate("/dashboard");
    }
  };

  if (isAuthenticated) {
    navigate("/dashboard");
    return null;
  }

  return (
    <div className="card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="form-error">{error}</div>}
        <button type="submit">Login</button>
      </form>
      <div style={{ marginTop: 16, color: '#666', fontSize: '0.96rem' }}>
        <div>Try <b>admin/admin123</b> or <b>user/user123</b></div>
      </div>
    </div>
  );
}
export default LoginPage;
