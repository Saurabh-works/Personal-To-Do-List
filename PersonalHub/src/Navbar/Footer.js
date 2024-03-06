import React from 'react';
import { Typography, Link, Container, Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <Box sx={{ bgcolor: 'Black', color: 'white', py: 2, marginTop: '20px' }}>
            <Container>
                <Typography variant="h6" align="center" gutterBottom>
                    PERSONALHUB
                </Typography>
                <Typography variant="subtitle1" align="center" component="p">
                    Copyright &#9829; 2024 Saurabh Shinde
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Link color="inherit" href="#" sx={{ display: 'flex', alignItems: 'center', marginRight: 4 }}>
                        <InstagramIcon sx={{ marginRight: 1 }} />
                        Instagram
                    </Link>
                    <Link color="inherit" href="#" sx={{ display: 'flex', alignItems: 'center', marginRight: 4 }}>
                        <GitHubIcon sx={{ marginRight: 1 }} />
                        GitHub
                    </Link>
                    <Link color="inherit" href="#" sx={{ display: 'flex', alignItems: 'center' }}>
                        <LinkedInIcon sx={{ marginRight: 1 }} />
                        LinkedIn
                    </Link>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
