import React, { useEffect} from 'react';
import './App.css';
import OneSignal from "react-onesignal"
import Location from "./components/Location"

function App() {

  useEffect(() => {
    OneSignal.init({
      appId: process.env.REACT_APP_ONESIGNAL,
    });
  }, []);


  return (
    <div className="App">
      <Location />
    </div>
  );
}

export default App;
