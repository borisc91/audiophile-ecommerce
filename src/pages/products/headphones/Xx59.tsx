import React from 'react'
import { cartActions } from '../../../store'
import {  RootState } from '../../../store'
import { useDispatch, useSelector } from 'react-redux'
import {useState } from 'react'
import {Box, Button, Typography, TextField, List, ListItem, ListItemText, MenuItem} from '@mui/material'
import useStyles from '../../../styles'
import { Link } from 'react-router-dom'
import Shopmenu from '../../../components/Shopmenu'
import image1 from '../../../assets/product-xx59-headphones/desktop/image-gallery-1.jpg'
import image2 from '../../../assets/product-xx59-headphones/desktop/image-gallery-2.jpg'
import image3 from '../../../assets/product-xx59-headphones/desktop/image-gallery-3.jpg'
import { options } from '../earphones/Yx1earphone'

function Xx59() {

  
    

    const price: number = 899;

    const classes = useStyles()

    const cart = useSelector((state: RootState) => state.cart)

  const dispatch = useDispatch();


    const [xx59, setXx59] = useState({
      id: "po59i8900i9",
    nameOfProduct: 'XX59',
    url: '/image-xx59-headphones.jpg',
    amount: 1,
    price,
    fullPrice: price
    })

    
  
    const cartHandler = (e: React.FormEvent<HTMLElement>) => {

      e.preventDefault()

      dispatch(cartActions.addToCart(xx59))

    }

    console.log(cart)
 
    

  return (
    <>
    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: {xs: 'column', md: 'row'}, mt: '7rem', justifyContent: 'center', gap: '5rem'}}>
        <Box className={classes.whiteHeadphones} sx={{ borderRadius: '8px'}}></Box>
        <Box sx={{height: '25rem', maxWidth: '33.75rem',  display: 'flex',
         justifyContent: 'space-evenly', alignItems: 'start', flexDirection: 'column', borderRadius: '8px'}}>
           
            <Typography variant='h2' sx={{ width: '18.5rem', fontFamily: 'monospace',
            letterSpacing: '1.43px', fontWeight: 700,
             lineHeight: '2.75rem', 
            fontSize: '2.5rem', textAlign: 'left', 
            color: 'black'}} 
            >XX59
            HEADPHONES</Typography>
            <Typography sx={{width: {xs: '15rem',md: '29.5rem'}, fontFamily: 'monospace',
             fontWeight: 500,
             lineHeight: '1.5rem', 
            fontSize: '0.9rem', textAlign: 'left', opacity: '50%',
            color: 'black'}}>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</Typography>
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
             
           

            setXx59({
              id: "po59i8900i9",
            nameOfProduct: 'XX59',
            url: '/image-xx59-headphones.jpg',
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
              color: 'black'}} >These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.
<br></br>
<br></br>

More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.</Typography>
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
        alt="Microphone"
        src={image1}
      />
      <Box
        component="img"
        sx={{
          
          
          maxHeight: { xs: '15rem', md: '17rem' },
          width: { xs: '15rem', md: '31.75rem' },
        }}
        alt="Headphones"
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
                <Box className={classes.blackHeadphones} sx={{ borderRadius: '8px', width: {xs: '13rem', md: '15rem', lg: '20rem'}, height: {xs: '12rem', md: '13.5rem', lg: '18.9rem'}}}></Box>
                <Typography sx={{  fontFamily: 'Manrope',
               fontWeight: 700,
               lineHeight: '2rem', 
               letterSpacing: '1.71px',
               
              fontSize: '1.5rem', textAlign: 'center'
          
             }}>XX99 MARK II</Typography>
                <Link to='/products/xx99mark2-headphone' className={classes.link}> <Button variant="contained" size="small" sx={{
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

export default Xx59