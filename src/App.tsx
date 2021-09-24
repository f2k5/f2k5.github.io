import React from 'react';
import './App.css';
import FirstPageProfileSection from "../src/components/FirstPageProfileSection/FirstPageProfileSection";
import SecondPageProjectsSection from "../src/components/SecondPageProjectsSection/SecondPageProjectsSection";

function App() {
  return (
    <div className="App">
      <FirstPageProfileSection />
      <SecondPageProjectsSection />
    </div>
  );
}

export default App;
