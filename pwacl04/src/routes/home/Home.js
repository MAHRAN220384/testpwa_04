import React, { useEffect, useState } from 'react';
import './Home.css';

import { sizing, ThemeProvider, createTheme } from '@mui/system';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../images/icon192.png';

import NavigationList from '../components/NavigationList/NavigationList';

function Home() {
    
    const [bDrawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        setDrawerOpen(false);
    }, []);

    const handleDrawerToggle = (oEvent) => {
        bDrawerOpen ? setDrawerOpen(false) : setDrawerOpen(true);
    };

    return(
        <Box sx={{ display: 'flex' }}>
        <AppBar position="static" sx={{bgcolor: '#ffffff'}}>
          <Toolbar>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: -1, color: 'Gray' }}
              onClick={handleDrawerToggle}>
                <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>

            <img src={logo} id="logo" alt="Kitty Katty!"/>
            

          </Toolbar>
        </AppBar>
        <Drawer
            variant="temporary"
            open={bDrawerOpen}
            onClose={handleDrawerToggle}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Button>Text 1</Button>
                    <Button>Text 2</Button>
                </Box>
        </Drawer>
      </Box>

    );
}
export default Home;