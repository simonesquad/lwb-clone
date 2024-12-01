import React from 'react';
import ResourcesLarge from '../components/ResourcesLarge';
import ResourcesSmall from '../components/ResourcesSmall';

import { useMediaQuery } from '@chakra-ui/react';

function Gallery() {
  const [isMobile] = useMediaQuery('(max-width: 828px)')


  return (
  <div>

  {isMobile ? <ResourcesSmall/> : <ResourcesLarge/>}
    
  </div>
	);
}

export default Gallery;
