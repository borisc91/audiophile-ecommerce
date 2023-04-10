import React from 'react'
import {Box,Typography, Container } from '@mui/material'
import useStyles from '../styles'

function Info() {
    const classes = useStyles()
  return (
    <Container maxWidth="lg">
    <Box sx={{display: 'flex', justifyContent: 'space-between', 
    mt: {xs: '3.5rem', md: '5rem'}, 
    flexDirection: {xs: 'column', md:'row'}}}>
        
        <Box sx={{display: 'flex', order: {xs: 2, md: 1}, 
        justifyContent: {xs: 'start', md: 'center'}, 
        gap: '2rem',alignItems: 'center', flexDirection: 'column', height: {xs: '25rem',md: '33.75rem'}, 
        width: {xs: '100%', md: '33.75rem'}, borderRadius: '8px'}}>
            <Typography  sx={{
fontWeight: 700,
fontSize: '2.5rem',
lineHeight: '2.75rem',
textAlign: {xs: 'center', md: 'left'},
letterSpacing: '1.42857px',
textTransform: 'uppercase'}}>Bringing you the <span className={classes.word}>best</span> audio gear</Typography>
<Typography sx={{fontFamily: 'Manrope',
fontWeight: 500,
fontSize: '1.05rem',
lineHeight: '1.5rem',
textAlign: {xs: 'center', md: 'left'},
color: 'black',
opacity: '0.5'}}>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</Typography>
        </Box>
        <Box className={classes.person} sx={{height: '36.75rem', width: {xs: '100%', md: '33.75rem'}, 
        borderRadius: '8px', order: {xs: 1, md: 2}}}></Box>
    </Box>
    </Container>

  )
}

export default Info