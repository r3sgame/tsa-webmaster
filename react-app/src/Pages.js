import React from 'react';
import './App.css';

import { Box, Button, Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';

import Banner from './Banner.png'
import Standard from './Standard.png'
import Fast from './Fast.png'
import Economy from './Economy.png'
import Private from './Private.png'

import ReactAnime from 'react-animejs'

import { isMobile } from "react-device-detect";

const {Anime} = ReactAnime

export default function Home() {
    
  return (
    <React.Fragment>
  <Anime
  initial={[
    {
      targets: "#Banner",
      keyframes: [
        {
          opacity: 0
        },
        {
          opacity: 1
        },
      ],
      easing:'spring',
      duration: 2500,
      loop: false
    }
  ]}
    >
    <img src={Banner} id="Banner" alt='Banner' className='App-banner'/>
    </Anime>

    <Paper sx={{ width: '60%', p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
        <Typography variant='p'>GalactEcks is the nation's largest provider of space tourism. Book your first (or next) interstellar voyage with us, and join a family of over 500K budding astronauts!</Typography>
    </Paper>

    <br/>
    <Typography variant='h5'>Our Legacy</Typography>
    <Paper sx={{ width: '60%', p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
        <Typography variant='p'>Founded in 2023, John Robertson had one goal: to ignite a common interest in space. To do this, he realized that space tourism needed to be accessible to every citizen. That's why GalactEcks ensures convenience and affordability at every step.</Typography>
    </Paper>

    <br/>
    <Typography variant='h5'>Our Ships</Typography>
    <Paper sx={{ width: '60%', p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
        <Typography variant='p'>GalactEcks' vehicles are designed to be just as efficient and convenient as the service. Using environmentally-friendly state-of-the-art technology, our ships provide a comfortable experience at every price point.</Typography>
        
        <br/><br/>
        <Button href='/catalog'><Typography variant='p'>Take a Look</Typography></Button>
    </Paper>
    </React.Fragment>
  );
}

export function Catalog() {
  return (
    <React.Fragment>
    <Typography id="Header" variant='h5' sx={{marginTop: 10}}>Catalog</Typography>

    <Paper sx={{ width: '60%', p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
        <Typography variant='p'>Get familiar with our lineup of trusted vehicles! We supply shuttles, rockets, and everything in between. Your ride will depend on selected price plans and routes.</Typography>
    </Paper>

    {!isMobile && <React.Fragment>
      <br/>
      <Typography id="Header" variant='h5'>Featured</Typography>
      <Card sx={{ display: 'flex', width: '62.5%', minHeight: 150 }}>
        <CardMedia component="img" sx={{ width: '100%', maxHeight: 300 }} image={Standard} alt="Vehicle"/>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
  
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Standard Cruiser
            </Typography>
            <Typography variant="h6" color="text.secondary" component="div">
              The base solution that works for any trip. With 20 chambers filling every amenity, you can't go wrong with this ship (Suited for 2-4 parties).
            </Typography>
          </CardContent>
  
        </Box>
      </Card>
  
      
  
      <br/>
      <Card sx={{ display: 'flex', width: '62.5%', minHeight: 150 }}>
        <CardMedia component="img" sx={{ width: '100%', maxHeight: 300  }} image={Private} alt="Vehicle"/>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
  
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Business Cruiser
            </Typography>
            <Typography variant="h6" color="text.secondary" component="div">
              Looking to maximize your enjoyment? The business cruiser is a private ship featuring 24 chambers, a personal crew, and luxurious accomodations, including premium food, drinks, activities, and comfort (Suited for 1 party).
            </Typography>
          </CardContent>
          
        </Box>
      </Card>
  
      <br/>
      <Typography id="Header" variant='h5'>Other Options</Typography>
      <Card variant='outline' sx={{ display: 'flex', width: '62.5%', minHeight: 150 }}>
        <CardMedia component="img" sx={{ width: '50%', maxHeight: 150 }} image={Fast} alt="Vehicle"/>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
  
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Speed Rocket
            </Typography>
            <Typography variant="p" color="text.secondary" component="div">
              Need a vehicle that will get you to your destination in an instant? Our five-chamber ship provides all accomodations while wasting no time (Suited for 2 parties).
            </Typography>
          </CardContent>
          
        </Box>
      </Card>
  
      <br/>
      <Card variant='outline' sx={{ display: 'flex', width: '62.5%', minHeight: 150 }}>
        <CardMedia component="img" sx={{ width: '50%', maxHeight: 150  }} image={Economy} alt="Vehicle"/>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
  
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Economy Shuttle
            </Typography>
            <Typography variant="p" color="text.secondary" component="div">
              On a budget? The economy cruiser is a public vessel featuring 25 chambers with basic amenities met (Suited for 5-7 parties).
            </Typography>
          </CardContent>
          
        </Box>
      </Card>
    </React.Fragment>}

    {isMobile && <React.Fragment>
      <br/>
      <Typography id="Header" variant='h5'>Featured</Typography>
      <Card sx={{ maxWidth: '80%' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Standard}
        title="Ship"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Standard Cruiser
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The base solution that works for any trip. With 20 chambers filling every amenity, you can't go wrong with this ship (Suited for 2-4 parties).
        </Typography>
      </CardContent>
    </Card>

    <br/>
      <Card sx={{ maxWidth: '80%' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Private}
        title="Ship"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Business Cruiser
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Looking to maximize your enjoyment? The business cruiser is a private ship featuring 24 chambers, a personal crew, and luxurious accomodations, including premium food, drinks, activities, and comfort (Suited for 1 party).
        </Typography>
      </CardContent>
    </Card>

    <br/>
      <Typography id="Header" variant='h5'>Other Options</Typography>

      <br/>
      <Card sx={{ maxWidth: '80%' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Fast}
        title="Ship"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Speed Rocket
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Need a vehicle that will get you to your destination in an instant? Our five-chamber ship provides all accomodations while wasting no time (Suited for 2 parties).
        </Typography>
      </CardContent>
    </Card>

    <br/>
      <Card sx={{ maxWidth: '80%' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Economy}
        title="Ship"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Economy Shuttle
        </Typography>
        <Typography variant="body2" color="text.secondary">
        On a budget? The economy cruiser is a public vessel featuring 25 chambers with basic amenities met (Suited for 5-7 parties).
        </Typography>
      </CardContent>
    </Card>
    </React.Fragment>}
    
    </React.Fragment>
  );
}

export function Pricing() {
  return(<React.Fragment>
    <Typography id="Header" variant='h5' sx={{marginTop: 10}}>Pricing</Typography>

    <Paper sx={{ width: '60%', p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
        <Typography variant='p'>Get familiar with our lineup of trusted vehicles! We supply shuttles, rockets, and everything in between. Your ride will depend on selected price plans and routes.</Typography>
    </Paper>
    </React.Fragment>);
}

export function Routes() {
return(<React.Fragment>
    <Typography id="Header" variant='h5' sx={{marginTop: 10}}>Routes</Typography>

    <Paper sx={{ width: '60%', p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
        <Typography variant='p'>Get familiar with our lineup of trusted vehicles! We supply shuttles, rockets, and everything in between. Your ride will depend on selected price plans and routes.</Typography>
    </Paper>
    </React.Fragment>);
}

export function Guidelines() {
  return(<React.Fragment>
    <Typography id="Header" variant='h5' sx={{marginTop: 10}}>Guidelines</Typography>

    <Paper sx={{ width: '60%', p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
        <Typography variant='p'>Get familiar with our lineup of trusted vehicles! We supply shuttles, rockets, and everything in between. Your ride will depend on selected price plans and routes.</Typography>
    </Paper>
    </React.Fragment>);
}