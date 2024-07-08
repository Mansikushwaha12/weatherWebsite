import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const API_KEY = 'ca242733777fbeeda330eccab501f4c4';

const SearchBar = ({ setWeatherData }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const fetchData = async () => {
    if (!city) return;

    try {
      setError('');
      const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

      const currentResponse = await axios.get(currentWeatherUrl);
      const forecastResponse = await axios.get(forecastUrl);

      // Filter forecast data to show only one entry per day
      const dailyForecasts = filterDailyForecasts(forecastResponse.data.list);

      setWeatherData({
        current: currentResponse.data,
        forecast: dailyForecasts,
      });
    } catch (error) {
      console.error(error);
      alert('Failed to fetch weather data. Please check the city name.');
    }
  };

  // Function to filter daily forecasts
  const filterDailyForecasts = (forecastList) => {
    const dailyForecasts = [];
    let lastDate = null;

    forecastList.forEach(forecast => {
      const date = new Date(forecast.dt_txt.split(' ')[0]); // Extract date from dt_txt

      // Check if it's a new day
      if (!lastDate || date.getDate() !== lastDate.getDate()) {
        dailyForecasts.push(forecast);
        lastDate = date;
      }
    });

    return dailyForecasts;
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <input
          value={city}
          onChange={handleInputChange}
          className='input'
          placeholder='Search for cities name...'
        />
        <button
          variant="contained"
          type="submit"
          className='search-button'
        >
          Search
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SearchBar;
