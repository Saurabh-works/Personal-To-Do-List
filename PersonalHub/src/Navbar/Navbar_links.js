import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from '../Image/dragon.png';

function Navbar_links() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <img src={logo} alt="logo" style={{ width: '95px', marginRight: '10px' }} />
                    <Typography variant="h6" component={NavLink} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>PERSONALHUB</Typography>
                </Box>
                <Box>
                    <Button component={NavLink} to="/add" color="inherit" style={{ textDecoration: 'none',marginRight: '13px', fontSize: '19px' }}>Home</Button>
                    <Button component={NavLink} to="/view" color="inherit" style={{ textDecoration: 'none', marginRight: '13px', fontSize: '19px' }}>View Tasks</Button>
                    <Button component={NavLink} to="/Imp" color="inherit" style={{ textDecoration: 'none', marginRight: '13px', fontSize: '19px' }}>Important Task</Button>
                    <Button component={NavLink} to="/" color="inherit" style={{ textDecoration: 'none', marginRight: '13px', fontSize: '19px' }}>Login</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar_links;
