import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import cartIcon from '../assets/shared/desktop/icon-cart.svg'
import { Link } from 'react-router-dom';
import classes from './Header.module.css'

import Cart from './Cart';




const drawerWidth:number = 240;



interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
  }

  
    

function Header(props: Props) {

  

 
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const pages = [<Link className={`${mobileOpen ? classes.nelinkovi :  classes.linkovi}`} to='/'>Home</Link>,
     <Link className={`${mobileOpen ? classes.nelinkovi :  classes.linkovi}`} to='/category/headphones'>Headphones</Link>, 
<Link className={`${mobileOpen ? classes.nelinkovi :  classes.linkovi}`} to='/category/speakers'>Speakers</Link>,
 <Link className={`${mobileOpen ? classes.nelinkovi :  classes.linkovi}`} to='/category/earphones'>Earphones</Link>];

  
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
      console.log('click')
    };
    
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  
    
    

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Link to='/' className={classes.link}> <Typography
              variant="h6"
              component="a"
              
              sx={{
               
                ml: 1,
                
                fontFamily: 'monospace',
                fontWeight: 600,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              audiophile
            </Typography> </Link>
          <Divider />
          <List>
            {pages.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );

  
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (

        <>
        
        <AppBar component="nav" position="static" sx={{height: {xs: '100px', md: "80px" }, width: '100%', backgroundColor:"#141414"}}>
        <Box  >
      <Cart handleClose={handleClose} open={open}  />
          <Toolbar disableGutters>
            <Box sx={{ width: 1, display: 'flex', justifyContent: {xs: 'space-between', md: "space-around"}, alignItems: "center" }} >
                
            <Box sx={{ display: {sm: 'flex', md: 'none'}, alignItems: "center"  }}>
            
      <Box component="main">
      <CssBaseline />
      <Box >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{  display: { sm: 'flex', md: 'none' }  }}
          >
            <MenuIcon />
          </IconButton>
          
          
        </Toolbar>
        <Box component="nav">
          <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      </Box>
      
        
        
      </Box>

      
     
    </Box>
            
            
           
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
               
                
                display: 'flex',
                fontFamily: 'monospace',
                fontWeight: 600,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              audiophile
            </Typography>
            
  
            <Box component="img"
        sx={{
          height: '1.5rem',
          width: '1.5rem',
          display: { xs: 'flex', md: 'none' }, mr: 2,
          '&:hover': {
            filter: 'invert(54%) sepia(73%) saturate(432%) hue-rotate(337deg) brightness(91%) contrast(84%)',
            cursor: 'pointer'
           
        }
        }}
        alt="speaker"
        src={cartIcon}>

    </Box>
            
            
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 18 }}>
              {pages.map((page, index) => (
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block',
                  '&:hover': {
                    color: '#D87D4A',
                    cursor: 'pointer'
                   
                }, }}
                >
                  {page}
                </Button>
              ))}
            </Box>
  
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            
            <Box component="img" onClick={handleOpen}
        sx={{
          height: '1.5rem',
          width: '1.5rem',
          display: { xs: 'none', md: 'flex' }, mr: 8,
          '&:hover': {
            filter: 'invert(54%) sepia(73%) saturate(432%) hue-rotate(337deg) brightness(91%) contrast(84%)',
            cursor: 'pointer'
           
        }
        }}
        alt="speaker"
        src={cartIcon}>

    </Box>
            
            </Box>
            </Box>
          </Toolbar>
          
          </Box>
          
      

      </AppBar>
      
      

      
      </>
    );
}

export default Header;