import React from 'react'
import Typography from '@mui/material/Typography';
import useStyles from '../styles'
import {Box, Button} from '@mui/material'
import { Link } from 'react-router-dom';





const Callbutton = () => {

  const classes = useStyles()

  

  return (
    <>
    
       <Box className={classes.container}  sx={{width: 1, pl:{lg:17}, 
        display: 'flex', justifyContent: 'center', alignItems:{xs: 'center', lg: 'start'},  flexDirection: 'column',
         gap: "30px"}}>
        <Typography variant="h6"
              
              sx={{
               
                textAlign: 'center',
                letterSpacing: '10px',               
                fontFamily: 'monospace',
                fontWeight: 600,
                color: 'inherit',
                textDecoration: 'none',
              }}>NEW PRODUCT</Typography>
              <Typography variant="h1" sx={{textAlign: {xs:'center', lg:'left'},
               fontSize: {xs: '3.5rem', sm: '4rem', md: '6rem'},
               width: {lg:0.6}
               }}>XX99 MARK II
               HEADPHONES</Typography>
              <Typography sx={{textAlign: {xs:'center', lg:'left'}, width: {lg:0.4}, fontSize: {lg: '1.5rem', sm: '1.3rem'}}}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</Typography>
           
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
              
        
    </>
  )
}

export default Callbutton;