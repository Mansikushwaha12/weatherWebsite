// components/CurrentWeather.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import sunny from '../images/sunny.png'; 
import rain from '../images/rain.png'; 
import "../App.css"; 

const CurrentWeather = ({ data }) => {
  const isSunny = ['clear', 'sun', 'scattered clouds', 'clouds', 'few clouds', 'broken clouds'].some(keyword =>
    data.weather[0].main.toLowerCase().includes(keyword)
  );

  return (
    <Card sx={{ marginTop: 3, color: 'black' }} className='currentCard'>
      <CardContent className='cardContent'>
        <div className='textSection'>
          <Typography variant="h1" sx={{ color: 'black' }} className='cityName'>{data.name}</Typography>
          <Typography variant="h3" sx={{ color: 'black', paddingLeft: '5px' }} className='cityName'>{data.main.temp}°C</Typography>
        </div>
        <img
          src={isSunny ? sunny : rain}
          alt={isSunny ? 'Sunny' : 'Rainy'}
          className='weatherImage'
        />
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;
