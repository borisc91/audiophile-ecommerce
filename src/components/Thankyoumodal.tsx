
import React from 'react'
import {Box, Button, Typography, Modal, TextField, MenuItem} from '@mui/material'
import { Link } from 'react-router-dom';
import {useState} from 'react'
import delivered from '../assets/checkout/icon-order-confirmation.svg'
import useStyles from '../styles'
import { cartActions } from '../store'
import {  RootState } from '../store'
import { useDispatch, useSelector } from 'react-redux'



const Thankyoumodal:React.FC<{handleClose: () => void, open:boolean}> = (props) =>  {

    const classes = useStyles();



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




  return (
   <>
   <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box component="img"
        sx={{
          height: '4rem',
          width: '4rem',
          
        }}
        alt="Delivered chech out"
        src={delivered}>

    </Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          THANK YOU
FOR YOUR ORDER
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          You will receive an email confirmation shortly.
          </Typography>
          <Link to='/' className={classes.link} onClick={props.handleClose}>  <Button variant="contained" size="large" sx={{
                  align: "center",
                  width: '100%',
                  backgroundColor: "#D87D4a",
                  '&:hover': {
                      backgroundColor: '#FBAF85',
                     
                  },
                  padding: '0.5rem 1.75rem 0.5rem 1.75rem',
                  my: '1.2rem',
                  
                  textDecoration: 'none'
                }}>BACK TO HOME</Button> </Link>

        </Box>
      </Modal></>
  )
}

export default Thankyoumodal