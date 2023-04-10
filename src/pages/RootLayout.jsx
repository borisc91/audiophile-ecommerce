import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Productpages from '../components/Productpages'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import Info from '../components/Info'

function RootLayout() {

    const theme = createTheme({
        palette: {
          background: {
            default: "#FAFAFA"
          },
          secondary: {
            main: '#D87D4A'
          }
        }});

  return (
    <ThemeProvider theme={theme}>
   
    <Header/>
    <Outlet />
    <Info />
    <Footer />
    </ThemeProvider>
  )
}

export default RootLayout