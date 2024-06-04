import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import jaga from '../assets/image/jaga.svg'
import gopay from '../assets/image/gopay.svg';
import mandiri from '../assets/image/mandiri.svg';
import ovo from '../assets/image/ovo.svg'

const Sponsor = () => {
    return (
        <Box>
            <Container sx={{display: 'flex', justifyContent: 'space-between', paddingTop: "50px", paddingBottom: "50px", flexWrap:"wrap"}}>
                <Typography fontSize="30px" fontWeight="700" sx={{textAlign: {xs: 'center', sm: 'center'}}}>
                    Trusted By
                </Typography>
                <Box sx={{display: 'flex', justifyContent: {md: 'space-between', xs: 'center', sm: 'center'}, alignItems: 'center', flexWrap:"wrap" }}>
                    <img src={jaga} style={{marginLeft:'70px'}} alt="" />
                    <img src={gopay} style={{marginLeft:'70px'}} alt="" />
                    <img src={mandiri} style={{marginLeft:'70px'}} alt="" />
                    <img src={ovo} style={{marginLeft:'70px'}} alt="" />
                </Box>
            </Container>
        </Box>
    )
}

export default Sponsor
