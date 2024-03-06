import React, {useState, useEffect} from "react";
import { NavLink, Outlet } from 'react-router-dom';
import { Card, Button, CardMedia, CardContent, Typography, CardActions, Grid } from "@mui/material";
import AvengerImg from '../Image/Avenger.jpg';
import DataImg from '../Image/Data.jpg';
import LinkImg from '../Image/Link.jpg';



function Important_Sessions() {
    
    return (
        <>
            <Typography variant="h4" align="center" marginTop={3}>Important Session</Typography>
            <Grid container spacing={4} justifyContent="center" marginBottom={8} marginTop={3}>
                <Grid item sx={{ marginRight: 8 }}> {/* Add margin to the right of each item */}
                    <Card sx={{ maxWidth: 380 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={LinkImg}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Links
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Central hub for accessing project resources, enhancing productivity, and facilitating
                                collaboration among team members.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><NavLink style={{textDecoration:'none', color:'gray', fontWeight:'bold', padding:'1px'}} to={'link'} >Show Link Session</NavLink></Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item> {/* No margin on the last item */}
                    <Card sx={{ maxWidth: 380 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={DataImg}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Personal Data
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Secure enclave for managing and safeguarding sensitive personal information, 
                            ensuring compliance with privacy regulations.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><NavLink style={{textDecoration:'none', color:'gray', fontWeight:'bold', padding:'1px'}} to={'data'} >Show Data Session </NavLink></Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Outlet></Outlet>
             
        </>
    )
}
export default Important_Sessions;





