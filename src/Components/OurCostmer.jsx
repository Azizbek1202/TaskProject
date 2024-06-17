import { Box, IconButton, Typography, Grid } from '@mui/material';
import React from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import TestimonialCard from './Testimonial';
import boy from '../assets/image/boy.png';
import bg from '../assets/image/bg.jpg';
import styled from 'styled-components';

const StyledArrowLeftIcon = styled(ArrowLeftIcon)(({ theme }) => ({
  width: '24px',
  height: '24px',
}));

const OurCostmer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        paddingTop: "70px",
        paddingBottom: "72px",
        backgroundImage: `url(${bg})`,
        backgroundAttachment: 'inherit',
        backgroundColor: 'rgba(22, 21, 22, 1)',
        marginBottom: "30px"
      }}
    >
      <Box width="85%">
        <Box
          display="flex"
          justifyContent='space-between'
          alignItems="center"
          width="100%"
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
              flexDirection: { xs: "column", sm: "column", md: "row" },
              marginRight: "5px"
            }}
          >
            <Grid display="flex" justifyContent="end" alignItems="center">
              <Grid item>
                <IconButton sx={{ bgcolor: '#E45826', color: 'white', m: 1}}>
                  <StyledArrowLeftIcon/>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton sx={{ bgcolor: '#E45826', color: 'white', m: 1}}>
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
            flexDirection: { xs: 'column', md: 'row' }
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
      </Box>
    </Box>
  )
}

export default OurCostmer;
