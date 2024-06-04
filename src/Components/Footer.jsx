import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box marginTop="70px" marginBottom="70px">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Typography variant='h4' fontWeight="600" gutterBottom>
                            HUNIAN.
                        </Typography>
                        <Typography fontSize="15px">
                            We help you in the home construction process and interior design for your dream home.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={9} container justifyContent="flex-end">
                        <Grid item xs={6} md={3}>
                            <Typography variant='h5' marginBottom="15px">
                                About Us
                            </Typography>
                            <Typography marginBottom="15px" fontSize="15px">
                                Leadership
                            </Typography>
                            <Typography marginBottom="15px" fontSize="15px">
                                Company
                            </Typography>
                            <Typography marginBottom="15px" fontSize="15px">
                                Career
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Typography variant='h5' marginBottom="15px">
                                Support
                            </Typography>
                            <Typography marginBottom="15px" fontSize="15px">
                                Help Center
                            </Typography>
                            <Typography marginBottom="15px" fontSize="15px">
                                Support Team
                            </Typography>
                            <Typography marginBottom="15px" fontSize="15px">
                                Community
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Typography variant='h5' marginBottom="15px">
                                Legal
                            </Typography>
                            <Typography marginBottom="15px" fontSize="15px">
                                Security FAQ
                            </Typography>
                            <Typography marginBottom="15px" fontSize="15px">
                                Term of Use
                            </Typography>
                            <Typography marginBottom="15px" fontSize="15px">
                                Privacy Policy
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Typography variant='h5' marginBottom="15px">
                                Social
                            </Typography>
                            <Typography marginBottom="15px" fontSize="15px">
                                Instagram
                            </Typography>
                            <Typography marginBottom="15px" fontSize="15px">
                                Facebook
                            </Typography>
                            <Typography marginBottom="15px" fontSize="15px">
                                Youtube
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer
