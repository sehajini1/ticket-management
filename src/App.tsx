import React, { useEffect, useState } from 'react';
import "./styles/global.css"
// import MyCard from './pages/ChatPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from 'pages/DashboardPage';
import { SunIcon, MoonIcon} from '@heroicons/react/24/solid'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex justify-end p-4">
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {darkMode ? 'Dark Mode' : 'Light Mode'}
          </span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none bg-gray-300 dark:bg-gray-600"
          >
            <span
              className={`${
                darkMode ? 'translate-x-6' : 'translate-x-1'
              } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300`}
            />
            <span className="absolute left-1.5 top-1.5 text-gray-500 dark:text-gray-200">
              {darkMode ? <MoonIcon className="w-4 h-4" /> : <SunIcon className="w-4 h-4" />}
            </span>
          </button>
        </div>
      </header>

      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
