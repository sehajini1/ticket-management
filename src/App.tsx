import React from "react";
import "./styles/global.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "pages/DashboardPage";
import { UserProvider } from "./pageComponents/contexts/UserContext";
function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
