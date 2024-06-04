import React from 'react'
import circle from '../assets/image/circle.png'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
const MiniCard = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box display="flex" alignItems="center" width={isSmallScreen ? "100%" : "50%"} marginBottom={isSmallScreen ? "20px" : "10px"}>
            <img src={circle} alt="" style={{ marginRight: "10px" }} />
            <Box>
                <Typography fontWeight="600">
                    Many choices of styles
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Typography>
            </Box>
        </Box>
    )
}

export default MiniCard
