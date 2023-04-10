import React from 'react'
import {useState } from 'react'
import { cartActions } from '../../../store'
import {  RootState } from '../../../store'
import { useDispatch, useSelector } from 'react-redux'
import {Box, Button, Typography, TextField, List, ListItem, ListItemText, MenuItem} from '@mui/material'
import useStyles from '../../../styles'
import { Link } from 'react-router-dom'
import Shopmenu from '../../../components/Shopmenu'
import { options } from '../earphones/Yx1earphone'

function Xx99mark2() {
    

    const price: number = 2999;

    const classes = useStyles()

    const cart = useSelector((state: RootState) => state.cart)

  const dispatch = useDispatch();


    const [xx99i2, setXx99i2] = useState({
      id: "po59i8210x99i2",
    nameOfProduct: 'XX99 MK II',
    amount: 1,
    url: '/image-xx99-mark-two-headphones.jpg',
    price,
    fullPrice: price
    })

    
  
    const cartHandler = (e: React.FormEvent<HTMLElement>) => {

      e.preventDefault()

      dispatch(cartActions.addToCart(xx99i2))

    }

    console.log(cart)
 

  return (
    <>
    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: {xs: 'column', md: 'row'}, mt: '7rem', justifyContent: 'center', gap: '5rem'}}>
        <Box className={classes.blackHeadphones} sx={{ borderRadius: '8px'}}></Box>
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
            >XX99 MARK II
            HEADPHONES</Typography>
            <Typography sx={{width: {xs: '15rem',md: '29.5rem'}, fontFamily: 'monospace',
             fontWeight: 500,
             lineHeight: '1.5rem', 
            fontSize: '0.9rem', textAlign: 'left', opacity: '50%',
            color: 'black'}}>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</Typography>
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
             
           

            setXx99i2({
              id: "po59i8210x99i2",
              nameOfProduct: 'XX99 MK II',
            amount: parseInt(e.target.value),
            price,
            url: '/image-xx99-mark-two-headphones.jpg',
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
              color: 'black'}} >Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.
<br></br>
<br></br>

              The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</Typography>
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
          <span className={classes.word}>1x</span>
              <ListItemText primary="Headphone Unit" sx={{  fontFamily: 'Manrope',
               fontWeight: 500,
               lineHeight: '1.5rem', 
               opacity: '0.5',
              fontSize: '1rem', textAlign: 'left', 
              ml: 2,
              color: 'black'}} />
              </ListItem>
              <ListItem disablePadding>
<span className={classes.word}>2x</span>
              <ListItemText primary="Replacement Earcups" sx={{  fontFamily: 'Manrope',
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
              <ListItemText primary="3.5mm 5m Audio Cable" sx={{  fontFamily: 'Manrope',
               fontWeight: 500,
               lineHeight: '1.5rem', 
               opacity: '0.5',
              fontSize: '1rem', textAlign: 'left', 
              ml: 2,
              color: 'black'}} />
              </ListItem>
              <ListItem disablePadding>
              <span className={classes.word}>1x</span>
              <ListItemText primary="Travel Bag" sx={{  fontFamily: 'Manrope',
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
        <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'center', alignItems: 'center', gap: '2.5rem', mt: '10rem', ml: 3}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center',  gap: '2rem'}}>
                <Box className={classes.marktwogallerytwo}></Box>
                <Box className={classes.marktwogallerythree}></Box>
            </Box>
            <Box className={classes.marktwogalleryone}></Box>
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
                <Box className={classes.oneHeadphones} sx={{ borderRadius: '8px', width: {xs: '13rem', md: '15rem', lg: '20rem'}, height: {xs: '12rem', md: '13.5rem', lg: '18.9rem'}}}></Box>
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
                <Box sx={{display: 'flex', flexDirection: 'column',height: '30rem', justifyContent: 'space-around', alignItems: 'center'}}>
                <Box className={classes.speakers} sx={{ borderRadius: '8px',  width: {xs: '13rem', md: '15rem', lg: '20rem'}, height: {xs: '12rem', md: '13.5rem', lg: '18.9rem'}}}></Box>
                <Typography sx={{  fontFamily: 'Manrope',
               fontWeight: 700,
               lineHeight: '2rem', 
               letterSpacing: '1.71px',
               
              fontSize: '1.5rem', textAlign: 'center'
          
             }}>ZX9 SPEAKER</Typography>
                <Link to='/products/speakerzx9' className={classes.link}> <Button variant="contained" size="small" sx={{
                align: "center",
                backgroundColor: "#D87D4a",
                '&:hover': {
                    backgroundColor: '#FBAF85',
                   
                },
                
                width: '8rem',
                height: '3rem',
                mb:{xs: 5, md: 0},
                textDecoration: 'none'
              }}>SEE PRODUCT</Button> </Link>
                </Box>
            </Box>
        </Box>
        <Shopmenu />
        </>
  )
}

export default Xx99mark2