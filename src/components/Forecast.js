// components/Forecast.js
import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Forecast = ({ data }) => {
  const getWeatherEmoji = (description) => {
    switch (description.toLowerCase()) {
      case 'clear sky':
        return '☀️';
      case 'few clouds':
        return '🌤️';
      case 'overcast clouds':
      case 'broken clouds':
        return '🌥️';
      case 'shower rain':
        return '🌧️';
      case 'rain':
        return '🌧️';
      case 'thunderstorm':
        return '⛈️';
      case 'snow':
        return '❄️';
      case 'mist':
        return '🌫️';
      default:
        return '';
    }
  };

  const formatDate = (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleDateString('en-US', {
      weekday: 'short', 
      day: 'numeric',
      month: 'short', 
    });
  };

  return (
    <Grid container spacing={3} sx={{ marginTop: 3 }}>
      {data.map((forecastItem, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card sx={{ backgroundColor: '#fff', color: '#000' }}>
            <CardContent>
              <Typography variant="h6">{formatDate(forecastItem.dt_txt)}</Typography>
              <Typography variant="body1">Temp: {forecastItem.main.temp}°C</Typography>
              <Typography variant="body1">Feels Like: {forecastItem.main.feels_like}°C</Typography>
              <Typography variant="body1">
                Weather: {forecastItem.weather[0].description}{' '}
                {getWeatherEmoji(forecastItem.weather[0].description)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Forecast;
