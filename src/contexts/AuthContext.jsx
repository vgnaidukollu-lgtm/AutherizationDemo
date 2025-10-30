import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "user", password: "user123", role: "user" },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const found = users.find(
      (u) => u.username === username && u.password === password
    );
    if (found) {
      setUser({ username: found.username, role: found.role });
      return { success: true };
    }
    return { success: false, error: "Invalid credentials" };
  };

  const logout = () => setUser(null);

  const value = {
    user,
    isAuthenticated: !!user,
    role: user?.role,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
