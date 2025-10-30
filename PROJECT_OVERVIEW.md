# Project Overview: React Auth Demo (Vite + Context API)

This project demonstrates how to use the React Context API for user authentication and authorization in a modern Vite-based React application.

## 1. Authentication Flow

1. **Login Page:**
   - The user visits `/login` and enters their credentials (either admin or user).
   - The login form calls `login(username, password)` from the global `AuthContext`.
   - If credentials are valid (checked against a mock user database), the context updates the `user` and `role` states, making the user authenticated across the app.
   - On success, the user is redirected to `/dashboard`.

2. **State Management:**
   - The authentication state is managed globally using React's Context API (`AuthContext`).
   - State includes: `user`, `isAuthenticated`, and `role`.
   - The context provides `login` and `logout` methods to mutate this state.

## 2. Authorization & Routing Flow

1. **ProtectedRoute Component:**
   - Wrapping a route or page with `ProtectedRoute` ensures only logged-in users or users with a specific role can access it.
   - If a user visits a protected route while unauthenticated, they are redirected to `/login`.
   - If a route requires a specific role (e.g., admin), users without that role see an 'Access Denied' message.

2. **Role-Based Views:**
   - After login, all users land on `/dashboard`.
   - Admin users see a special link to `/admin` (the admin panel).
   - Only admin users can view the admin panel; regular users are denied access.

3. **Logout:**
   - Accessible from the dashboard, the logout function resets the authentication state and routes the user back to `/login`.

## 3. Component Structure

- `src/contexts/AuthContext.jsx`: Contains all login, logout, and authentication state logic.
- `src/components/LoginPage.jsx`: Handles user login UI and logic.
- `src/components/ProtectedRoute.jsx`: Guards routes by authentication/authorization.
- `src/components/Dashboard.jsx`: Displays logged-in user info; links to admin when appropriate.
- `src/components/AdminPanel.jsx`: Only visible to admin users.
- `src/App.jsx`: Sets up `BrowserRouter` and all routes; provides the context.
- `src/main.jsx`: App entry point for Vite.

## 4. Mock User Database

- No backend is involved in this demo.
- Users are hardcoded inside `AuthContext.jsx` for demonstration.
    - `admin` / `admin123` (role: admin)
    - `user` / `user123` (role: user)

## 5. Usage Summary
- Start at `/login` → Authenticate → Land on Dashboard
- Dashboard shows your username/role and admin link if allowed
- `/admin` is accessible only for admins
- Logout clears state and sends back to login

---
This structure makes it easy to extend with real backend auth, persistent sessions, additional roles, or more granular permissions!
