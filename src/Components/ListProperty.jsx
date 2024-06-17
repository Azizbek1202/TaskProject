import { Box, Button, Container, Grid, Typography} from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import PropertyCard from './Card';
import firstCard from '../assets/image/firstCard.png';
import secondCard from '../assets/image/secondCard.png';
import thirdCard from '../assets/image/thirdCard.png';
import fourCard from '../assets/image/fourCard.png';
import fiveCard from '../assets/image/fiveCard.png';
import sixCard from '../assets/image/sixCard.png';

const GradientButton = styled(Button)({
    background: 'linear-gradient(102.97deg, #FFD88C 0%, #E45826 100%)',
    border: 0,
    borderRadius: 50,
    color: 'rgba(255, 255, 255, 1)',
    width: '122px',
    height: "60px",
    padding: '18px, 24px, 18px, 24px',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    gap: '10px',
});

const ListProperty = () => {
    return (
        <Box sx={{width:"84%", marginTop:"72px", marginBottom: "52px"}}>
            <Box display="flex" flexDirection="row" justifyContent="space-between" marginBottom="40px">
                <Typography fontFamily="Poppins"fontSize="48px" fontWeight="600" lineHeight='64px' width="460px">
                    Our property most viewed
                </Typography>
                <GradientButton variant="contained" style={{ marginTop: '20px', borderRadius: '50px', fontSize: 16, fontWeight: "500", lineHeight: "24px", textTransform: 'none' }}>
                    See More
                </GradientButton>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <PropertyCard image={firstCard} title="Mega Regency" location="Bekasi, Jawa Barat" price="IDR 500jt" height={480} />
                    <PropertyCard image={fourCard} title="Mutiara Jaya" location="Bekasi, Jawa Barat" price="IDR 500jt" height={480} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <PropertyCard image={secondCard} title="Pasir Raya" location="Bekasi, Jawa Barat" price="IDR 500jt" height={673} />
                    <PropertyCard image={fiveCard} title="KSB" location="Bekasi, Jawa Barat" price="IDR 500jt" height={287} />
                </Grid>

                <Grid item xs={12} md={4}>
                    <PropertyCard image={thirdCard} title="Wibawa Mukti" location="Bekasi, Jawa Barat" price="IDR 500jt" height={480} />
                    <PropertyCard image={sixCard} title="Citra Indah" location="Bekasi, Jawa Barat" price="IDR 500jt" height={480} />

                </Grid>

            </Grid>
        </Box>
    );
};

export default ListProperty;
