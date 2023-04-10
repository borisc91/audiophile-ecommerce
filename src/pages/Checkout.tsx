import {useState} from 'react'
import {Box, Button, Grid, InputLabel, Typography, TextField} from '@mui/material'
import { cartActions } from '../store'
import cashon from '../assets/checkout/icon-cash-on-delivery.svg'
import {  RootState } from '../store'
import {useSelector, useDispatch } from 'react-redux'
import Thankyoumodal from '../components/Thankyoumodal'

interface Props {
  
  window?: () => Window;
}


function Checkout(props: Props) {

  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart)
    const totalAmount = useSelector((state: RootState) => state.totalAmount)

    const [open, setOpen] = useState<boolean>(false);
    

    const handleOpen = () => {
      setOpen(true)
     
        dispatch(cartActions.removeAll())
      }
  
    const handleClose = () => {setOpen(false)
      window.location.replace('/')};
    
    

  

  const [eMoney, setEmoney] = useState<boolean>(false);


  const eMoneyHandler = () => {
    setEmoney(prevState => !prevState)
  };

  

  return (
    <>
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
    <form>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: {xs: 'center', lg: 'start'}, gap: '2rem',
       width: '100%', mt: 5, flexDirection: {xs: 'column', lg: 'row'}}}>
    <Box sx={{backgroundColor: "white", width: {xs: '70%', sm: '35rem', md: '45.3rem'},
     height: '100%', pb: 3, ml: {xs: 0, lg: 25}}}>
      <Typography variant='h1' sx={{fontSize: '32px', fontFamily: 'monospace', fontWeight: '700', ml: 3}} >CHECKOUT</Typography>
    
      <Box sx={{ml: 3, mr: 2}}>
        <Box sx={{mt: 4}}>
      <Typography sx={{mb: 2,color: '#D87D4A', fontSize: '13px', fontFamily: 'monospace', fontWeight: '700'}}>BILLING DETAILS</Typography>
      <Grid container spacing = {2}>
        <Grid item xs={6}>
      
      
      <InputLabel htmlFor='display-name' sx={{fontSize: '13px', fontFamily: 'monospace', fontWeight: '700'}}>Name</InputLabel>
    <TextField 
          required
          color="secondary"
          size="small"
          id="display-name"
          
          placeholder="Alexei Davidenko"
          
          sx={{width: '100%', height: '10px', color: 'black'}}
        />
       </Grid>
        <Grid item xs={6}>
        <InputLabel htmlFor='email' sx={{fontSize: '13px', fontFamily: 'monospace', fontWeight: '700'}}>Name</InputLabel>
       
    <TextField
          required
          color="secondary"
          size="small"
          id="email"
          placeholder="alexei@gmail.com"
          sx={{width: '100%'}}
        />
        </Grid>
        <Grid item xs={6}>
        <InputLabel htmlFor='phone-number' sx={{fontSize: '13px', fontFamily: 'monospace', fontWeight: '700'}}>Phone Number</InputLabel>
       
         <TextField
          required
          color="secondary"
          size="small"
          id="phone-number"
          placeholder="+381615432889"
          sx={{width: '100%'}}
        />
        </Grid>
        </Grid>
        </Box>
        <Box>
        
         <Typography sx={{mb: 2.5, mt: 6.5, color: '#D87D4A', fontSize: '13px', fontFamily: 'monospace', fontWeight: '700'}}>SHIPPING INFO</Typography>
         <Grid container spacing={2}>
          <Grid item sm={12}>
          <InputLabel htmlFor='address' sx={{fontSize: '13px', fontFamily: 'monospace', fontWeight: '700'}}>Address</InputLabel>
         <TextField
          required
          color="secondary"
          size="small"
          id="address"
          placeholder="1 Zmaj Jovina"
          sx={{width: '100%'}}
        />
        </Grid>
        <Grid item xs={6}>
        <InputLabel htmlFor='zip-code' sx={{fontSize: '13px', fontFamily: 'monospace', fontWeight: '700'}}>ZIP Code</InputLabel>
        <TextField
          required
          color="secondary"
          size="small"
          id="zip-code"
          placeholder="21000"
          sx={{width: '100%'}}
        />
         </Grid>
         <Grid item xs={6}>
         <InputLabel htmlFor='city' sx={{fontSize: '13px', fontFamily: 'monospace', fontWeight: '700'}}>City</InputLabel>
        <TextField
          required
          color="secondary"
          size="small"
          id="city"
          placeholder="Novi Sad"
          sx={{width: '100%'}}
        />
        </Grid>
        <Grid item xs={6}>
        <InputLabel htmlFor='country' sx={{fontSize: '13px', fontFamily: 'monospace', fontWeight: '700'}}>Country</InputLabel>
        <TextField
          required
          color="secondary"
          size="small"
          id="country"
          placeholder="Serbia"
          sx={{width: '100%'}}
        />
        </Grid>
        </Grid>
        </Box>
        <Box>
        <Typography sx={{mb: 2.5, mt: 6.5, color: '#D87D4A', fontSize: '13px', fontFamily: 'monospace', fontWeight: '700'}}>PAYMENT DETAILS</Typography>
        <Grid container spacing={2}>
        <Grid item sm={6}>
            
            <Typography sx={{fontSize: '12px', fontFamily: 'monospace', fontWeight: '700', opacity: '0.8'}}>Payment Method</Typography>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{border: 1, borderColor: '#D87D4A', borderRadius: 1, padding: 1, accentColor: '#D87D4A'}}>
              <input type="radio" id="e-Money" name="drone" value="e-Money" 
               defaultChecked onChange={eMoneyHandler} />
        <label htmlFor="e-Money">e-Money</label>
              </Box>
              <Box sx={{border: 1, borderColor: '#D87D4A', borderRadius: 1, padding: 1, accentColor: '#D87D4A', mt: 1}}>
              <input type="radio" id="Cash on Delivery" name="drone" value="Cash on Delivery"
               defaultChecked={eMoney} onChange={eMoneyHandler} />
        <label htmlFor="Cash on Delivery">Cash on Delivery</label>
              </Box>
            
      
      </Grid>
      {!eMoney ? <Grid container spacing={2} sx={{mt:2}}><Grid item xs={6}>
      
      <InputLabel htmlFor='e-money-number' sx={{fontSize: '13px', fontFamily: 'monospace', fontWeight: '700'}}>E-Money Number</InputLabel>
          <TextField
            required
            color="secondary"
            size="small"
            id="e-money-number"
            placeholder="6122312138"
            sx={{width: '100%'}}
          />
          </Grid>
          <Grid item xs={6}>
          <InputLabel htmlFor='e-money-pin' sx={{fontSize: '13px', fontFamily: 'monospace', fontWeight: '700'}}>E-Money PIN</InputLabel>
          <TextField
            required
            color="secondary"
            size="small"
            id="e-money-pin"
            placeholder="6678"
            sx={{width: '100%'}}
          />
          </Grid></Grid> : <Box sx={{display: 'flex', justifyContent: 'space-evenly', gap: '1.5rem', ml: 2, mt: 4}}>
          <Box component="img"
        sx={{
          height: '4rem',
          width: '4rem',
          
        }}
        alt="card or cash"
        src={cashon}>

    </Box>
    <Typography sx={{fontSize: '15px', fontFamily: 'monospace', fontWeight: '500', opacity: '0.5'}}> The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</Typography>
          </Box> }
    
         </Grid>
    </Box>
    </Box>
    
    </Box>
    <Box sx={{backgroundColor: 'white', width: {xs: '70%', sm: '35rem', md: '45.3rem', lg: '21rem'},
     height: '100%', pl: 2, display: 'flex', flexDirection: 'column',
    
     alignItems: 'start'}}>
      <Typography sx={{fontSize: '18px', mt: 2, fontFamily: 'Manrope', fontWeight: '700'}}>SUMMARY</Typography>
      {cart.map(product => 
      <Box key={product.id}  sx={{mt: 2, display: 'flex', justifyContent: 'start',
       alignItems: 'center', gap: '0.5rem', width: '100%', mb: 3}}>
         
      <Box
        component="img"
        sx={{
          
          
          maxHeight: { xs: '4rem', md: '4.5rem' },
          width: { xs: '4rem', md: '5rem' },
        }}
        alt={product.nameOfProduct}
        src={product.url}
      />
      <Box sx={{display: 'flex', flexDirection: 'column', width: {xs: '70%', sm: '80%', lg: '12rem'}}}>
        <Typography sx={{fontSize: '15px', fontFamily: 'Manrope', fontWeight: '700'}}>{product.nameOfProduct}</Typography>
        <Typography sx={{ fontSize: '13px', fontFamily: 'Manrope', fontWeight: '700', opacity: '0.5'}}>${product.price}</Typography>
      </Box>
      <Typography sx={{mr: 1, fontSize: '15px', fontFamily: 'Manrope', fontWeight: '700', opacity: '0.5'}}>x{product.amount}</Typography>

      

      
    </Box>
      )}


    <Box sx={{width: '100%', pr: 2}}>
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography sx={{fontSize: '15px', fontFamily: 'Manrope', fontWeight: '500', opacity: '0.5'}}>TOTAL:</Typography>
        <Typography sx={{fontSize: '18px', fontFamily: 'Manrope', fontWeight: '700'}}>$ {totalAmount}</Typography>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography sx={{fontSize: '15px', fontFamily: 'Manrope', fontWeight: '500', opacity: '0.5'}}>SHIPPING:</Typography>
        <Typography sx={{fontSize: '18px', fontFamily: 'Manrope', fontWeight: '700'}}>$ 50</Typography>
      </Box>
      
      <Box sx={{display: 'flex', justifyContent: 'space-between', my: 2,}}>
        <Typography sx={{fontSize: '15px', fontFamily: 'Manrope', fontWeight: '500', opacity: '0.5'}}>TOTAL:</Typography>
        <Typography sx={{fontSize: '18px', fontFamily: 'Manrope', fontWeight: '700',  color: '#D87D4A'}}>$ {totalAmount + 50}</Typography>
      </Box>
      <Button onClick={handleOpen} variant="contained" size="large" sx={{
                  align: "center",
                  width: '100%',
                  backgroundColor: "#D87D4a",
                  '&:hover': {
                      backgroundColor: '#FBAF85',
                     
                  },
                  padding: '0.5rem 1.75rem 0.5rem 1.75rem',
                  my: '1.2rem',
                  
                  textDecoration: 'none'
                }}>CONTINUE & PAY</Button>
      
    </Box>
    </Box>
    
    </Box>
    </form>
    <Thankyoumodal handleClose={handleClose} open={open}  />
    </Box>

    </>
  )
}

export default Checkout