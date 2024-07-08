// App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import Welcome from './components/Welcome';
import Container from '@mui/material/Container';
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <Container 
      maxWidth="md" 
      style={{  color: '#fff', minHeight: '100vh', padding: '' }}
    >
      {!weatherData && <Welcome />}
      <SearchBar setWeatherData={setWeatherData} />
      {weatherData && (
        <>
          <CurrentWeather data={weatherData.current} />
          <p style={{fontSize:'28px', marginTop:'20px', textAlign:'center', color:'#000'}}>7 Days Forecast</p>

          {weatherData.forecast && <Forecast data={weatherData.forecast} />}
        </>
      )}
    </Container>
  );
}

export default App;
