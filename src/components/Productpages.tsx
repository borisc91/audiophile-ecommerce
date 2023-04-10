
import {Box, Button, Typography, Container} from '@mui/material'
import speaker from '../assets/home/desktop/image-speaker-zx9.png'
import speakerz from '../assets/home/desktop/image-speaker-zx7.jpg'
import useStyles from '../styles'
import { Link } from 'react-router-dom';

function Productpages() {
    const classes = useStyles()
  return (
  <>
  <Container maxWidth="lg">
  <Box sx={{ flexWrap: {xs: 'wrap', md: 'nowrap'}, bgcolor: '#D87D4A', height: {xs: '35rem', md: '35rem', lg: '35rem'}, 
  maxWidth:'73rem', 
  borderRadius: '8px', display: 'flex'
 , justifyContent: {xs:'center', md: 'space-between'}, alignItems: {xs: 'center', md: 'end'}}}>
    <Box sx={{flexBasis: '80%', display: 'flex', justifyContent: 'center'}}>
    <Box component="img"
        sx={{
          height: {xs: '15rem', md: '25rem'},
          width: {xs: '11rem', md: '20rem'}
        }}
        alt="speaker"
        src={speaker}>

    </Box>
    </Box>
    <Box sx={{display: 'flex', flexDirection: 'column', height: {md: '100%'}, justifyContent: 'center',
     alignItems: {xs: 'center', md: 'start'}, 
     gap: {sm: '1.5rem'}, width: {xs: '100%', md: 'auto'}}}>
        <Typography sx={{ fontSize: {xs: '2rem', md: '2.9rem'}, color: 'white', fontWeight: 700,
         textAlign: {xs: 'center', md: 'left'}}} variant='h2' >ZX9 SPEAKER</Typography>
        <Typography sx={{color: 'white', opacity: '75%', textAlign: {xs: 'center', md: 'left'}}}>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</Typography>
        
              <Link to='/products/speakerzx9' className={classes.link}> <Button variant="contained" size="large" sx={{
                align: "center",
                backgroundColor: "#4C4C4C",
                '&:hover': {
                    backgroundColor: '#101010',
                   
                },
                padding: '1rem 2.5rem 1rem 2.5rem',
                marginTop: '1.2rem',
                textDecoration: 'none'
              }}>SEE PRODUCT</Button> </Link>
              
    </Box>

    </Box>
    <Box className={classes.zxspeaker} sx={{borderRadius: '8px'}}>
    <Box sx={{mt: 8,  display: 'flex',  flexDirection: 'column', height:  '100%', justifyContent: 'center',
     alignItems: 'start', pl: {xs: 1, sm: 8},
     gap: {sm: '1.5rem'}, width: {xs: '100%', md: 'auto'}}}>
        <Typography variant='h2' sx={{fontSize: {xs: '2rem', md: '2rem'}, color: 'black',
         fontWeight: 700, textAlign: {xs: 'center', md: 'left'}}}  >ZX7 SPEAKER</Typography>
        
        <Link to='/products/speakerzx7' className={classes.link}> <Button variant="contained" size="large" sx={{
                align: "center",
               
                backgroundColor: "transparent",
                color: "black",
                border: '1px solid black',
                '&:hover': {
                    backgroundColor: '#101010',
                    color: "white",
                   
                },
                padding: '1rem 2.5rem 1rem 2.5rem',
                marginTop: '1.2rem'
              }}>SEE PRODUCT</Button></Link>
    </Box>
    </Box>
    
    <Box sx={{display: 'flex', justifyContent: 'space-between', mt: '3rem'}}>
        <Box className={classes.yearphones} sx={{height: '20rem', width: '33.75rem', borderRadius: '8px'}} >
        
        </Box>
        <Box sx={{height: '20rem', width: '33.75rem', backgroundColor: '#F2F2F2', display: 'flex',
         justifyContent: 'center', alignItems: 'center', flexDirection: 'column', borderRadius: '8px'}}>
            <Typography sx={{ fontSize: {xs: '2rem', md: '2rem'}, color: 'black', fontWeight: 700, textAlign: {xs: 'center', md: 'left'}}} variant='h2'>YX1 EARPHONES</Typography>
            <Link to='/products/earphoneyx1' className={classes.link}> <Button variant="contained" size="large" sx={{
                
                
                backgroundColor: "transparent",
                color: "black",
                border: '1px solid black',
                '&:hover': {
                    backgroundColor: '#101010',
                    color: "white",
                   
                },
                padding: '1rem 2.5rem 1rem 2.5rem',
                marginTop: '1.2rem',
                mr: '3.6rem'
              }}>SEE PRODUCT</Button></Link>
        </Box>
    </Box>

    

  </Container>
  </>
  );
};

export default Productpages