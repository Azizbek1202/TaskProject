import { Box, Button, Container, Grid, Typography } from '@mui/material';
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
    background: 'linear-gradient(45deg, #ffcc33 30%, #ff6b35 90%)',
    border: 0,
    borderRadius: 30,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 50px',
    fontSize: '16px',
    pointerEvents: 'none',
});

const ListProperty = () => {
    return (
        <Box>
            <Container>
                <Box display="flex" flexDirection="row" justifyContent="space-between" marginBottom="40px">
                    <Typography fontSize="40px" fontWeight="700" width="460px">
                        Our property most viewed
                    </Typography>
                    <GradientButton variant="contained" style={{ marginTop: '20px', borderRadius: '50px', fontSize: 10, textTransform: 'none' }}>
                        See More
                    </GradientButton>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <PropertyCard image={firstCard} title="Mega Regency" location="Bekasi, Jawa Barat" price="IDR 500jt" height={480} />
                        <PropertyCard image={thirdCard} title="Mega Regency" location="Bekasi, Jawa Barat" price="IDR 500jt" height={480} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PropertyCard image={secondCard} title="Pasir Raya" location="Bekasi, Jawa Barat" price="IDR 500jt" height={673} />
                        <PropertyCard image={fiveCard} title="Mega Regency" location="Bekasi, Jawa Barat" price="IDR 500jt" height={287} />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <PropertyCard image={fourCard} title="Mega Regency" location="Bekasi, Jawa Barat" price="IDR 500jt" height={480} />
                        <PropertyCard image={sixCard} title="Mega Regency" location="Bekasi, Jawa Barat" price="IDR 500jt" height={480} />

                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default ListProperty;
