import React from 'react'
import {useState } from 'react'
import { cartActions } from '../../../store'
import {  RootState } from '../../../store'
import { useDispatch, useSelector } from 'react-redux'
import {Box, Button, Typography, TextField, List, ListItem, ListItemText, MenuItem} from '@mui/material'
import useStyles from '../../../styles'
import { Link } from 'react-router-dom'
import Shopmenu from '../../../components/Shopmenu'
import image1 from '../../../assets/product-zx7-speaker/desktop/image-gallery-1.jpg'
import image2 from '../../../assets/product-zx7-speaker/desktop/image-gallery-2.jpg'
import image3 from '../../../assets/product-zx7-speaker/desktop/image-gallery-3.jpg'
import { options } from '../earphones/Yx1earphone'

function Zx7() {
    

    const price: number = 3500;
  
    const classes = useStyles()

    const cart = useSelector((state: RootState) => state.cart)

  const dispatch = useDispatch();


    const [zx7, setZx7] = useState({
      id: "ad21iai290zx7",
    nameOfProduct: 'ZX7',
    url: '/image-zx7-speaker.jpg',
    amount: 1,
    price,
    fullPrice: price
    })

    
  
    const cartHandler = (e: React.FormEvent<HTMLElement>) => {

      e.preventDefault()

      dispatch(cartActions.addToCart(zx7))

    }

    console.log(cart)
  
    
  
  return (
    <>
    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: {xs: 'column', md: 'row'}, mt: '7rem', justifyContent: 'center', gap: '5rem'}}>
          <Box className={classes.zx7speaker} sx={{ borderRadius: '8px'}}></Box>
          <Box sx={{height: '25rem', maxWidth: '33.75rem',  display: 'flex',
           justifyContent: 'space-evenly', alignItems: 'start', flexDirection: 'column', borderRadius: '8px'}}>
           
             
              <Typography variant='h2' sx={{ width: '18.5rem', fontFamily: 'monospace',
              letterSpacing: '1.43px', fontWeight: 700,
               lineHeight: '2.75rem', 
              fontSize: '2.5rem', textAlign: 'left', 
              color: 'black'}} 
              >ZX7
              SPEAKER</Typography>
              <Typography sx={{width: {xs: '15rem',md: '29.5rem'}, fontFamily: 'monospace',
               fontWeight: 500,
               lineHeight: '1.5rem', 
              fontSize: '0.9rem', textAlign: 'left', opacity: '50%',
              color: 'black'}}>Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</Typography>
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
             
           

            setZx7({
              id: "ad21iai290zx7",
    nameOfProduct: 'ZX7',
    url: '/image-zx7-speaker.jpg',
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
                color: 'black'}} >Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. 
  <br></br>
  <br></br>
  
  The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.</Typography>
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
                <ListItemText primary="3.5mm 7.5m Audio Cable" sx={{  fontFamily: 'Manrope',
                 fontWeight: 500,
                 lineHeight: '1.5rem', 
                 opacity: '0.5',
                fontSize: '1rem', textAlign: 'left', 
                ml: 2,
                color: 'black'}} />
                </ListItem>
                <ListItem disablePadding>
                <span className={classes.word}>1x</span>
                <ListItemText primary="7.5m Optical Cable" sx={{  fontFamily: 'Manrope',
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

export default Zx7