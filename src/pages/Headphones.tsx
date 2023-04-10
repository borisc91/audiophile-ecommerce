import React from 'react'
import {Box, Button, Typography, Card, CardContent, CardMedia} from '@mui/material'
import useStyles from '../styles'
import { Link } from 'react-router-dom'
import Shopmenu from '../components/Shopmenu'

function Headphones() {
    const classes = useStyles()


  return (
    <>
    <Box sx={{backgroundColor: '#141414', height: '13rem', display: 'flex', alignItems: 'center', justifyContent: 'center', pb: 5}}>
        <Typography variant="h1" sx={{fontFamily: 'monospace',pr: 4.5,letterSpacing: '1.43px', fontWeight: 700, lineHeight: '2.75rem', fontSize: '2.5rem',color: 'white', textAlign: 'center'}}>HEADPHONES</Typography>

    </Box>
    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: {xs: 'column', lg: 'row'}, mt: '7rem', justifyContent: 'center', gap: '5rem'}}>
        <Box className={classes.blackHeadphones} sx={{ borderRadius: '8px'}}></Box>
        <Box sx={{height: '25rem', width: {xs: '15rem', md: '33.75rem'},  display: 'flex',
         justifyContent: 'center', alignItems: 'start', flexDirection: 'column', borderRadius: '8px'}}>
            <Typography sx={{fontFamily: 'monospace',
            letterSpacing: '0.64rem', fontWeight: 400,
             fontSize: '0.87rem', lineHeight: '1.2rem', color: '#D87D4A', textAlign: 'left'}}>NEW PRODUCT</Typography>
            <Typography variant='h2' sx={{ width: {xs: '15.rem', md: '18.5rem'}, fontFamily: 'monospace',
            letterSpacing: '1.43px', fontWeight: 700,
             lineHeight: '2.75rem', 
            fontSize: '2.5rem', textAlign: 'left', 
            color: 'black'}} 
            >XX99 MARK II
            HEADPHONES</Typography>
            <Typography sx={{width: {xs: '15rem', md: '29.5rem'}, fontFamily: 'monospace',
             fontWeight: 500,
             lineHeight: '1.5rem', 
            fontSize: '0.9rem', textAlign: 'left', opacity: '50%',
            color: 'black'}}>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</Typography>
            <Link to='/products/xx99mark2-headphone' className={classes.link}> <Button variant="contained" size="large" sx={{
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
        
        <Box sx={{height: '25rem', order: {xs: 2, lg: 1},width: {xs: '15rem', md: '33.75rem'},  display: 'flex', 
         justifyContent: 'center', alignItems: 'start', flexDirection: 'column', borderRadius: '8px'}}>
            
            <Typography variant='h2' sx={{ width: '18.5rem', fontFamily: 'monospace',
            letterSpacing: '1.43px', fontWeight: 700,
             lineHeight: '2.75rem', 
            fontSize: '2.5rem', textAlign: 'left', 
            color: 'black'}} 
            >XX99 MARK I
            HEADPHONES</Typography>
            <Typography sx={{width: {xs: '15rem', md: '29.5rem'}, fontFamily: 'monospace',
             fontWeight: 500,
             lineHeight: '1.5rem', 
            fontSize: '0.9rem', textAlign: 'left', opacity: '50%',
            color: 'black'}}>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</Typography>
            <Link to='/products/xx99mark1-headphone' className={classes.link}> <Button variant="contained" size="large" sx={{
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
        <Box className={classes.oneHeadphones} sx={{ order: {xs: 1, lg: 2}, borderRadius: '8px'}}></Box>
    </Box>
    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: {xs: 'column', lg: 'row'}, mt: '7rem', justifyContent: 'center', gap: '5rem'}}>
        <Box className={classes.whiteHeadphones} sx={{ borderRadius: '8px'}}></Box>
        <Box sx={{height: '25rem', width: {xs: '15rem', md: '33.75rem'},  display: 'flex',
         justifyContent: 'center', alignItems: 'start', flexDirection: 'column', borderRadius: '8px'}}>
           
            <Typography variant='h2' sx={{ width: '18.5rem', fontFamily: 'monospace',
            letterSpacing: '1.43px', fontWeight: 700,
             lineHeight: '2.75rem', 
            fontSize: '2.5rem', textAlign: 'left', 
            color: 'black'}} 
            >XX59
            HEADPHONES</Typography>
            <Typography sx={{width: {xs: '15rem', md: '29.5rem'}, fontFamily: 'monospace',
             fontWeight: 500,
             lineHeight: '1.5rem', 
            fontSize: '0.9rem', textAlign: 'left', opacity: '50%',
            color: 'black'}}>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</Typography>
            <Link to='/products/xx59-headphone' className={classes.link}> <Button variant="contained" size="large" sx={{
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
    <Shopmenu />
    </>
  )
}

export default Headphones