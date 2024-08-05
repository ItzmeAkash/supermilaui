import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import VoiceBot from './Components/VoiceBot/VoiceBot';
import FrequentQuestions from './Components/FrequentQuestions/FrequentQuestions';
import SplashScreen from './Components/SplashScreen/SplashScreen';
import WelcomeLogin from './Components/WelcomeLogin/WelcomeLogin';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function SplashScreenWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (!sessionStorage.getItem('splashDisplayed')) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('splashDisplayed', 'true');
      }, 3000); // Set the splash screen duration (in milliseconds)
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  return loading ? <SplashScreen /> : children;
}

function App() {
  return (
    <Router>
      <div className="App">
        <SplashScreenWrapper>
          <Routes>
            <Route path="/welcomeLogin" element={<WelcomeLogin />} />
            <Route path="/MainPage" element={
              <>
                <NavBar />
                <header className="App-header">
                  <VoiceBot />
                  <FrequentQuestions />
                </header>
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="*" element={<Navigate to="/welcomeLogin" />} /> {/* Fallback route */}
          </Routes>
        </SplashScreenWrapper>
      </div>
    </Router>
  );
}

export default App;
