import React from 'react';
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

// only horizontal pics here
import g5 from '../assets/gallery/g_5.png';
import g11 from '../assets/gallery/g_11.png';
import g12 from '../assets/gallery/g_12.png';




function GalleryH() {
  const items = [
    {
      itemId: 'g5',
      mediaUrl: `${g5}`,
      metaData: {
        type: 'image',
        height: 100,
        width: 100,
        title: 'some-picture',
        description: 'all the knowledge',
        focalPoint: [0, 0],
      }
    },
    {
      itemId: 'g12',
      mediaUrl: `${g12}`,
      metaData: {
        type: 'image',
        height: 100,
        width: 100,
        title: 'some-picture',
        description: 'all the knowledge',
        focalPoint: [0, 0],
      }
    },
    {
      itemId: 'g11',
      mediaUrl: `${g11}`,
      metaData: {
        type: 'image',
        height: 100,
        width: 100,
        title: 'some-picture',
        description: 'all the knowledge',
        focalPoint: [0, 0],
      }
    },
  ]
  const options = {
	galleryLayout: 0,
    hoveringBehaviour: 'NEVER_SHOW',
    itemBorderWidth: 15,
    itemBorderRadius: 2,
    itemBorderColor: '#FFFFFF'
	};

  const container = {
      width: window.innerWidth,
      height: window.innerHeight
	};

  const eventsListener = (eventName, eventData) => console.log({eventName, eventData}); 

  const scrollingElement = window;

  return (
  
		<ProGallery
			items={items}
			options={options}
			container={container}
			eventsListener={eventsListener}
			scrollingElement={scrollingElement}
		/>
	);
}

export default GalleryH;