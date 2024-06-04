import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
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



export default function PrimarySearchAppBar() {
       

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'black' }}>
                <Container> 
                    <Toolbar display="flex" sx={{justifyContent: "space-between"}}>
                       
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            HUNIAN.
                        </Typography>
                        <Box sx={{display: { xs: 'none', md: 'flex' }}}>
                            <Typography sx={{ minWidth: 80, fontSize: 12, cursor: "pointer" }}>HOME</Typography>
                            <Typography sx={{ minWidth: 80, fontSize: 12, cursor: "pointer" }}>PROPERTY</Typography>
                            <Typography sx={{ minWidth: 80, fontSize: 12, cursor: "pointer" }}>ABOUT</Typography>
                            <Typography sx={{ minWidth: 80, fontSize: 12, cursor: "pointer" }}>AGENTS</Typography>
                            <Typography sx={{ minWidth: 80, fontSize: 12, cursor: "pointer" }}>BLOG</Typography>
                        </Box>
                        
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">

                                <img src={searchIcon} alt="" />

                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <img src={cardIcon} alt="" />
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                        
                                aria-haspopup="true"
                                
                                color="inherit"
                            >
                                <img src={userIcon} alt="" />
                            </IconButton>
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
                </Container> 
            </AppBar>
            
        </Box>
    );
}
