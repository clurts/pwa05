import React, { useEffect} from 'react';
import './App.css';
import OneSignal from "react-onesignal"
import LocationHook from "./components/LocationHook"
import PWAPrompt from 'react-ios-pwa-prompt'

function App() {

  useEffect(() => {
    OneSignal.init({
      appId: process.env.REACT_APP_ONESIGNAL,
    });
  }, []);


  return (
    <div className="App">
      <LocationHook />

      <PWAPrompt />
    </div>
  );
}

export default App;
