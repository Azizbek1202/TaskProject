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
  objectFit: 'cover', // Rasmlarni avvalgi ravishda ko'rsatish uchun
}));

const StyledCardContent = styled(CardContent)({
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  color: 'white',
  position: 'absolute',
  bottom: 0,
  width: '100%',
  padding: '10px 15px',
  display: 'flex',
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
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">{location}</Typography>
        </Box>
        <Box mt={1}>
          <Typography variant="h6" component="span">
            {price}
          </Typography>
        </Box>
      </StyledCardContent>
    </StyledCard>
  );
};

export default PropertyCard;
