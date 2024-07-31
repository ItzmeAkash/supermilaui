import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import VoiceBot from './Components/VoiceBot/VoiceBot';
import FrequentQuestions from './FrequentQuestions/FrequentQuestions';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
       <VoiceBot/>
       <FrequentQuestions />
      </header>
    </div>
  );
}

export default App;
