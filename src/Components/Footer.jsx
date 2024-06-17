import { Box, Container, Grid, Typography fontFamily="Poppins"} from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box marginTop="70px" marginBottom="70px" width="84%">
                <Grid display="flex" justifyContent="space-between">
                    <Grid item xs={12} md={3} width="25%">
                        <Typography fontFamily="Poppins"variant='h4' fontWeight="600" gutterBottom>
                            HUNIAN.
                        </Typography>
                        <Typography fontFamily="Poppins"fontSize="16px" fontWeight="400" lineHeight="26px">
                            We help you in the home construction process and interior design for your dream home.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={9} width="60%" display="flex">
                        <Grid item xs={6} md={3} marginRight="62px">
                            <Typography fontFamily="Poppins"variant='h5' marginBottom="24px" fontWeight="500" fontSize="24px" lineHeight="34px">
                                About Us
                            </Typography>
                            <Typography fontFamily="Poppins"marginBottom="18px" fontSize="18px" fontWeight="400" lineHeight="32px">
                                Leadership
                            </Typography>
                            <Typography fontFamily="Poppins"marginBottom="18px" fontSize="18px" fontWeight="400" lineHeight="32px">
                                Company
                            </Typography>
                            <Typography fontFamily="Poppins"marginBottom="18px" fontSize="18px" fontWeight="400" lineHeight="32px">
                                Career
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={3} marginRight="62px">
                            <Typography fontFamily="Poppins"variant='h5' marginBottom="24px" fontWeight="500" fontSize="24px" lineHeight="34px">
                                Support
                            </Typography>
                            <Typography fontFamily="Poppins"marginBottom="18px" fontSize="18px" fontWeight="400" lineHeight="32px">
                                Help Center
                            </Typography>
                            <Typography fontFamily="Poppins"marginBottom="18px" fontSize="18px" fontWeight="400" lineHeight="32px">
                                Support Team
                            </Typography>
                            <Typography fontFamily="Poppins"marginBottom="18px" fontSize="18px" fontWeight="400" lineHeight="32px">
                                Community
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={3} marginRight="62px">
                            <Typography fontFamily="Poppins"variant='h5' marginBottom="24px" fontWeight="500" fontSize="24px" lineHeight="34px">
                                Legal
                            </Typography>
                            <Typography fontFamily="Poppins"marginBottom="18px" fontSize="18px" fontWeight="400" lineHeight="32px">
                                Security FAQ
                            </Typography>
                            <Typography fontFamily="Poppins"marginBottom="18px" fontSize="18px" fontWeight="400" lineHeight="32px">
                                Term of Use
                            </Typography>
                            <Typography fontFamily="Poppins"marginBottom="18px" fontSize="18px" fontWeight="400" lineHeight="32px">
                                Privacy Policy
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={3} marginRight="62px">
                            <Typography fontFamily="Poppins"variant='h5' marginBottom="24px" fontWeight="500" fontSize="24px" lineHeight="34px">
                                Social
                            </Typography>
                            <Typography fontFamily="Poppins"marginBottom="18px" fontSize="18px" fontWeight="400" lineHeight="32px">
                                Instagram
                            </Typography>
                            <Typography fontFamily="Poppins"marginBottom="18px" fontSize="18px" fontWeight="400" lineHeight="32px">
                                Facebook
                            </Typography>
                            <Typography fontFamily="Poppins"marginBottom="18px" fontSize="18px" fontWeight="400" lineHeight="32px">
                                Youtube
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
     </Box>
    )
}

export default Footer
