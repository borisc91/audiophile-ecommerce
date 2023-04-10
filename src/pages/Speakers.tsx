import React from 'react'
import {Box, Button, Typography, Card, CardContent, CardMedia} from '@mui/material'
import useStyles from '../styles'
import { Link } from 'react-router-dom'
import Shopmenu from '../components/Shopmenu'

function Speakers() {
    const classes = useStyles()


  return (
    <>
    <Box sx={{backgroundColor: '#141414', height: '13rem', display: 'flex', alignItems: 'center', justifyContent: 'center', pb: 5}}>
        <Typography variant="h1" sx={{fontFamily: 'monospace',pr: 4.5,letterSpacing: '1.43px', fontWeight: 700, lineHeight: '2.75rem', fontSize: '2.5rem',color: 'white', textAlign: 'center'}}>SPEAKERS</Typography>

    </Box>
    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: {xs: 'column', lg: 'row'}, mt: '7rem', justifyContent: 'center', gap: '5rem'}}>
        <Box className={classes.speakers} sx={{ borderRadius: '8px'}}></Box>
        <Box sx={{height: '25rem', width: '33.75rem',  display: 'flex',
         justifyContent: 'center', alignItems: 'start', flexDirection: 'column', borderRadius: '8px'}}>
            <Typography sx={{fontFamily: 'monospace',
            letterSpacing: '0.64rem', fontWeight: 400,
             fontSize: '0.87rem', lineHeight: '1.2rem', color: '#D87D4A', textAlign: 'left'}}>NEW PRODUCT</Typography>
            <Typography variant='h2' sx={{ width: '18.5rem', fontFamily: 'monospace',
            letterSpacing: '1.43px', fontWeight: 700,
             lineHeight: '2.75rem', 
            fontSize: '2.5rem', textAlign: 'left', 
            color: 'black'}} 
            >ZX9
            SPEAKER</Typography>
            <Typography sx={{width: '29.5rem', fontFamily: 'monospace',
             fontWeight: 500,
             lineHeight: '1.5rem', 
            fontSize: '0.9rem', textAlign: 'left', opacity: '50%',
            color: 'black'}}>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</Typography>
            <Link to='/products/speakerzx9' className={classes.link}> <Button variant="contained" size="large" sx={{
                align: "center",
                backgroundColor: "#D87D4a",
                '&:hover': {
                    backgroundColor: '#FBAF85',
                   
                },
                padding: '1rem 2.5rem 1rem 2.5rem',
                marginTop: '1.2rem',
                textDecoration: 'none'
              }}>SEE PRODUCT</Button> </Link>
        </Box>
        
    </Box>
    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: {xs: 'column', lg: 'row'}, mt: '8rem', justifyContent: 'center', gap: '5rem'}}>
        
        <Box sx={{height: '25rem', order: {xs: 2, lg: 1}, width: '33.75rem',  display: 'flex', 
         justifyContent: 'center', alignItems: 'start', flexDirection: 'column', borderRadius: '8px'}}>
            
            <Typography variant='h2' sx={{ width: '18.5rem', fontFamily: 'monospace',
            letterSpacing: '1.43px', fontWeight: 700,
             lineHeight: '2.75rem', 
            fontSize: '2.5rem', textAlign: 'left', 
            color: 'black'}} 
            >ZX7
            SPEAKER</Typography>
            <Typography sx={{width: '29.5rem', fontFamily: 'monospace',
             fontWeight: 500,
             lineHeight: '1.5rem', 
            fontSize: '0.9rem', textAlign: 'left', opacity: '50%',
            color: 'black'}}>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</Typography>
            <Link to='/products/speakerzx7' className={classes.link}> <Button variant="contained" size="large" sx={{
                align: "center",
                backgroundColor: "#D87D4a",
                '&:hover': {
                    backgroundColor: '#FBAF85',
                   
                },
                padding: '1rem 2.5rem 1rem 2.5rem',
                marginTop: '1.2rem',
                textDecoration: 'none'
              }}>SEE PRODUCT</Button> </Link>
        </Box>
        <Box className={classes.blackspeakers} sx={{ order: {xs: 1, lg: 2}, borderRadius: '8px'}}></Box>
    </Box>
    <Shopmenu />

    </>
  )
}

export default Speakers