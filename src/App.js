import './assets/css/App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import React from 'react';
import './assets/css/App.css';
import Navbar from './components/Navbar/Navbar';


function App() {
  const google = window.google;
  const navigate = useNavigate();

  const handleCallbackResponse = (response) => {
    console.log('Encoded JWT ID token: ' + response.credential);
    navigate('/home'); // Redirect to Home after successful login
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_CLIENT_ID,
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById('sign-in-div'),
      { theme: "outline", size: "large" }
    );
  }, [google, navigate]);

  return (
    <div className="Login-page">
      <Navbar />
      <h1>Sign in With UMN Account</h1>
      <div className="Login-button" id="sign-in-div"></div>
    </div>
  );
}

export default App;