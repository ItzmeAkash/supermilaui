import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import VoiceBot from './Components/VoiceBot/VoiceBot';
import FrequentQuestions from './Components/FrequentQuestions/FrequentQuestions';
import SplashScreen from './Components/SplashScreen/SplashScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Set the splash screen duration (in milliseconds)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <NavBar />
          <header className="App-header">
            <VoiceBot />
            <FrequentQuestions />
          </header>
        </>
      )}
    </div>
  );
}

export default App;
