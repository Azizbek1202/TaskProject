import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const TestimonialCard = ({ name, title, testimonial, imageUrl }) => {
  return (
    <Box
      sx={{
        width: {md: '32%', xs: "100%", sm:"100%"}, 
        padding: '20px',
        paddingTop: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
        textAlign: 'center',
        position: 'relative',
        margin: '20px auto', 
        marginTop: '110px'

      }}
    >
      <Avatar
        src={imageUrl}
        alt={name}
        sx={{
          width: '80px',
          height: '80px',
          margin: '0 auto', 
          marginBottom: '10px',
          position: 'absolute',
          top: '-50px',
          left: '50%', 
          transform: 'translateX(-50%)' 
        }}
      />
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {name}
      </Typography>
      <Typography variant="subtitle1" color="#E39A80" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" >
        {testimonial}
      </Typography>
      <Box
        sx={{
          width: '50px',
          height: '3px',
          backgroundColor: '#E45826',
          margin: '20px auto 0',
        }}
      ></Box>
    </Box>
  );
}

export default TestimonialCard;
