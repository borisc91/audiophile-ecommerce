import React from 'react'
import {Box, Button, Typography, Modal, TextField, MenuItem} from '@mui/material'
import { Link } from 'react-router-dom';

import { cartActions } from '../store'
import useStyles from '../styles'
import {  RootState } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import { options } from '../pages/products/earphones/Yx1earphone';


const Cart:React.FC<{handleClose: () => void, open:boolean}> = (props) => {

    const classes = useStyles();


    const cart = useSelector((state: RootState) => state.cart)
    const totalAmount = useSelector((state: RootState) => state.totalAmount)

  const dispatch = useDispatch();

 
  
    
  

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'background.paper',
        border: '2px solid #000',
        borderRadius: 2,
        padding: 4
      };

  const removeHandler = () => {
    dispatch(cartActions.removeAll())
  }


  return (
    <>
     <Modal
  open={props.open}
  onClose={props.handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>

  <Box sx={style}>
  {cart.length > 0 ?
  <Box>
  
    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2}}>
    
    <Typography id="modal-modal-title" variant="h5" component="h2">
      Cart({cart.length})
    </Typography>
    <Typography id="modal-modal-description"  sx={{cursor: 'pointer'}} onClick={removeHandler} >
      Remove all
    </Typography>
    </Box>
    {cart.map(product => 
        <Box key={product.id} sx={{display: 'flex', alignItems: 'center', mt:2}}>
        <Box
            component="img"
            sx={{
              
              
              maxHeight: { xs: '4rem' },
              width: { xs: '4rem' },
            }}
            alt={product.nameOfProduct}
            src={product.url}
          />
          <Box sx={{display: 'flex', flexDirection: 'column', ml: 2, width: {xs: '70%', sm: '80%', lg: '12rem'}}}>
            <Typography sx={{fontSize: '15px', fontFamily: 'Manrope', fontWeight: '700'}}>{product.nameOfProduct}</Typography>
            <Typography sx={{ fontSize: '13px', fontFamily: 'Manrope', fontWeight: '700', opacity: '0.5'}}>${product.price}</Typography>
          </Box>
          <TextField sx={{backgroundColor: '#F1F1F1', textAlign: 'center', width: '7.5rem'}}
          id="outlined-select-currency"
          select
          size="small"
          value={product.amount}
          onChange={(e) => {

           
             
    
            dispatch(cartActions.finalCart({
                
            nameOfProduct: product.nameOfProduct,
            id: product.id,
            url: product.url,
            amount: parseInt(e.target.value),
            price: product.price,
            fullPrice: product.price * parseInt(e.target.value)
             } ))
  
            
          }}
          
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
              
    
          
    
          
        
      </Box>
       )}
    
  
  <Box sx={{display: 'flex', justifyContent: 'space-between', my: 2}}>
  <Typography sx={{fontSize: '15px', fontFamily: 'Manrope', fontWeight: '500', opacity: '0.5'}}>TOTAL:</Typography>
        <Typography sx={{fontSize: '18px', fontFamily: 'Manrope', fontWeight: '700'}}>$ {totalAmount}</Typography>
        </Box>
        <Link to='/checkout' className={classes.link} onClick={props.handleClose}>  <Button variant="contained" size="large" sx={{
                  align: "center",
                  width: '100%',
                  backgroundColor: "#D87D4a",
                  '&:hover': {
                      backgroundColor: '#FBAF85',
                     
                  },
                  padding: '0.5rem 1.75rem 0.5rem 1.75rem',
                  my: '1.2rem',
                  
                  textDecoration: 'none'
                }}>CHECKOUT</Button> </Link>

</Box>
 :  
 <Box>
    <Typography sx={{fontSize: '18px', fontFamily: 'Manrope', fontWeight: '700'}}>Your Cart Is Empy</Typography>
    <p>Your Shopping Cart lives to serve. Give it purpose.</p>
    </Box>}
  </Box>
 
  
</Modal>

     
    </>
  )
}

export default Cart