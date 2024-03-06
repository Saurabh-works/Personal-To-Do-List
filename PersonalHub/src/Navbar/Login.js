import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper, Link, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if username and password match the static values
        if (username === 'Saurabh' && password === '123') {
            setLoggedIn(true);
            navigate('/add');
        } else {
            setError(true);
        }
    };

    if (loggedIn) {
        return navigate('/add');
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '90vh',
                background: 'white',
                
            }}
        >
            <Paper elevation={15} sx={{ padding: '20px', width: '300px'}}>
                <Typography variant="h5" align="center" gutterBottom>
                    Welcome Back!
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
                        Login
                    </Button>
                    {error && (
                        <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>
                            Invalid username or password
                        </Typography>
                    )}
                </form>
                <Box sx={{ mt: 2 }}>
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Forgot Password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    );
}

export default Login;
