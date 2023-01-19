import './App.css';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link, Drawer } from '@mui/material';

import Home from './Home';

import React, {useState} from 'react';
import {
  Routes, Navigate, Route, BrowserRouter
} from 'react-router-dom';

import logo from './logo.svg';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#ffffff',
      },
      secondary: {
        main: '#f50057',
      },
    },
    typography: {
      h4: {
        color: 'white',
        fontFamily: "'Sono', sans-serif;",
        marginBottom: 10
      },
      h6: {
        color: 'white',
        fontFamily: "'Sono', sans-serif;",
        marginBottom: 10,
      },
      p: {
        fontFamily: "'Poppins', sans-serif;",
        marginBottom: 10,
        fontSize: 17.5
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

        {drawer && <Drawer open onClose>
          <Button>Hi</Button>
          <Button>Hi</Button>
          <Button>Hi</Button>
          <Button>Hi</Button>
        </Drawer>}
        
    <AppBar position="fixed">
        <Toolbar>
        <Button onClick={openDrawer}><img src={logo} alt='logo' className='App-logo'/></Button>
    
        </Toolbar>
      </AppBar>

      <BrowserRouter>
    <Routes>

    <Route path="/" exact element={<Home/>} />
<Route path="*" element={<Navigate to="/" replace />} />
</Routes>
</BrowserRouter>
</ThemeProvider>
    </div>
  );
}

export default App;