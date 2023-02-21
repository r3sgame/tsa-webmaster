import './App.css';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Drawer, List, ListItem, Divider,  ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import {AirplanemodeActiveTwoTone, ArrowBackIosNewTwoTone, ArticleTwoTone, HomeTwoTone, LocalOfferTwoTone, MenuTwoTone, RouteTwoTone} from '@mui/icons-material';

import Home, { Catalog, Guidelines, Pricing, Routing } from './Pages';

import React, {useState} from 'react';
import {
  Routes, Navigate, Route, BrowserRouter
} from 'react-router-dom';

import { isMobile } from "react-device-detect";

import Footer from './Footer.png'

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#844de4',
      },
      secondary: {
        main: '#844de4',
      },
      neutral: {
        main: '#f50000',
      },
    },
    typography: {
      h4: {
        color: 'white',
        fontFamily: "'Kanit', sans-serif;",
        marginBottom: 10
      },
      h5: {
        color: 'white',
        fontFamily: "'Kanit', sans-serif;",
        marginBottom: 10
      },
      h6: {
        color: 'white',
        fontFamily: "'Ubuntu', sans-serif;",
        marginBottom: 10,
      },
      p: {
        fontFamily: "'Ubuntu', sans-serif;",
        marginBottom: 10,
        fontSize: 17.5,
        color: 'white'
      },
      subtitle1: {
        fontFamily: "'Kanit', sans-serif;",
        marginTop: 10,
        color: '#11ff00',
        fontSize: 25,
      },
      subtitle2: {
        fontFamily: "'Kanit', sans-serif;",
        marginTop: 10,
        color: '#f50000',
        fontSize: 25,
      },
    },
  });

  const [drawer, setDrawer] = useState(false);

  function openDrawer() {
    setDrawer(true);
  }

  function closeDrawer() {
    setDrawer(false);
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>

        {drawer && isMobile && <Drawer open PaperProps={{sx: {width: '100%'}}}>
        <Toolbar />
      <Divider />
      <List>
      <ListItem key='Home' disablePadding>
            <ListItemButton href='/'>
              <ListItemIcon>
                <HomeTwoTone />
              </ListItemIcon>
              <ListItemText variant='p' primary='Home' />
            </ListItemButton>
          </ListItem>

          <ListItem key='Catalog' disablePadding>
            <ListItemButton href='/catalog'>
              <ListItemIcon>
                <AirplanemodeActiveTwoTone />
              </ListItemIcon>
              <ListItemText variant='p' primary='Catalog' />
            </ListItemButton>
          </ListItem>

          <ListItem key='Pricing' disablePadding>
            <ListItemButton href='/pricing'>
              <ListItemIcon>
                <LocalOfferTwoTone />
              </ListItemIcon>
              <ListItemText variant='p' primary='Pricing' />
            </ListItemButton>
          </ListItem>

          <ListItem key='Routes' disablePadding>
            <ListItemButton href='/routes'>
              <ListItemIcon>
                <RouteTwoTone />
              </ListItemIcon>
              <ListItemText variant='p' primary='Routes' />
            </ListItemButton>
          </ListItem>

          <ListItem key='Guidelines' disablePadding>
            <ListItemButton href='/guidelines'>
              <ListItemIcon>
                <ArticleTwoTone />
              </ListItemIcon>
              <ListItemText variant='p' primary='Guidelines' />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />

      <ListItem key='Close' disablePadding>
            <ListItemButton onClick={closeDrawer}>
              <ListItemIcon>
                <ArrowBackIosNewTwoTone />
              </ListItemIcon>
              <ListItemText variant='p' primary='Close' />
            </ListItemButton>
          </ListItem>
        </Drawer>}

        {drawer && !isMobile && <Drawer open PaperProps={{sx: {width: '25%'}}}>
        <Toolbar />
      <Divider />
      <List>
          <ListItem key='Home' disablePadding>
            <ListItemButton href='/'>
              <ListItemIcon>
                <HomeTwoTone />
              </ListItemIcon>
              <ListItemText variant='p' primary='Home' />
            </ListItemButton>
          </ListItem>

          <ListItem key='Catalog' disablePadding>
            <ListItemButton href='/catalog'>
              <ListItemIcon>
                <AirplanemodeActiveTwoTone />
              </ListItemIcon>
              <ListItemText variant='p' primary='Catalog' />
            </ListItemButton>
          </ListItem>

          <ListItem key='Pricing' disablePadding>
            <ListItemButton href='/pricing'>
              <ListItemIcon>
                <LocalOfferTwoTone />
              </ListItemIcon>
              <ListItemText variant='p' primary='Pricing' />
            </ListItemButton>
          </ListItem>

          <ListItem key='Routes' disablePadding>
            <ListItemButton href='/routes'>
              <ListItemIcon>
                <RouteTwoTone />
              </ListItemIcon>
              <ListItemText variant='p' primary='Routes' />
            </ListItemButton>
          </ListItem>

          <ListItem key='Guidelines' disablePadding>
            <ListItemButton href='/guidelines'>
              <ListItemIcon>
                <ArticleTwoTone />
              </ListItemIcon>
              <ListItemText variant='p' primary='Guidelines' />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />

      

      <ListItem key='Close' disablePadding>
            <ListItemButton onClick={closeDrawer}>
              <ListItemIcon>
                <ArrowBackIosNewTwoTone />
              </ListItemIcon>
              <ListItemText variant='p' primary='Close' />
            </ListItemButton>
          </ListItem>
        </Drawer>}
        
    <AppBar position="fixed">
        <Toolbar>
        <Button onClick={openDrawer}><MenuTwoTone/></Button>
    
        </Toolbar>
      </AppBar>

      <BrowserRouter>
    <Routes>

    <Route path="/" exact element={<Home/>} />
    <Route path="/catalog" exact element={<Catalog/>} />
    <Route path="/pricing" exact element={<Pricing/>} />
    <Route path="/routes" exact element={<Routing/>} />
    <Route path="/guidelines" exact element={<Guidelines/>} />

    <Route path="*" element={<Navigate to="/" replace />} />
</Routes>
</BrowserRouter>
<img src={Footer} alt='Footer' className='App-footer'/>
</ThemeProvider>
    </div>
  );
}

export default App;