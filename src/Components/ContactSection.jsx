import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import vector from '../assets/image/Vector.svg'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import styled from 'styled-components';

const GradientButton = styled(Button)({
  background: 'linear-gradient(45deg, #ffcc33 30%, #ff6b35 90%)',
  border: 0,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 50px',
  fontSize: '16px',
  pointerEvents: 'none'
});

const ContactSection = () => {
  return (
    <Box>
      <Container sx={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <Box width='100%' sx={{ backgroundColor: '#E45826', borderRadius: '16px', padding: "80px", position: "relative", height:"451px"}}>
          <img src={vector} alt=""  style={{ position: "absolute", top: "-60px", left: "20px", width: "100%"}} />
          <Typography fontSize="48px" color="white" fontWeight="600" width="550px" marginBottom="40px">
            What are you waiting for, get your dream home soon
          </Typography>
          <Box display="flex" >
            <Typography display="flex" alignItems="center" color="white">
              <CallIcon sx={{ color: "white", marginRight: "10px" }} />0855 - 563 - 521
            </Typography>
            <Typography display="flex" alignItems="center" color="white" marginLeft="50px">
              <EmailIcon sx={{ color: "white", marginRight: "10px" }} />huniancs@gmail.com
            </Typography>
          </Box>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '400px',
              margin: '0 auto',
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              backgroundColor: "white",
              position: "absolute",
              top: "0",
              right: "0",

            }}
          >
            <Typography variant="h4" component="h1" gutterBottom fontWeight="800">
              Name
            </Typography>
            <TextField
              variant="standard" // <== changed this
              margin="normal"
              required
              fullWidth
              placeholder='James Brone Junior'
              InputProps={{
                disableUnderline: true, 
              }}
              sx={{backgroundColor: "rgba(240, 242, 244, 1)", padding:"10px", borderRadius:"16px", marginTop:"0"}}
            />
            <Typography variant="h4" component="h1" gutterBottom fontWeight="800">
              Email
            </Typography>
            <TextField
              variant="standard" // <== changed this
              margin="normal"
              required
              fullWidth
              placeholder='jbj@gmail.com'
              InputProps={{
                disableUnderline: true, 
              }}
              sx={{backgroundColor: "rgba(240, 242, 244, 1)", padding:"10px", borderRadius:"16px", marginTop:"0"}}
            />
            <Typography variant="h4" component="h1" gutterBottom fontWeight="800">
            Message
            </Typography>
            <TextField
              variant="standard" // <== changed this
              margin="normal"
              required
              fullWidth
              placeholder='Text Here'
              InputProps={{
                disableUnderline: true, 
              }}
              sx={{backgroundColor: "rgba(240, 242, 244, 1)", padding:"10px", borderRadius:"16px", marginTop:"0"}}
            />
            <GradientButton type="submit" style={{ marginTop: '20px', borderRadius: "50px", fontSize: 16, textTransform: 'none', color:"white" }} >
              Submit Now
            </GradientButton>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default ContactSection
