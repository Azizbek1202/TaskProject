import { Box, Container, Typography, Button, Grid } from '@mui/material'
import React from 'react'
import pic from '../assets/image/pic.png'
import styled from 'styled-components';

const GradientButton = styled(Button)({
    background: 'linear-gradient(45deg, #ffcc33 30%, #ff6b35 90%)',
    border: 0,
    borderRadius: 30,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    fontSize: '16px',
    textTransform: 'none',
    pointerEvents: 'none'
});

const Hero = () => {
    return (
        <Box sx={{ backgroundColor: "black" }}>
            <Container maxWidth="lg" style={{ padding: '20px', borderRadius: '10px', color: '#fff' }}>

                <Box display={{ xs: 'block', sm: 'flex' }} my={5}>
                    <Typography variant="h3" component="h1" gutterBottom style={{ color: '#fff', paddingRight: '30px', width: '100%' }}>
                        The Best Place To Find Your Dream <span style={{ color: '#ff6b35' }}>Property</span>
                    </Typography>
                    <Box sx={{ padding: { xs: '30px 0', sm: '30px' } }}>
                        <Typography variant="h6" component="p" gutterBottom fontSize={{ xs: '12px', sm: '14px' }}>
                            We are a real estate agency that will assist you in building your dreams, we will also assist in making a home design that suits your taste.
                        </Typography>
                        <GradientButton variant="contained" style={{ backgroundColor: '#ff6b35', marginTop: { xs: '20px', sm: 0 }, borderRadius: "50px", padding: { xs: '10px 20px', sm: '15px 30px' }, fontSize: { xs: '12px', sm: '16px' } }}>
                            Let's Discuss
                        </GradientButton>
                    </Box>
                </Box>
                <Box my={5}>
                    <img src={pic} alt="Dream Property" style={{ width: '100%', borderRadius: '10px' }} />
                </Box>
                <Grid container spacing={3} justifyContent="center" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', width: { xs: '100%', sm: '500px' }, borderRadius: '16px', border: "3px solid rgba(27, 26, 27, 0.4)", position: 'absolute', right: '50%', top: {xs: '40%', md: "110%", sm: '50%'}, transform: 'translateX(50%)' }}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h4" component="h2" style={{ color: 'white', textAlign: "center" }}>
                            300<span style={{ color: "#E97951" }}>+</span>
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                            Happy Clients
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h4" component="h2" style={{ color: 'white', textAlign: "center" }}>
                            200<span style={{ color: "#E97951" }}>+</span>
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                            Premium Product
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h4" component="h2" style={{ color: 'white', textAlign: "center" }}>
                            100<span style={{ color: "#E97951" }}>+</span>
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                            Award Winnings
                        </Typography>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    )
}

export default Hero;
