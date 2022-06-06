import React from 'react';
import GridGallery from '../components/GridGallery';
import MobileGallery from '../components/MobileGallery'

import { useMediaQuery } from '@chakra-ui/react'

function Gallery() {
  const [isMobile] = useMediaQuery('(max-width: 828px)')


  return (
  <div>

  {isMobile ? <MobileGallery/> : <GridGallery/>}
    
  </div>
	);
}

export default Gallery;
