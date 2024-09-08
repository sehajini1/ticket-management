import React from "react";
import "./styles/global.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import DashboardPage from "pages/DashboardPage";
//import LogingPage from "pages/LoadingPage";
import { UserProvider } from "./pageComponents/contexts/UserContext";
import LogingPage from "pages/LoadingPage";
// import { AuthProvider } from "pageComponents/contexts/AuthContext";
// import PrivateRoute from "PrivateRoute";

function App() {
  
  return (
    // <AuthProvider>
    <UserProvider>
    <Router>
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<LogingPage />} />

            {/* Protected routes */}
            {/* <Route element={<PrivateRoute />}> */}
              <Route path="/" element={<DashboardPage />} />
            {/* </Route> */}

            {/* Fallback route */}
            {/* <Route path="*" element={<Navigate to="/login" />} /> */}
          </Routes>
        </Router>
    </UserProvider>
    // </AuthProvider>
  );
}

export default App;
