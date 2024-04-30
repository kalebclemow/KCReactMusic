import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Audioplayer from './components/Audioplayer';
import './styles/index.css';
import './styles/custom-progress-bar.css';

function App() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Set showText to true after a short delay to trigger the fade-in effect
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      <div className="container">
        <Audioplayer />
        <footer className={`footer ${showText ? 'show' : ''}`}>
          <p> Kaleb's React Music Player App </p>
        </footer>
      </div>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);