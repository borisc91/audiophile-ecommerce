import { makeStyles, createStyles } from '@mui/styles';
import backgroundMobile from '../src/assets/home/mobile/image-header.jpg';
import backgroundTablet from '../src/assets/home/tablet/image-header.jpg';
import backgroundDesktop from '../src/assets/home/desktop/image-hero.jpg';
import speakerz from './assets/home/desktop/image-speaker-zx7.jpg'
import earphoneD from './assets/home/desktop/image-earphones-yx1.jpg'
import earphoneT from './assets/home/tablet/image-earphones-yx1.jpg'
import earphoneM from './assets/home/mobile/image-earphones-yx1.jpg'
import speaker7t from './assets/shared/tablet/image-zx7-speaker.jpg'
import speaker7m from './assets/shared/mobile/image-zx7-speaker.jpg'
import speaker7d from './assets/shared/desktop/image-zx7-speaker.jpg'
import personD from './assets/shared/desktop/image-best-gear.jpg'
import personT from './assets/shared/tablet/image-best-gear.jpg'
import personM from './assets/shared/mobile/image-best-gear.jpg'
import blackHeadphonesD from './assets/shared/desktop/image-xx99-mark-two-headphones.jpg'
import blackHeadphonesT from './assets/shared/tablet/image-xx99-mark-two-headphones.jpg'
import blackHeadphonesM from './assets/shared/mobile/image-xx99-mark-two-headphones.jpg'
import oneHeadphonesD from './assets/shared/desktop/image-xx99-mark-one-headphones.jpg'
import oneHeadphonesT from './assets/shared/tablet/image-xx99-mark-one-headphones.jpg'
import oneHeadphonesM from './assets/shared/mobile/image-xx99-mark-one-headphones.jpg'
import whiteHeadphonesD from './assets/shared/desktop/image-xx59-headphones.jpg'
import whiteHeadphonesT from './assets/shared/tablet/image-xx59-headphones.jpg'
import whiteHeadphonesM from './assets/shared/mobile/image-xx59-headphones.jpg'
import earphonesD from './assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'
import earphonesT from './assets/product-yx1-earphones/tablet/image-category-page-preview.jpg'
import earphonesM from './assets/product-yx1-earphones/mobile/image-category-page-preview.jpg'
import speakerD from './assets/shared/desktop/image-zx9-speaker.jpg'
import speakerT from './assets/shared/tablet/image-zx9-speaker.jpg'
import speakerM from './assets/shared/mobile/image-zx9-speaker.jpg'
import blackspeakerD from './assets/shared/desktop/image-zx7-speaker.jpg'
import blackspeakerT from './assets/shared/tablet/image-zx7-speaker.jpg'
import blackspeakerM from './assets/shared/mobile/image-zx7-speaker.jpg'
import marktwogalleryoneD from './assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'
import marktwogalleryoneT from './assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg'
import marktwogalleryoneM from './assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg'
import marktwogallerytwoD from './assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'
import marktwogallerytwoT from './assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg'
import marktwogallerytwoM from './assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg'
import marktwogallerythreeD from './assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg'
import marktwogallerythreeT from './assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg'
import marktwogallerythreeM from './assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg'



