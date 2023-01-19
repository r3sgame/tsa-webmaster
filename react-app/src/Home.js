import './App.css';

import Button from '@mui/material/Button';
import { Card, Paper, Typography } from '@mui/material';
import { Link } from '@mui/material';

import React from 'react';

function Home() {
    
    
  return (
    <Paper sx={{ width: '60%', p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
        <Typography variant='p'>Start your space excursions with GalactEcks. We provide service of the highest quality at every elevation. Check out what we have to offer!</Typography>
    </Paper>
  );
}

export default Home;
