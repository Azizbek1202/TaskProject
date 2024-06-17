import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import card from '../assets/image/card.png'
import MiniCard from './MiniCard'

const WhyChoose = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box width="85%">
                <Typography fontFamily="Poppins"textAlign="center" marginTop="72px" fontSize={isSmallScreen ? "36px" : "48px"} fontWeight="600" marginBottom="40px" lineHeight="64px">why should choose us</Typography>
                <img src={card} alt="" style={{ marginBottom: "40px", width: "100%" }} />
                <Box width="100%" marginBottom="40px" display="flex" flexDirection={isSmallScreen ? "column" : "row"}>
                    <Box width={isSmallScreen ? "100%" : "50%"} paddingRight="90px">
                        <Typography fontFamily="Poppins"fontSize={isSmallScreen ? "24px" : "36px"} fontWeight="600" lineHeight="54px" marginRight="52px">
                            We can make your dream home come true
                        </Typography>
                        <Typography fontFamily="Poppins"marginTop="16px" fontSize="20px" fontWeight="400" lineHeight="32px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </Typography>
                    </Box>
                    <Box width={isSmallScreen ? "100%" : "50%"} display="flex" flexWrap="wrap">
                       <MiniCard />
                       <MiniCard />
                       <MiniCard />
                       <MiniCard />
                       <MiniCard />
                       <MiniCard />
                    </Box>
                </Box>
        </Box>
    )
}

export default WhyChoose;
