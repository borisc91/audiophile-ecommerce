import React from 'react'
import {Box, Button, Typography, Divider, List, ListItem, ListItemButton, ListItemText} from '@mui/material'
import classes from './Header.module.css'
import iconFacebook from '../assets/shared/desktop/icon-facebook.svg'
import iconInstagram from '../assets/shared/desktop/icon-instagram.svg'
import iconTwitter from '../assets/shared/desktop/icon-twitter.svg'
import { Link } from 'react-router-dom'

function Footer() {


    

    const pages = [<Link className={classes.linkovi} to='/'>Home</Link>,
     <Link className={classes.linkovi} to='/category/headphones'>Headphones</Link>, 
    <Link className={classes.linkovi} to='/category/speakers'>Speakers</Link>,
     <Link className={classes.linkovi} to='/category/earphones'>Earphones</Link>];


  return (
    <>
    <Box sx={{pl: {xs: '2rem', md: '7.5rem', lg: '11.5rem'}, pr: {xs: '2rem', md: '7.5rem', lg: '11.5rem'}, pt: '3.5rem',
     height: {xs: '33rem', md: '22.8rem'},
    display: 'flex', bgcolor: 'black', justifyContent: 'start', mt: {xs: '3rem', md: '2rem', lg: '5rem'}, flexDirection: 'column'}}>
    <Box sx={{display: 'flex', justifyContent: 'space-between', flexDirection: {xs: 'column', md: 'row'}}}>
        
        <Typography
        variant="h6"
        component="a"
        href="/"
        sx={{
         
          pb: '1rem',
          textAlign: {xs: 'center'},
          fontFamily: 'monospace',
          fontWeight: 600,
          letterSpacing: '0.2rem',
          color: 'white',
          textDecoration: 'none',
        }}>audiophile</Typography>
          <List sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}}}>
            {pages.map((item, index) => (
              
                <Typography key={index} sx={{ml:{xs: 0, md:4}, pb: {xs: 2}, textAlign: 'center',
                 fontSize: {xs: '1rem', md: '1rem'},
                  color: 'white',
                '&:hover': {
                    color: '#D87D4A',
                    cursor: 'pointer'
                   
                },
                justifyItems: "center"  }}>
                  {item}
                </Typography>
              
            ))}
          </List>
        </Box>
        <Box sx={{display: 'flex', flexWrap: 'wrap', flexDirection: {xs: 'column', md: 'row'},
          justifyContent: {xs: 'space-around', md: 'space-between'}, height: '80%', alignItems: 'center'}}>
        <Typography sx={{fontFamily: 'Manrope',
       
fontWeight: 500,
fontStyle: 'normal',
fontSize: '0.94rem',
lineHeight: '1.5rem',
textAlign: {xs: 'center', sm:'left'},
color: 'white',
width: {xs: '70%', md: '32rem', lg: '30rem'},
mr: {md: '13rem', lg: '35rem'},
opacity: '0.5'}}> Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</Typography>
       
<Box sx={{width: '6rem', 
display: 'flex', justifyContent: 'space-between', 
order: {xs: 3, md: 4}, mt: {xs: 0, md: 1}}}>
    
    <Box component="img"
        sx={{
          height: '1.5rem',
          width: '1.5rem',
          '&:hover': {
            filter: 'invert(54%) sepia(73%) saturate(432%) hue-rotate(337deg) brightness(91%) contrast(84%)',
            cursor: 'pointer'
           
        }
        }}
        alt="speaker"
        src={iconFacebook}>

    </Box>
    <Box component="img"
        sx={{
          height: '1.5rem',
          width: '1.5rem',
          '&:hover': {
            filter: 'invert(54%) sepia(73%) saturate(432%) hue-rotate(337deg) brightness(91%) contrast(84%)',
            cursor: 'pointer'
           
        }
        }}
        alt="speaker"
        src={iconInstagram}>

    </Box>
    <Box component="img"
        sx={{
          height: '1.5rem',
          width: '1.5rem',
          '&:hover': {
            filter: 'invert(54%) sepia(73%) saturate(432%) hue-rotate(337deg) brightness(91%) contrast(84%)',
            cursor: 'pointer'
           
        }
        }}
        alt="speaker"
        src={iconTwitter}>

    </Box>
    </Box>
    <Typography sx={{fontFamily: 'Manrope',
fontWeight: 500,
fontStyle: 'normal',
fontSize: '0.94rem',
lineHeight: '1.5rem',
textAlign: {xs: 'center', sm:'left'},
color: 'white',
opacity: '0.5',
order: {xs: 2, md: 2}}}>Copyright 2023. All Rights Reserved</Typography>
    
    </Box>
       
    </Box>
    </>
  )
}

export default Footer