import React from "react";
import "./styles/global.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "pages/DashboardPage";
import LogingPage from "pages/LoadingPage";
import { UserProvider } from "./pageComponents/contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/login" element={<LogingPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
