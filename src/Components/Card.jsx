import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  borderRadius: '15px',
  marginBottom: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  position: 'relative',
  '&:hover': {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
});

const StyledCardMedia = styled(CardMedia)(({ height }) => ({
  height: height,
  objectFit: 'cover', 
}));

const StyledCardContent = styled(CardContent)({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(5px)',
  WebkitBackdropFilter: 'blur(10px)',
  color: 'white',
  position: 'absolute',
  bottom: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderTopRightRadius: '16px',
  borderTopLeftRadius: '16px'
});

const PropertyCard = ({ image, title, location, price, height }) => {
  return (
    <StyledCard>
      <StyledCardMedia image={image} title={title} height={height} />
      <StyledCardContent>
        <Box>
          <Typography fontFamily="Poppins"sx={{fontWeight:"600", fontSize:"24px",lineHeight:"34px"}}>{title}</Typography>
          <Typography fontFamily="Poppins"variant="body2" sx={{fontWeight:"400", fontSize:"14px",lineHeight:"24px"}}>{location}</Typography>
        </Box>
        <Box>
          <Typography fontFamily="Poppins"variant="h6" component="span" sx={{fontWeight:"600", fontSize:"20px",lineHeight:"32px"}}>
            {price}
          </Typography>
        </Box>
      </StyledCardContent>
    </StyledCard>
  );
};

export default PropertyCard;
