
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update setiap detik

    return () => clearInterval(interval); 
  }, []);


  return (
    <div className="App">
      <header className="App-header">
      
        <div>
          <p>{new Date().toLocaleDateString()}</p>
          <p>{new Date().toLocaleTimeString()}</p>
        </div>
        <img 
          src="https://api.duniagames.co.id/api/content/upload/file/21014120171671705634.jpg" 
          className="App-logo" 
          alt="logo" 
        />
        <p>
          Muhammad Farras Mas'ud
          20220140036
        </p>
        <a
          className="App-link"
          href="https://id-mpl.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ML
        </a>
      </header>
    </div>
  );
}

export default App;
