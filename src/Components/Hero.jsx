import { Box, Typography, Button, Grid } from '@mui/material'
import React from 'react'
import pic from '../assets/image/pic.png'
import styled from 'styled-components';

const GradientButton = styled(Button)({
    background: 'linear-gradient(102.97deg, #FFD88C 0%, #E45826 100%)',
    border: 0,
    borderRadius: 50,
    color: 'rgba(255, 255, 255, 1)',
    width: '138px',
    height: "60px",
    padding: '18px, 24px, 18px, 24px',
    fontSize: '16px',
    lineHeight: '24px',
    gap: '10px',
});

const Hero = () => {
    return (
        <Box sx={{ backgroundColor: "rgba(22, 21, 22, 1)", paddingTop:"75px", paddingBottom: "44px"}}>
                <Box sx={{height: "110px", position: "absolute", boxShadow: "10px 10px 400px 180px rgba(217, 217, 217, 1)",  borderRadius: "50%", left:"-55px", top: "230px", opacity:"0.3"}}>
                </Box>
                <Box display={{ xs: 'block', sm: 'flex' }} width="82vw">
                    <Typography fontFamily="Poppins"variant="h3" component="h1" gutterBottom sx={{ fontSize:"64px", fontWeight:"600", color: '#fff', lineHeight: "74px" }}>
                        The Best Place To Find Your Dream <span style={{ color: '#ff6b35' }}>Property</span>
                    </Typography>
                    <Box sx={{padding:"45px 76px 45px 129px"}}>
                        <Typography fontFamily="Poppins"variant="h6" component="p" gutterBottom sx={{fontSize:"16px", fontWeight:"400", lineHeight: "26px", marginBottom: "24px"}} color="#fff">
                            We are a real estate agency that will assist you in building your dreams, we will also assist in making a home design that suits your taste.
                        </Typography>
                        <GradientButton variant="contained"  sx={{borderRadius: "50px", textTransform:'none'}}>
                            Let's Discuss
                        </GradientButton>
                    </Box>
                </Box>
                <Box sx={{marginTop: "44px", display:"flex", justifyContent: "center", marginBottom:"16px"}}>
                    <img src={pic} alt="Dream Property" style={{ width: '83%', borderRadius: '10px' }} />
                </Box>
                <Grid sx={{display: "flex", justifyContent:"center", padding: "10px 32px", position: "absolute", bottom: '-26%',left:"31%", background:"rgba(255, 255, 255, 0.002)", backdropFilter: "blur(6px)", WebkitBackdropFilter:"blur(10px)", borderRadius:"15px", color:"#fff", textAlign:"center", border: "3px solid rgba(255, 255, 255, 0.59)"}}>
                    <Grid item xs={12} sm={4}>
                        <Typography fontFamily="Poppins"variant="h4" component="h2" style={{ color: 'white', textAlign: "center", fontWeight:"600", fontSize:"32px", lineHeight:"44px" }}>
                            300<span style={{ color: "#E97951" }}>+</span>
                        </Typography>
                        <Typography fontFamily="Poppins"variant="subtitle1" align="center" sx={{fontWeight:"400", fontSize:"16px", lineHeight:"26px"}}>
                            Happy Clients
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{marginLeft:"48px"}}>
                        <Typography fontFamily="Poppins"variant="h4" component="h2" style={{ color: 'white', textAlign: "center", fontWeight:"600", fontSize:"32px", lineHeight:"44px" }}>
                            200<span style={{ color: "#E97951" }}>+</span>
                        </Typography>
                        <Typography fontFamily="Poppins"variant="subtitle1" align="center" sx={{fontWeight:"400", fontSize:"16px", lineHeight:"26px"}}>
                            Premium Product
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{marginLeft:"48px"}}>
                        <Typography fontFamily="Poppins"variant="h4" component="h2" style={{ color: 'white', textAlign: "center", fontWeight:"600", fontSize:"32px", lineHeight:"44px" }}>
                            100<span style={{ color: "#E97951" }}>+</span>
                        </Typography>
                        <Typography fontFamily="Poppins"variant="subtitle1" align="center" sx={{fontWeight:"400", fontSize:"16px", lineHeight:"26px"}}>
                            Award Winnings
                        </Typography>
                    </Grid>
                </Grid>
        </Box>
    )
}

export default Hero;
