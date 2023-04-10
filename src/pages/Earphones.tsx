import React from 'react'
import {Box, Button, Typography, Card, CardContent, CardMedia} from '@mui/material'
import useStyles from '../styles'
import { Link } from 'react-router-dom'
import Shopmenu from '../components/Shopmenu'

function Earphones() {
    const classes = useStyles()


    return (
      <>
      <Box sx={{backgroundColor: '#141414', height: '13rem', display: 'flex', alignItems: 'center', justifyContent: 'center', pb: 5}}>
          <Typography variant="h1" sx={{fontFamily: 'monospace',pr: 4.5,letterSpacing: '1.43px', fontWeight: 700, lineHeight: '2.75rem', fontSize: '2.5rem',color: 'white', textAlign: 'center'}}>EARPHONES</Typography>
  
      </Box>
      <Box sx={{display: 'flex', alignItems: 'center', flexDirection: {xs: 'column', lg: 'row'}, mt: '7rem', justifyContent: 'center', gap: '5rem'}}>
          <Box className={classes.earphones} sx={{ borderRadius: '8px'}}></Box>
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
              >YX1 WIRELESS
              EARPHONES</Typography>
              <Typography sx={{width: '29.5rem', fontFamily: 'monospace',
               fontWeight: 500,
               lineHeight: '1.5rem', 
              fontSize: '0.9rem', textAlign: 'left', opacity: '50%',
              color: 'black'}}>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</Typography>
              <Link to='/products/earphoneyx1' className={classes.link}> <Button variant="contained" size="large" sx={{
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

export default Earphones