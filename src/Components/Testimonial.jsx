import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const TestimonialCard = ({ name, title, testimonial, imageUrl }) => {
  return (
    <Box
      sx={{
        width: {md: '32%', xs: "100%", sm:"100%"}, 
        padding: '24px',
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
      <Typography fontFamily="Poppins"variant="h6" fontWeight="500" fontSize="20px" lineHeight="32px" gutterBottom>
        {name}
      </Typography>
      <Typography fontFamily="Poppins"variant="subtitle1" color="#E97951" gutterBottom fontWeight="400" fontSize="14px" lineHeight="24px">
        {title}
      </Typography>
      <Typography fontFamily="Poppins"variant="body2" fontWeight="400" fontSize="16px" lineHeight="26px">
        {testimonial}
      </Typography>
    </Box>
  );
}

export default TestimonialCard;
