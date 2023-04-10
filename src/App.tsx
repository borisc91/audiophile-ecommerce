

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Headphones from './pages/Headphones';
import Earphones from './pages/Earphones';
import Speakers from './pages/Speakers';
import RootLayout from './pages/RootLayout';
import Error from './pages/Error';
import Xx99mark1 from './pages/products/headphones/Xx99mark1';
import Xx99mark2 from './pages/products/headphones/Xx99mark2';
import Xx59 from './pages/products/headphones/Xx59';
import Yx1earphone from './pages/products/earphones/Yx1earphone';
import Zx9 from './pages/products/speakers/Zx9';
import Zx7 from './pages/products/speakers/Zx7';
import Checkout from './pages/Checkout';


const router = createBrowserRouter([
  {path: '/',
  errorElement: <Error />,
   element: <RootLayout />,
  children : [
    {path: '/', element: <HomePage/>},
  {path: '/category/headphones', element: <Headphones />},
  {path: '/category/speakers', element: <Speakers />},
  {path: '/category/earphones', element: <Earphones />},
  {path: '/products/xx99mark1-headphone', element: <Xx99mark1 />},
  {path: '/products/xx99mark2-headphone', element: <Xx99mark2 />},
  {path: '/products/earphoneyx1', element: <Yx1earphone />},
  {path: '/products/speakerzx7', element: <Zx7 />},
  {path: '/products/speakerzx9', element: <Zx9 />},
  {path: '/products/xx59-headphone', element: <Xx59 />},
  {path: '/checkout', element: <Checkout />}

  ] },
  
]);


function App() {
 
  

  return (
    <>
    <RouterProvider router={router} />
    
      </>
  )
}

export default App
