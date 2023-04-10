import React from 'react'
import {Box, Button, Typography, Card, CardContent, CardMedia} from '@mui/material'
import earphonesDesktop  from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import speakers from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import headphones from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import { Link } from 'react-router-dom'
import useStyles from '../styles'

function Shopmenu() {

     const classes = useStyles()


  return (

    <>
    <Box sx={{display: 'flex', flexWrap: {xs: 'wrap', md: 'nowrap'},  justifyContent: 'center', 
    alignItems: 'center',  height: {xs: '79.4rem', md: '31.4rem'}, mb: '5.5rem', gap: {xs: 0, md:'4rem'}}}>
    <Box>
       <CardMedia sx={{position: 'relative', left: '3rem', top: '2.4rem', mb: -13.8, width: '250px', height: '250px'}} component="img" image={headphones} ></CardMedia>
            <Card  sx={{  backgroundColor: '#F1F1F1', minWidth: 350, minHeight: 204, display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: "center" }}>
                <CardContent>
                    <Typography sx={{fontSize: {xs: "15px", lg: "18px"}, fontWeight: "bold", mb: "10px"}}>HEADPHONES</Typography>
                    <Link to='/category/headphones' className={classes.shopLink}>   <Typography sx={{fontSize: {xs: "13px", lg: "18px", textAlign: 'center'}, fontWeight: "bold", opacity: "0.5", '&:hover': {
                    color: '#FBAF85',
                    opacity: '1'
                   
                }}}>SHOP</Typography> </Link>
                </CardContent>
            </Card>
            </Box>
      
       <Box>
       <CardMedia sx={{position: 'relative', left: '3rem', top: '2.4rem', mb: -15, width: '260px', height: '260px'}} component="img" image={speakers} ></CardMedia>
            <Card  sx={{ backgroundColor: '#F1F1F1', minWidth: 350, minHeight: 204, display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: "center" }}>
                <CardContent>
                    <Typography sx={{fontSize: {xs: "15px", lg: "18px"}, fontWeight: "bold", mb: "10px"}}>SPEAKERS</Typography>
                    <Link to='/category/speakers' className={classes.shopLink}> <Typography sx={{fontSize: {xs: "13px", lg: "18px", textAlign: 'center'}, fontWeight: "bold", opacity: "0.5", '&:hover': {
                    color: '#FBAF85',
                    opacity: '1'
                   
                }}}>SHOP</Typography></Link>
                </CardContent>
            </Card>
            </Box>
      
            <Box>
       <CardMedia sx={{position: 'relative', left: '3rem', top: '3rem', mb: -15, width: '260px', height: '260px'}} component="img" image={earphonesDesktop} ></CardMedia>
            <Card  sx={{ backgroundColor: '#F1F1F1', minWidth: 350, minHeight: 204, display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: "center" }}>
                <CardContent>
                    <Typography sx={{fontSize: {xs: "15px", lg: "18px"}, fontWeight: "bold", mb: "10px"}}>EARPHONES</Typography>
                    <Link to='/category/earphones' className={classes.shopLink}><Typography sx={{fontSize: {xs: "13px", lg: "18px", textAlign: 'center'}, fontWeight: "bold", opacity: "0.5", '&:hover': {
                    color: '#FBAF85',
                    opacity: '1'
                   
                }}}>SHOP</Typography></Link>
                </CardContent>
            </Card>
            </Box>

        
            

        
    </Box>
    
    </>
  )
}

export default Shopmenu;