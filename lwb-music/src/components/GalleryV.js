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
        title: 'Headshot',
        description: 'The composer Louis W. Ballard in a promotional shot that he often used. Probably taken in Oklahoma, USA.',
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
        title: 'Koshare',
        description: 'The choreographer Donald Saddler with ballerina Marjorie Tallchief, dancers, and Louis W. Ballard seated in the background for rehearsal of the ballet Koshare.',
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
        title: 'Flute',
        description: 'Ballard holding a Sioux flute from his personal collection.',
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
        title: 'Koshare-2',
        description: 'Again pictured Donald Sadler and Louis W. Ballard along with George Skibine director of the Harkness Ballet in rehearsal for the 1965 performance of Koshare.',
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
          title: 'Will Rogers',
          description: 'The world premiere of the Portrait of Will Rogers in 1972. Pictured are Dr. Wesley Forbis and Will Rogers Jr. in the center alongside Ballard.',
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
          title: 'Sammy Davis Jr.',
          description: 'Sammy Davis Jr. and Louis W. Ballard attending the Tulsa Philharmonic Silver Anniversary in 1973. Sammy Davis Jr. performed and two Ballard pieces were performed.',
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
          title: 'Will Rogers-2',
          description: 'The world premiere of a Portrait of Will Rogers.',
          focalPoint: [0, 0],
        }
      },
      
  ]
  const options = {
	galleryLayout: 4,
    slideshowLoop: true,
    isAutoSlideshow: true,
    hoveringBehaviour: 'APPEARS',
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
      customHoverRenderer={itemProps => <div style={{ width: '50vw', color: 'white', fontSize: '1.5rem', marginLeft: '3%' }}>{itemProps.description}</div>}
			items={items}
			options={options}
			container={container}
			eventsListener={eventsListener}
			scrollingElement={scrollingElement}
      
		/>
	);
}

export default GalleryV;
