import React from 'react';
import './App.css';

import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, CardMedia, List, ListItem, ListSubheader, Paper, Typography } from '@mui/material';

import Banner from './Banner.png'
import Standard from './Standard.png'
import Fast from './Fast.png'
import Economy from './Economy.png'
import Private from './Private.png'

import { isMobile } from "react-device-detect";
import { ExpandMore } from '@mui/icons-material';

export default function Home() {
    
  return (
    <React.Fragment>
    <img src={Banner} id="Banner" alt='Banner' className='App-banner'/>
    
    <Box sx={{ textAlign: 'center', width: '80%', p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
        <Typography variant='p'>GalactEcks is the nation's largest provider of space tourism. Book your first (or next) interstellar voyage with us, and join a family of over 500K budding astronauts!</Typography>
    </Box>

    {isMobile && <React.Fragment><Typography variant='h5' sx={{marginTop: 2.5}}>Our Legacy</Typography>
    <Paper sx={{ width: '60%', p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
        <Typography variant='p'>Founded in 2023, John Robertson had one goal: to ignite a common interest in space. To do this, he realized that space tourism needed to be accessible to every citizen. That's why GalactEcks ensures convenience and affordability at every step.</Typography>
    </Paper>
    
    <Typography variant='h5' sx={{marginTop: 2.5}}>Our Ships</Typography>
    <Paper sx={{ width: '60%', p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
        <Typography variant='p'>GalactEcks' vehicles are designed to be just as efficient and convenient as the service. Using environmentally-friendly state-of-the-art technology, our ships provide a comfortable experience at every price point.</Typography>
        
        <br/><br/>
        <Button href='/catalog'><Typography variant='p'>Take a Look</Typography></Button>
    </Paper>
    </React.Fragment>}
    
{!isMobile && <React.Fragment><Card sx={{ display: 'flex', width: '62.5%', minHeight: 150 }}>
        <CardMedia component="img" sx={{ width: '100%', maxHeight: 250 }} image={Standard} alt="Vehicle"/>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
  
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Our Legacy
            </Typography>
            <Typography variant="h6" color="text.secondary" component="div">
            Founded in 2023, John Robertson had one goal: to ignite a common interest in space. To do this, he realized that space tourism needed to be accessible to every citizen. That's why GalactEcks ensures convenience and affordability at every step.
            </Typography>
          </CardContent>
  
        </Box>
      </Card>
      
      <Card sx={{ marginTop: 2.5, display: 'flex', width: '62.5%', minHeight: 150 }}>
        <CardMedia component="img" sx={{ width: '100%', maxHeight: 250 }} image={Standard} alt="Vehicle"/>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
  
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Our Ships
            </Typography>
            <Typography variant="h6" color="text.secondary" component="div">
            GalactEcks' vehicles are designed to be just as efficient and convenient as the service. Using environmentally-friendly state-of-the-art technology, our ships provide a comfortable experience at every price point.
            </Typography>
          </CardContent>
  
        </Box>
      </Card>
      </React.Fragment>}

    
    </React.Fragment>
  );
}

export function Catalog() {
  return (
    <React.Fragment>
    <Typography id="Header" variant='h5' sx={{marginTop: 10}}>Catalog</Typography>

    <Box sx={{ textAlign: 'center', width: '80%', p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
        <Typography variant='p'>Get familiar with our lineup of trusted vehicles! We supply shuttles, rockets, and everything in between. Your ride will depend on selected price plans and routes.</Typography>
    </Box>

    {!isMobile && <React.Fragment>
      <Typography id="Header" variant='h5' sx={{marginTop: 2.5 }}>Featured</Typography>
      <Card sx={{ display: 'flex', width: '62.5%', minHeight: 150 }}>
        <CardMedia component="img" sx={{ width: '100%', maxHeight: 200 }} image={Standard} alt="Vehicle"/>
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
  
      
      <Card sx={{ display: 'flex', width: '62.5%', minHeight: 150, marginTop: 2.5  }}>
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
  

      <Typography id="Header" variant='h5' sx={{marginTop: 2.5 }}>Other Options</Typography>
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
  
      <Card variant='outline' sx={{ display: 'flex', width: '62.5%', minHeight: 150, marginTop: 2.5 }}>
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
      <Typography id="Header" variant='h5' sx={{marginTop: 2.5}}>Featured</Typography>
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

    <Card sx={{ maxWidth: '80%', marginTop: 2.5 }}>
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

      <Typography sx={{marginTop:2.5}} id="Header" variant='h5'>Other Options</Typography>

      <Card sx={{ maxWidth: '80%', marginTop: 2.5 }}>
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

      <Card sx={{ maxWidth: '80%', marginTop: 2.5 }}>
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
  return(

    <React.Fragment>
    <Typography id="Header" variant='h5' sx={{marginTop: 10}}>Pricing</Typography>

    <Box sx={{ textAlign: 'center', width: '80%', p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
        <Typography variant='p'>GalactEcks strives to provide affordable adventures for everyone. Check out our price tiers here, or consider a specialty plan!</Typography>
    </Box>
    
    {!isMobile && <React.Fragment>

    <Card sx={{ display: 'flex', width: '62.5%', minHeight: 150, marginTop: 2.5 }}>
        <CardMedia component="img" sx={{ width: '75%', maxHeight: 250  }} image={Private} alt="Vehicle"/>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
  
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Exosphere Class
            </Typography>
            <Typography variant="h6" color="text.secondary" component="div">
              Get the best experience with our highest-level plan, allowing access to all routes, ships, and private chambers ($1500 per person).
            </Typography>
          </CardContent>
          
        </Box>
      </Card>

      <Card sx={{ display: 'flex', width: '62.5%', minHeight: 150, marginTop: 2.5 }}>
        <CardMedia component="img" sx={{ width: '100%', maxHeight: 300  }} image={Private} alt="Vehicle"/>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
  
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Stratosphere Class
            </Typography>
            <Typography variant="h6" color="text.secondary" component="div">
              The Stratosphere Plan provides a luxurious experience while remaining affordable. Travelers receive access to all cruisers, Mission Mars, Meteor Journey, and Lunar Excursion ($1000 per person).
            </Typography>
          </CardContent>
          
        </Box>
      </Card>

      <Card sx={{ display: 'flex', width: '62.5%', minHeight: 150, marginTop: 2.5 }}>
        <CardMedia component="img" sx={{ width: '100%', maxHeight: 300  }} image={Private} alt="Vehicle"/>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
  
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Base Class
            </Typography>
            <Typography variant="h6" color="text.secondary" component="div">
              This level serves as a base plan that works for every group. Passengers in this class attain access to the Economy Cruiser, Standard Cruiser, Meteor Journey, and Lunar Excursion ($750 per person).
            </Typography>
          </CardContent>
          
        </Box>
      </Card>
    
    </React.Fragment>}

    {isMobile && <React.Fragment>
      <Card sx={{ maxWidth: '80%' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Standard}
        title="Ship"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Exosphere Class
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Get the best experience with our highest-level plan, allowing access to all routes, ships, and private chambers ($1500 per person).
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: '80%', marginTop: 2.5 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Private}
        title="Ship"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Stratosphere Class
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Stratosphere Plan provides a luxurious experience while remaining affordable. Travelers receive access to all cruisers, Standard Spacewalk, Meteor Journey, and Lunar Excursion ($1000 per person).
        </Typography>
      </CardContent>
    </Card>

      <Typography sx={{marginTop:2.5}} id="Header" variant='h5'>Other Options</Typography>

      <Card sx={{ maxWidth: '80%', marginTop: 2.5 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Fast}
        title="Ship"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Base Class
        </Typography>
        <Typography variant="body2" color="text.secondary">
        This level serves as a base plan that works for every group. Passengers in this class attain access to the Economy Cruiser, Standard Cruiser, Meteor Journey, and Standard Spacewalk ($750 per person).
        </Typography>
      </CardContent>
    </Card>
    </React.Fragment>}
    

    </React.Fragment>);
}

export function Routing() {
return(<React.Fragment>
    <Typography id="Header" variant='h5' sx={{marginTop: 10}}>Routes</Typography>

    <Box sx={{ textAlign: 'center', width: '80%', p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
        <Typography variant='p'>GalactEcks provides carefully-planned stops designed to maximize enjoyment. Please keep in mind that certain routes require the exosphere or stratosphere plans.</Typography>
    </Box>

    <Typography id="Header" variant='h5' sx={{marginTop: 2.5}}>Exosphere-Required Routes</Typography>
      <Accordion sx={{ width: '60%', flexDirection: 'row'}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography sx={{ width: '15%', flexShrink: 0 }}>Mission Mars</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Journey to the colonies of Mars!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This route goes from Earth to Mars. From there, passengers will get to explore the Martian colonies and even venture out (with a tour guide).
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ width: '60%', flexDirection: 'row'}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography sx={{ width: '15%', flexShrink: 0 }}>Venus Venture</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Fly over the skies of Venus!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Venus Venture takes passengers on a round trip over Earth and a journey to Venus. The ship will hover over the planet before heading back.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Typography id="Header" variant='h5' sx={{marginTop: 2.5}}>Stratosphere-Required Routes</Typography>
      <Accordion sx={{ width: '60%', flexDirection: 'row'}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography sx={{ width: '15%', flexShrink: 0 }}>Lunar Excursion</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Relive the moon landing!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Lunar Excursion consists of a journey from the Earth to the Moon. From there, passengers can leave the ship to explore the Moon with a tour guide.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Typography id="Header" variant='h5' sx={{marginTop: 2.5}}>Base Routes</Typography>
      <Accordion sx={{ width: '60%', flexDirection: 'row'}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography sx={{ width: '15%', flexShrink: 0 }}>Meteor Trip</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Take a trip to the Asteroid Belt!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In this trip, passengers are taken to the wonder of the inner asteriod belt. The ship will fly around the area before returning to Earth.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ width: '60%', flexDirection: 'row'}}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography sx={{ width: '15%', flexShrink: 0 }}>Standard Spacewalk</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Soar through space!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Serving as the go-to excursion, passengers on this trip will be taken on a ride travelling near several bodies/satellites, providing stunning views.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </React.Fragment>);
}

export function Guidelines() {
  return(<React.Fragment>
    <Typography id="Header" variant='h5' sx={{marginTop: 10}}>Guidelines</Typography>

    <Box sx={{ textAlign: 'center', width: '80%', p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
        <Typography variant='p'>Before hopping on board, it's important to know how your journey will work. Find out here!</Typography>
    </Box>

    <Typography id="Header" variant='h5' sx={{marginTop: 2.5}}>Launch</Typography>

    <Paper sx={{ width: '60%', p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
        <Typography variant='p'>GalactEcks excursions begin by boarding your assigned ship at the given time. Once all passengers have entered, a countdown will be initiated, and the vehicle will take off into space. From there, you will be on your way to your chosen attractions! You will be carefully guided by the crew, as the change in gravity can be jarring.</Typography>
    </Paper>

    <Typography id="Header" variant='h5' sx={{marginTop: 2.5}}>Safety</Typography>

    <Paper sx={{ width: '60%', p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
        <Typography variant='p'>While on the ship, we ask that you follow these rules to ensure the safety of yourself and others.</Typography>
        
        <List sx = {{listStyleType: 'disc', pl: 2, '& .MuiListItem-root': {display: 'list-item',},}}>
      <ListSubheader>
      <Typography variant='subtitle1'>Do:</Typography>
      </ListSubheader>
      <ListItem><Typography variant='p'>Store any carry-on luggage, buckle your seatbelt, and stay in your seat when in take-off and landing.</Typography></ListItem>
      <ListItem><Typography variant='p'>Respond accordingly and politely to staff prompts.</Typography></ListItem>
      <ListItem><Typography variant='p'>Act courteously towards your fellow passengers.</Typography></ListItem>

      <ListSubheader>
      <Typography variant='subtitle2'>Don't:</Typography>
      </ListSubheader>
      <ListItem><Typography variant='p'>Remove your issued uniform at ANY time.</Typography></ListItem>
      <ListItem><Typography variant='p'>Engage in horesplay or other disruptive/damaging behavior.</Typography></ListItem>
      <ListItem><Typography variant='p'>Exit or enter the spacecraft without permission.</Typography></ListItem>
    </List>
    </Paper>

    <Typography id="Header" variant='h5' sx={{marginTop: 2.5}}>Recovery</Typography>

    <Paper sx={{ width: '60%', p: 2.5, flexDirection: 'row', overflow: 'auto'}}>
        <Typography variant='p'>Once your trip is finished, the ship will land back onto Earth. Passengers will be asked to buckle their seatbelts and safely store any loose luggage. Similarly to the launch process, the crew will help you accommodate to the gravity shift.</Typography>
    </Paper>
    </React.Fragment>);
}