import React from 'react'
import {useState } from 'react'
import { cartActions } from '../../../store'
import {  RootState } from '../../../store'
import { useDispatch, useSelector } from 'react-redux'
import {Box, Button, Typography, TextField, List, ListItem, ListItemText, MenuItem} from '@mui/material'
import useStyles from '../../../styles'
import { Link } from 'react-router-dom'
import Shopmenu from '../../../components/Shopmenu'
import image1 from '../../../assets/product-zx9-speaker/desktop/image-gallery-1.jpg'
import image2 from '../../../assets/product-zx9-speaker/desktop/image-gallery-2.jpg'
import image3 from '../../../assets/product-zx9-speaker/desktop/image-gallery-3.jpg'
import { options } from '../earphones/Yx1earphone'

function Zx9() {
  
  const price: number = 4500;

  const classes = useStyles()

    const cart = useSelector((state: RootState) => state.cart)

  const dispatch = useDispatch();


    const [zx9, setZx9] = useState({
      id: "ad21iai290zx9",
    nameOfProduct: 'ZX9',
    amount: 1,
    url: '/image-zx9-speaker.jpg',
    price,
    fullPrice: price
    })

    
  
    const cartHandler = (e: React.FormEvent<HTMLElement>) => {

      e.preventDefault()

      dispatch(cartActions.addToCart(zx9))

    }

    console.log(cart)

  

return (
  <>
  <Box sx={{display: 'flex', alignItems: 'center', flexDirection: {xs: 'column', md: 'row'}, mt: '7rem', justifyContent: 'center', gap: '5rem'}}>
        <Box className={classes.zx9speaker} sx={{ borderRadius: '8px'}}></Box>
        <Box sx={{height: '25rem', maxWidth: '33.75rem',  display: 'flex',
         justifyContent: 'space-evenly', alignItems: 'start', flexDirection: 'column', borderRadius: '8px'}}>
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
            <Typography sx={{width: {xs: '15rem',md: '29.5rem'}, fontFamily: 'monospace',
             fontWeight: 500,
             lineHeight: '1.5rem', 
            fontSize: '0.9rem', textAlign: 'left', opacity: '50%',
            color: 'black'}}>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</Typography>
           <Typography sx={{fontFamily: 'monospace',
             fontWeight: 700,
             lineHeight: '1.5rem', 
            fontSize: '1.12rem', textAlign: 'left',
            color: 'black'}}>${price.toLocaleString()}</Typography>
            <Box >
            <form onSubmit={cartHandler}>
                <TextField sx={{backgroundColor: '#F1F1F1', textAlign: 'center', width: '7.5rem'}}
          id="outlined-select-currency"
          select
          size="small"
          defaultValue="1"
          onChange={(e) => {
             
           

            setZx9({
              id: "ad21iai290zx9",
    nameOfProduct: 'ZX9',
    url: '/image-zx9-speaker.jpg',
            amount: parseInt(e.target.value),
            price,
            fullPrice: parseInt(e.target.value)*price
            })
            
  
            
          }}
          
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="contained" type="submit" size="small" sx={{
            width: {xs: '7rem', sm: '10rem'},
            height: '2.5rem',
            ml: 3,
                align: "center",
                backgroundColor: "#D87D4a",
                '&:hover': {
                    backgroundColor: '#FBAF85',
                   
                },
                padding: '1rem 2rem 1rem 2rem',
               
                textDecoration: 'none'
              }}>ADD TO CART</Button>
        </form>

            </Box>
        </Box>
        </Box>
        <Box sx={{display: 'flex', flexDirection: {xs: 'column', lg: 'row'}, justifyContent: 'center',
         alignItems: 'center',
         gap: '5rem', pr: {xs: '0', lg: 30}, mt: '10rem'}}>
            <Box sx={{width: {xs: '15rem',md: '38rem'}}}>
            <Typography variant='h3' sx={{  fontFamily: 'monospace',
              letterSpacing: '1.14px', fontWeight: 700,
               lineHeight: '2.2rem', 
              fontSize: '2rem', textAlign: 'left', 
              mb:3,
              color: 'black'}} >FEATURES</Typography>
            <Typography variant='h3' sx={{  fontFamily: 'Manrope',
               fontWeight: 500,
               lineHeight: '1.5rem', 
               opacity: '0.5',
              fontSize: '1rem', textAlign: 'left', 
              color: 'black'}} >Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).
<br></br>
<br></br>

Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.</Typography>
            </Box>
            <Box>
            <Typography variant='h3' sx={{  fontFamily: 'monospace',
              letterSpacing: '1.14px', fontWeight: 700,
               lineHeight: '2.2rem', 
              fontSize: '2rem', textAlign: 'left', 
              mb:1,
              color: 'black'}}>IN THE BOX</Typography>
              <List>
          <ListItem disablePadding>
          <span className={classes.word}>2x</span>
              <ListItemText primary="Speaker Unit" sx={{  fontFamily: 'Manrope',
               fontWeight: 500,
               lineHeight: '1.5rem', 
               opacity: '0.5',
              fontSize: '1rem', textAlign: 'left', 
              ml: 2,
              color: 'black'}} />
              </ListItem>
              <ListItem disablePadding>
<span className={classes.word}>2x</span>
              <ListItemText primary="Speaker Cloth Panel" sx={{  fontFamily: 'Manrope',
               fontWeight: 500,
               lineHeight: '1.5rem', 
               opacity: '0.5',
              fontSize: '1rem', textAlign: 'left', 
              ml: 2,
              color: 'black'}} />
              </ListItem>
              <ListItem disablePadding>
        <span className={classes.word}>1x</span>
              <ListItemText primary="User Manual" sx={{  fontFamily: 'Manrope',
               fontWeight: 500,
               lineHeight: '1.5rem', 
               opacity: '0.5',
              fontSize: '1rem', textAlign: 'left', 
              ml: 2,
              color: 'black'}} />
              </ListItem>
              <ListItem disablePadding>
              <span className={classes.word}>1x</span>
              <ListItemText primary="3.5mm 10m Audio Cable" sx={{  fontFamily: 'Manrope',
               fontWeight: 500,
               lineHeight: '1.5rem', 
               opacity: '0.5',
              fontSize: '1rem', textAlign: 'left', 
              ml: 2,
              color: 'black'}} />
              </ListItem>
              <ListItem disablePadding>
              <span className={classes.word}>1x</span>
              <ListItemText primary="10m Optical Cable" sx={{  fontFamily: 'Manrope',
               fontWeight: 500,
               lineHeight: '1.5rem', 
               opacity: '0.5',
              fontSize: '1rem', textAlign: 'left', 
              ml: 2,
              color: 'black'}} />
        
          </ListItem>
          </List>
            
            </Box>
        </Box>
        <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'},
         justifyContent: 'center', alignItems: 'center', gap: '3.5rem', mt: '10rem'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center',  gap: '2rem'}}>
            <Box
        component="img"
        sx={{
          maxHeight: { xs: '15rem', md: '17rem' },
          width: { xs: '15rem', md: '31.75rem' },
        }}
        alt="Speaker"
        src={image1}
      />
      <Box
        component="img"
        sx={{
          
          
          maxHeight: { xs: '15rem', md: '17rem' },
          width: { xs: '15rem', md: '31.75rem' },
        }}
        alt="Room"
        src={image2}
      />
                
                
            </Box>
            <Box
        component="img"
        sx={{
         
          
          height: { xs: '23rem', md: '36rem' },
          width: { xs: '15rem', md: '33.75rem' },
        }}
        alt="Headphones"
        src={image3}
      />
            
        </Box>

        <Box sx={{mt: 20}}>
            <Typography sx={{  fontFamily: 'Manrope',
            pb: 6,
               fontWeight: 700,
               lineHeight: '2rem', 
               letterSpacing: '1.14px',
               
              fontSize: '2rem', textAlign: 'center'}}>YOU MAY ALSO LIKE</Typography>
            <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'center', gap: {xs: '0rem',md: '5rem'}}}>
                <Box sx={{display: 'flex', flexDirection: 'column',height: '30rem', justifyContent: 'space-around', alignItems: 'center'}}>
                <Box className={classes.zx7speaker} sx={{ borderRadius: '8px', width: {xs: '13rem', md: '15rem', lg: '20rem'}, height: {xs: '12rem', md: '13.5rem', lg: '18.9rem'}}}></Box>
                <Typography sx={{  fontFamily: 'Manrope',
               fontWeight: 700,
               lineHeight: '2rem', 
               letterSpacing: '1.71px',
               
              fontSize: '1.5rem', textAlign: 'center'
          
             }}>ZX7 SPEAKER</Typography>
                <Link to='/products/speakerzx7' className={classes.link}> <Button variant="contained" size="small" sx={{
                align: "center",
                backgroundColor: "#D87D4a",
                '&:hover': {
                    backgroundColor: '#FBAF85',
                   
                },
                
                width: '8rem',
                height: '3rem',
                
                textDecoration: 'none'
              }}>SEE PRODUCT</Button> </Link>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column',height: '30rem', justifyContent: 'space-around', alignItems: 'center'}}>
                <Box className={classes.oneHeadphones} sx={{ borderRadius: '8px',  width: {xs: '13rem', md: '15rem', lg: '20rem'}, height: {xs: '12rem', md: '13.5rem', lg: '18.9rem'}}}></Box>
                <Typography sx={{  fontFamily: 'Manrope',
               fontWeight: 700,
               lineHeight: '2rem', 
               letterSpacing: '1.71px',
               
              fontSize: '1.5rem', textAlign: 'center'
          
             }}>XX99 MARK I</Typography>
                <Link to='/products/xx99mark1-headphone' className={classes.link}> <Button variant="contained" size="small" sx={{
                align: "center",
                backgroundColor: "#D87D4a",
                '&:hover': {
                    backgroundColor: '#FBAF85',
                   
                },
                
                width: '8rem',
                height: '3rem',
                
                textDecoration: 'none'
              }}>SEE PRODUCT</Button> </Link>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column',height: '30rem', justifyContent: 'space-around', alignItems: 'center'}}>
                <Box className={classes.whiteHeadphones} sx={{ borderRadius: '8px',  width: {xs: '13rem', md: '15rem', lg: '20rem'}, height: {xs: '12rem', md: '13.5rem', lg: '18.9rem'}}}></Box>
                <Typography sx={{  fontFamily: 'Manrope',
               fontWeight: 700,
               lineHeight: '2rem', 
               letterSpacing: '1.71px',
               
              fontSize: '1.5rem', textAlign: 'center'
          
             }}>XX59</Typography>
                <Link to='/products/xx59-headphone' className={classes.link}> <Button variant="contained" size="small" sx={{
                align: "center",
                backgroundColor: "#D87D4a",
                '&:hover': {
                    backgroundColor: '#FBAF85',
                   
                },
                
                width: '8rem',
                height: '3rem',
                
                textDecoration: 'none'
              }}>SEE PRODUCT</Button> </Link>
                </Box>
            </Box>
        </Box>
        <Shopmenu />
        </>
)
}

export default Zx9