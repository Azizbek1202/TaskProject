import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography fontFamily="Poppins"from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Container from '@mui/material/Container';
import searchIcon from '../assets/icons/Search.svg'
import cardIcon from '../assets/icons/Cart.svg'
import userIcon from '../assets/icons/user.svg'
import hunian from '../assets/image/HUNIAN.png'



export default function PrimarySearchAppBar() {


    return (
        <Box >
            <AppBar position="static" sx={{ background: 'rgba(22, 21, 22, 1)',paddingTop:"3.5px", paddingBottom:"3.5px"}}>
                <Toolbar display="flex" sx={{ justifyContent: "space-between", alignItems: "center",width:"96vw"}}>
                    <img src={hunian} alt="" style={{ width: '120px', height: '21px' }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Typography fontFamily="Poppins"sx={{ fontSize: 16, cursor: "pointer", fontWeight: "400", marginRight: "52px" }}>HOME</Typography>
                        <Typography fontFamily="Poppins"sx={{ fontSize: 16, cursor: "pointer", fontWeight: "400", marginRight: "52px" }}>PROPERTY</Typography>
                        <Typography fontFamily="Poppins"sx={{ fontSize: 16, cursor: "pointer", fontWeight: "400", marginRight: "52px" }}>ABOUT</Typography>
                        <Typography fontFamily="Poppins"sx={{ fontSize: 16, cursor: "pointer", fontWeight: "400", marginRight: "52px" }}>AGENTS</Typography>
                        <Typography fontFamily="Poppins"sx={{ fontSize: 16, cursor: "pointer", fontWeight: "400", marginRight: "52px" }}>BLOG</Typography>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <img src={searchIcon} alt="" style={{width:"24px", height:"24px", marginLeft:"32px"}}/>
                        <img src={cardIcon} alt="" style={{width:"24px", height:"24px", marginLeft:"32px"}}/>
                        <img src={userIcon} alt="" style={{width:"24px", height:"24px", marginLeft:"32px"}}/>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"

                            aria-haspopup="true"

                            color="inherit"
                        >
                            <img src={userIcon} alt="" />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

        </Box>
    );
}
