import { Box, Container, IconButton, Typography, Grid } from '@mui/material';
import React from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import TestimonialCard from './Testimonial';
import boy from '../assets/image/boy.png';
import bg from '../assets/image/bg.jpg'; 

const OurCostmer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        paddingTop: "70px",
        backgroundImage: `url(${bg})`, 
        backgroundAttachment: 'inherit',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(22, 21, 22, 1)',
        marginBottom: "30px"
      }}
    >
      <Container>
        <Box
          display="flex"
          justifyContent='space-between'
          alignItems="center"
          sx={{ flexDirection: { xs: "column", sm: "column", md: "row" } }}
        >
          <Typography
            fontSize="48px"
            color='white'
            fontWeight="500"
            textAlign="center"
            marginBottom={{ xs: "30px", sm: 0 }}
          >
            Our customer testimonials
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: { xs: "column", sm: "column", md: "row" }
            }}
          >
            <Grid container justifyContent="center" alignItems="center">
              <Grid item>
                <IconButton sx={{ bgcolor: '#E45826', color: 'white', m: 1 }}>
                  <ArrowLeftIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton sx={{ bgcolor: '#E45826', color: 'white', m: 1 }}>
                  <ArrowRightIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: {xs: 'column', md: 'row'}
          }}
        >
          <TestimonialCard 
            name="David Arkham"
            title="Software Engineer"
            testimonial="At first I was hesitant when I wanted to buy a house here, but the results turned out to be beyond my expectations."
            imageUrl={boy}
          />
          <TestimonialCard
            name="David Arkham"
            title="Software Engineer"
            testimonial="At first I was hesitant when I wanted to buy a house here, but the results turned out to be beyond my expectations."
            imageUrl={boy}
          />
          <TestimonialCard
            name="David Arkham"
            title="Software Engineer"
            testimonial="At first I was hesitant when I wanted to buy a house here, but the results turned out to be beyond my expectations."
            imageUrl={boy}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default OurCostmer;
