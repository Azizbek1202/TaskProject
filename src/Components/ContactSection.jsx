import { Box, Button, Container, TextField, Typography} from '@mui/material'
import React from 'react'
import vector from '../assets/image/Vector.svg'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import styled from 'styled-components';

const GradientButton = styled(Button)({
  background: 'linear-gradient(102.97deg, #FFD88C 0%, #E45826 100%)',
  border: 0,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 50px',
  fontSize: '16px',
});

const ContactSection = () => {
  return (
    <Box paddingTop="60px" paddingBottom="60px">
        <Box width='84%' sx={{ backgroundColor: '#E45826', borderRadius: '16px', padding: "80px", position: "relative", height:"479px"}}>
          <img src={vector} alt=""  style={{ position: "absolute", top: "-60px", left: "20px", width: "100%"}} />
          <Typography fontFamily="Poppins"fontSize="48px" color="white" fontWeight="600" lineHeight="64px" width="550px" marginBottom="40px">
            What are you waiting for, get your dream home soon
          </Typography>
          <Box display="flex" >
            <Typography fontFamily="Poppins"display="flex" alignItems="center" color="white" fontSize="20px" fontWeight="400" lineHeight="32px">
              <CallIcon sx={{ color: "white", marginRight: "10px" }} />0855 - 563 - 521
            </Typography>
            <Typography fontFamily="Poppins"display="flex" alignItems="center" color="white" marginLeft="39px" fontSize="20px" fontWeight="400" lineHeight="32px">
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
            <Typography fontFamily="Poppins"variant="h4" component="h1" gutterBottom fontSize="32px" fontWeight="600" lineHeight="44px">
              Name
            </Typography>
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              placeholder='James Brone Junior'
              InputProps={{
                disableUnderline: true, 
              }}
              sx={{backgroundColor: "#F0F2F4", padding:"14px", borderRadius:"15px", marginTop:"0"}}
            />
            <Typography fontFamily="Poppins"variant="h4" component="h1" gutterBottom fontSize="32px" fontWeight="600" lineHeight="44px">
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
              sx={{backgroundColor: "#F0F2F4", padding:"14px", borderRadius:"15px", marginTop:"0"}}
            />
            <Typography fontFamily="Poppins"variant="h4" component="h1" gutterBottom fontSize="32px" fontWeight="600" lineHeight="44px">
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
              sx={{backgroundColor: "#F0F2F4", padding:"14px", borderRadius:"15px", marginTop:"0"}}
            />
            <GradientButton type="submit" style={{ marginTop: '20px', borderRadius: "50px", fontSize: 16, fontWeight: "400", lineHeight: "24px", textTransform: 'none', color:"white", cursor: "pointer"}} >
              Submit Now
            </GradientButton>
          </Box>
        </Box>
    </Box>
  )
}

export default ContactSection
