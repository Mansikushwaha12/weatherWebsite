// components/Welcome.js
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Welcome() {
  return (
    <Container style={{ textAlign: 'center', padding: '20px', color: '#fff' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to the Weather Dashboard!
      </Typography>
      <Typography variant="h6" gutterBottom>
        Use the search bar above to find current weather and forecasts for any city.
      </Typography>
      <Typography variant="body1">
        Enter a city name and press Enter to see the weather details.
      </Typography>
    </Container>
  );
}

export default Welcome;
