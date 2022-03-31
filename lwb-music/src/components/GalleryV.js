import React from 'react';
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

// only vertical pics here
import g1 from '../assets/gallery/g_1.png';
import g2 from '../assets/gallery/g_2.png';
import g4 from '../assets/gallery/g_4.png';
import g8 from '../assets/gallery/g_8.png';
import g9 from '../assets/gallery/g_9.png';
// h pics here
import g5 from '../assets/gallery/g_5.png';
import g11 from '../assets/gallery/g_11.png';
import g12 from '../assets/gallery/g_12.png';




function GalleryV() {
  const items = [
    {
      itemId: 'g9',
      mediaUrl: `${g9}`,
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'some-picture',
        description: 'all the knowledge',
        focalPoint: [0, 0],
      }
    },
    {
      itemId: 'g1',
      mediaUrl: `${g1}`,
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'some-picture',
        description: 'all the knowledge',
        focalPoint: [0, 0],
      }
    },
    {
      itemId: 'g2',
      mediaUrl: `${g2}`,
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'some-picture',
        description: 'all the knowledge',
        focalPoint: [0, 0],
      }
    },
    {
      itemId: 'g8',
      mediaUrl: `${g8}`,
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'some-picture',
        description: 'all the knowledge',
        focalPoint: [0, 0],
      }
    },
    {
      itemId: 'g4',
      mediaUrl: `${g4}`,
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'some-picture',
        description: 'all the knowledge',
        focalPoint: [0, 0],
      }
    },
    {
        itemId: 'g5',
        mediaUrl: `${g5}`,
        metaData: {
          type: 'image',
          height: 200,
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
          height: 200,
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
          height: 200,
          width: 100,
          title: 'some-picture',
          description: 'all the knowledge',
          focalPoint: [0, 0],
        }
      },
      
  ]
  const options = {
	galleryLayout: 4,
    slideshowLoop: true,
    isAutoSlideshow: true,
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

export default GalleryV;