const useStyles:any = makeStyles((theme?: any) => ({
  blackspeakers: {
    height: '25rem',
    width: '33.75rem',
    [theme.breakpoints.up('xs')]: {
      backgroundImage: `url(${blackspeakerM})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: "cover",
      
      
  
    },
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${blackspeakerT})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: "cover",
    },
    [theme.breakpoints.up('lg')]: {
      backgroundImage: `url(${blackspeakerD})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: "cover",
    }

  },
  speakers: {


    height: '25rem',
    width: '33.75rem',
    [theme.breakpoints.up('xs')]: {
      backgroundImage: `url(${speakerM})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: "cover",
      
      
  
    },
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${speakerT})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: "cover",
    },
    [theme.breakpoints.up('lg')]: {
      backgroundImage: `url(${speakerD})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: "cover",
    }

  },
  earphones: {
    height: '25rem',
    width: '33.75rem',
    [theme.breakpoints.up('xs')]: {
      backgroundImage: `url(${earphonesM})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: "cover",
      
      
  
    },
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${earphonesT})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: "cover",
    },
    [theme.breakpoints.up('lg')]: {
      backgroundImage: `url(${earphonesD})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: "cover",
    }
  },

  whiteHeadphones: {
   
    [theme.breakpoints.up('xs')]: {
      height: '16rem',
        width: '17.75rem',
      backgroundImage: `url(${whiteHeadphonesM})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: "cover",
      
      
  
    },
    [theme.breakpoints.up('md')]: {
      height: '25rem',
      width: '33.75rem',
      backgroundImage: `url(${whiteHeadphonesT})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: "cover",
    },
    [theme.breakpoints.up('lg')]: {
      height: '25rem',
      width: '33.75rem',
      backgroundImage: `url(${whiteHeadphonesD})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: "cover",
    }
  },
  oneHeadphones: {
    
      [theme.breakpoints.up('xs')]: {
        height: '16rem',
        width: '17.75rem',
        backgroundImage: `url(${oneHeadphonesM})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: "cover",
        
        
    
      },
      [theme.breakpoints.up('md')]: {
        height: '25rem',
      width: '33.75rem',
        backgroundImage: `url(${oneHeadphonesT})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: "cover",
      },
      [theme.breakpoints.up('lg')]: {
        height: '25rem',
      width: '33.75rem',
        backgroundImage: `url(${oneHeadphonesD})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: "cover",
      }
  },

    container : {

      height: '100vh',
      [theme.breakpoints.up('xs')]: {
        backgroundImage: `url(${backgroundMobile})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 70%',
        backgroundSize: "cover",
        
        
    
      },
      [theme.breakpoints.up('md')]: {
        backgroundImage: `url(${backgroundTablet})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 70%',
        backgroundSize: "cover",
      },
      [theme.breakpoints.up('lg')]: {
        backgroundImage: `url(${backgroundDesktop})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 70%',
        backgroundSize: "cover",
      },
     
      color: "white"
  
    },
    zx7speaker: {
      
      [theme.breakpoints.up('xs')]: {
        height: '16rem',
        width: '17.75rem',
        backgroundImage: `url(${speaker7m})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 70%',
        backgroundSize: "cover",
        
        
    
      },
      [theme.breakpoints.up('md')]: {
        height: '25rem',
      width: '33.75rem',
        backgroundImage: `url(${speaker7t})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 70%',
        backgroundSize: "cover",
      },
      [theme.breakpoints.up('lg')]: {
        height: '25rem',
      width: '33.75rem',
        backgroundImage: `url(${speaker7d})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 70%',
        backgroundSize: "cover",
      },
      color: "black"

    },
    zx9speaker: {
      
      [theme.breakpoints.up('xs')]: {
        height: '16rem',
        width: '17.75rem',
        backgroundImage: `url(${speakerM})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 70%',
        backgroundSize: "cover",
        
        
    
      },
      [theme.breakpoints.up('md')]: {
        height: '25rem',
      width: '33.75rem',
        backgroundImage: `url(${speakerT})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 70%',
        backgroundSize: "cover",
      },
      [theme.breakpoints.up('lg')]: {
        height: '25rem',
      width: '33.75rem',
        backgroundImage: `url(${speakerD})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 70%',
        backgroundSize: "cover",
      },
      color: "black"

    },
    zxspeaker: {
      height: '20rem',
      [theme.breakpoints.up('xs')]: {
        backgroundImage: `url(${speakerM})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 70%',
        backgroundSize: "cover",
        
        
    
      },
      [theme.breakpoints.up('md')]: {
        backgroundImage: `url(${speakerT})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 70%',
        backgroundSize: "cover",
      },
      [theme.breakpoints.up('lg')]: {
        backgroundImage: `url(${speakerz})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 70%',
        backgroundSize: "cover",
      },
      color: "black"

    },
    
    yearphones: {
      height: '20rem',
      [theme.breakpoints.up('xs')]: {
        backgroundImage: `url(${earphoneM})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 70%',
        backgroundSize: "cover",
        
        
    
      },
      [theme.breakpoints.up('md')]: {
        backgroundImage: `url(${earphoneT})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 70%',
        backgroundSize: "cover",
      },
      [theme.breakpoints.up('lg')]: {
        backgroundImage: `url(${earphoneD})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 70%',
        backgroundSize: "cover",
      }
     


    },

    blackHeadphones: {
      
      [theme.breakpoints.up('xs')]: {
        height: '16rem',
      width: '17.75rem',
        backgroundImage: `url(${blackHeadphonesM})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: "cover",
        
        
    
      },
      [theme.breakpoints.up('md')]: {
        height: '25rem',
      width: '33.75rem',
        backgroundImage: `url(${blackHeadphonesT})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: "cover",
      },
      [theme.breakpoints.up('lg')]: {
        height: '25rem',
      width: '33.75rem',
        backgroundImage: `url(${blackHeadphonesD})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: "cover",
      }
     
    },

    person: {
      
      [theme.breakpoints.up('xs')]: {
        backgroundImage: `url(${personM})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 70%',
        backgroundSize: "cover",
        
        
    
      },
      [theme.breakpoints.up('md')]: {
        backgroundImage: `url(${personT})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 70%',
        backgroundSize: "cover",
      },
      [theme.breakpoints.up('lg')]: {
        backgroundImage: `url(${personD})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 70%',
        backgroundSize: "cover",
      }

    }
    ,
    word: {
      color: '#D87D4A'
    },
    link: {

      textDecoration: 'none'
    },

    shopLink: {
      color: 'black',
                    opacity: '0.9',
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#FBAF85',
                      opacity: '1.5'
                     
                  }
    },

    marktwogalleryone: {
      
    [theme.breakpoints.up('xs')]: {
      height: '20rem',
    width: '15rem',
      backgroundImage: `url(${marktwogalleryoneM})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: "cover",
      
      
  
    },
    [theme.breakpoints.up('md')]: {
      height: '36rem',
    width: '38.75rem',
      backgroundImage: `url(${marktwogalleryoneT})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: "cover",
    },
    [theme.breakpoints.up('lg')]: {
      height: '36rem',
    width: '38.75rem',
      backgroundImage: `url(${marktwogalleryoneD})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: "cover",
    }

    },
    marktwogallerytwo: {
      
    [theme.breakpoints.up('xs')]: {
      height: '15rem',
      width: '15rem',
      backgroundImage: `url(${marktwogallerytwoM})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: "cover",
      
      
  
    },
    [theme.breakpoints.up('md')]: {
      height: '17rem',
    width: '27.75rem',
      backgroundImage: `url(${marktwogallerytwoT})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: "cover",
    },
    [theme.breakpoints.up('lg')]: {
      height: '17rem',
    width: '27.75rem',
      backgroundImage: `url(${marktwogallerytwoD})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: "cover",
    }

    },
    marktwogallerythree: {
     
    [theme.breakpoints.up('xs')]: {
      height: '15rem',
      width: '15rem',
      backgroundImage: `url(${marktwogallerythreeM})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: "cover",
      
      
  
    },
    [theme.breakpoints.up('md')]: {
      height: '17rem',
      width: '27.75rem',
      backgroundImage: `url(${marktwogallerythreeT})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: "cover",
    },
    [theme.breakpoints.up('lg')]: {
      height: '17rem',
      width: '27.75rem',
      backgroundImage: `url(${marktwogallerythreeD})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: "cover",
    }

    }

  
  }));


  export default useStyles;