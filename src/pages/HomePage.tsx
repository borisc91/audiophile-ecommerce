import React from 'react'
import Callbutton from '../components/Callbutton'
import Header from '../components/Header'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import Shopmenu from '../components/Shopmenu';
import Productpages from '../components/Productpages';
import Footer from '../components/Footer';
import Info from '../components/Info';


function HomePage() {
    
    const theme = createTheme({
        palette: {
          background: {
            default: "#FAFAFA"
          }
        }});

  return (
    <>
   
    <Callbutton />
    <Shopmenu />
    <Productpages />
    
    
      </>
  )
}

export default HomePage