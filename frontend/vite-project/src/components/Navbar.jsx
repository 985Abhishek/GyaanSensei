// src/components/Navbar.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircle from '@mui/icons-material/AccountCircle'; 
import Brightness4 from '@mui/icons-material/Brightness4'; 

const Navbar = ({ onDrawerToggle }) => {
    const [darkMode, setDarkMode] = useState(false); 

    const handleToggleDarkMode = () => {
        setDarkMode(!darkMode);
        // You can add logic here to apply dark mode styles to your app
        document.body.style.backgroundColor = darkMode ? '#fff' : '#333'; 
        document.body.style.color = darkMode ? '#000' : '#fff'; 
    };

    return (
        <AppBar position="static">
            <Toolbar style={{justifyContent:"center"}}>
                <IconButton edge="start" color="inherit" onClick={onDrawerToggle}>
                    <MenuIcon />
                </IconButton>
                <IconButton color="inherit" href="/">
                    <HomeIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: 1,  fontSize: "30px", fontStyle:'oblique' }}>
                  Gyaan Sensei
                </Typography>
                <IconButton color="inherit">
                    <AccountCircle /> 
                </IconButton>
                <IconButton color="inherit" onClick={handleToggleDarkMode}>
                    <Brightness4 /> 
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;