import './assets/css/App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar/Navbar';

function App() {
  const navigate = useNavigate();

  const handleCallbackResponse = (response) => {
    console.log('Encoded JWT ID token: ' + response.credential);
    navigate('/home'); // Redirect to Home after successful login
  }

  useEffect(() => {
    // Function to load the Google API script
    const loadGoogleScript = () => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        window.google.accounts.id.initialize({
          client_id: process.env.REACT_APP_CLIENT_ID,
          callback: handleCallbackResponse
        });

        window.google.accounts.id.renderButton(
          document.getElementById('sign-in-div'),
          { theme: "outline", size: "large" }
        );
      };
      document.body.appendChild(script);
    };

    // Load the Google API script
    loadGoogleScript();
  }, [navigate]);

  return (
    <div className="Login-page">
      <Navbar />
      <h1>Sign in With UMN Account</h1>
      <div className="Login-button" id="sign-in-div"></div>
    </div>
  );
}

export default App;