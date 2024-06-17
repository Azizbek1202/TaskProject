import React from 'react'
import circle from '../assets/image/circle.png'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
const MiniCard = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box display="flex" alignItems="center" width={isSmallScreen ? "100%" : "50%"} marginBottom={isSmallScreen ? "20px" : "23px"}>
            <img src={circle} alt="" style={{ marginRight: "23px", width: "32px", height: "32px"}} />
            <Box>
                <Typography fontFamily="Poppins"fontWeight="600" fontSize="18px" lineHeight="28px">
                    Many choices of styles
                </Typography>
                <Typography fontFamily="Poppins"fontSize="14px" fontWeight="400" lineHeight="24px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Typography>
            </Box>
        </Box>
    )
}

export default MiniCard
