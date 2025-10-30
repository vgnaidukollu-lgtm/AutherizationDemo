# React Auth Demo (Vite + Context API)

A simple authentication & authorization demo using React Context API, React Router, and [Vite](https://vitejs.dev/).

## Features
- Login/logout via Context API
- Demo users with role-based access: admin, user
- Protected routes example
- React hooks where appropriate

## Demo accounts
- **admin** / **admin123**
- **user** / **user123**

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start dev server:**
   ```bash
   npm run dev
   ```
3. Navigate to [http://localhost:5173](http://localhost:5173)

## Project Structure
```
/src
  components/
    - LoginPage.jsx
    - Dashboard.jsx
    - AdminPanel.jsx
    - ProtectedRoute.jsx
  contexts/
    - AuthContext.jsx
  App.jsx
  main.jsx
  index.css
```

## Usage
- Login as "admin" or "user" for different access.
- Browse to `/dashboard` or `/admin` (admin only).
- Use logout to test session reset.

---
MIT License
