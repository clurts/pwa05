import React, { useEffect} from 'react';
import './App.css';
import OneSignal from "react-onesignal"
import Location from "./components/Location"
import Testlocalbase from "./components/Testlocalbase"
import PWAPrompt from 'react-ios-pwa-prompt'
import Map from "./components/Map"
import { Routes, Route, Link } from 'react-router-dom'
import NoMatch from './components/NoMatch';

function App() {

  useEffect(() => {
    OneSignal.init({
      appId: process.env.REACT_APP_ONESIGNAL,
    });
  }, []);


  return (
    <div className="App">
      <h1>Dette er min app!</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/map">Map</Link>
        <Link to="/database">Database</Link>
        <Link to="/fnyf">et Ottende sted...</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Location />} />
        <Route path="map" element={<Map />} />
        <Route path="database" element={<Testlocalbase />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      
      <footer>
        <p>Don't do it like this - do it properly!!!</p>
      </footer>

      <PWAPrompt />
    </div>
  );
}

export default App;
