import { Box, Container, Typography} from '@mui/material'
import React from 'react'
import jaga from '../assets/image/jaga.png'
import gopay from '../assets/image/gopay.png';
import mandiri from '../assets/image/mandiri.png';
import ovo from '../assets/image/ovo.png'

const Sponsor = () => {
    return (

            <Box sx={{display: 'flex', justifyContent:'space-between', paddingTop: "52.5px", paddingBottom: "52.5px", flexWrap:"wrap", width: "84%"}}>
                <Typography fontFamily="Poppins"fontSize="32px" fontWeight="600" lineHeight='44px' sx={{textAlign: {xs: 'center', sm: 'center'}}}>
                    Trusted By
                </Typography>
                <Box sx={{display: 'flex', alignItems: 'center', flexWrap:"wrap" }}>
                    <img src={jaga} style={{marginLeft:'160px', height:'43px'}} alt="" />
                    <img src={gopay} style={{marginLeft:'94px', height:'43px'}} alt="" />
                    <img src={mandiri} style={{marginLeft:'94px', height:'43px'}} alt="" />
                    <img src={ovo} style={{marginLeft:'94px', height:'43px'}} alt="" />
                </Box>
            </Box>
    )
}

export default Sponsor
