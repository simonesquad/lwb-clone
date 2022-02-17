import React from 'react';
// import Menu from '../components/MainMenu';
// import GPanel from '../components/GPanel';
// import GPanel3 from '../components/GPanel3';
//pics panel one
import g1 from '../assets/gallery/g_1.png';
import g2 from '../assets/gallery/g_2.png';
import g7 from '../assets/gallery/g_7.png';
import g4 from '../assets/gallery/g_4.png';
//pics panel two
import g5 from '../assets/gallery/g_5.png';
import g11 from '../assets/gallery/g_11.png';
import g12 from '../assets/gallery/g_12.png';

//pure carousel
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, ImageWithZoom } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

// experimental sliders
// import { 
//     useDisclosure,
//     Button, 
//     SimpleGrid,
//     Box,
//     Image,
// } from "@chakra-ui/react";
// import { motion } from "framer-motion";
// import { useState } from "react";

function Gallery() {
    return (
        <>
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>I am the first Slide.
          <ImageWithZoom
           className='d-block w-100'
           src={g1}></ImageWithZoom>
          </Slide>
          <Slide index={1}>I am the second Slide.
          <ImageWithZoom
           className='d-block w-100'
           src={g2}></ImageWithZoom>
          </Slide>
          <Slide index={2}>I am the third Slide.
          <ImageWithZoom
           className='d-block w-100' 
           src={g7}></ImageWithZoom>
          </Slide>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
          </CarouselProvider>
        </>
      
        /* <Button {...getButtonProps()}>Next</Button>
        <SimpleGrid columns={[2, null, 2]} spacing='45px' style={{ margin: '35px'}}>
            
                <Box bg='papayawhip' height='75vh' width='50vw'>
                    <Image src={g1} alt="dance-rehearsal"/>
                </Box>
                <Box bg='papayawhip' height='280px'></Box>
                <Box bg='papayawhip' height='280px'></Box>
                <Box bg='papayawhip' height='280px'></Box>

            <motion.div
                {...getDisclosureProps()}
                hidden={hidden}
                initial={false}
                onAnimationStart={() => setHidden(false)}
                onAnimationComplete={() => setHidden(!isOpen)}
                animate={{ width: isOpen ? 800 : 0 }}
                style={{
                background: "#319795",
                overflow: "hidden",
                whiteSpace: "nowrap",
                position: "absolute",
                right: "0",
                height: "83vh",
                top: "17vh"
                }}
            >
                welcome home
            </motion.div>
            </SimpleGrid> */
        //     </>
        // );
        // }

//         <div>
//         <div>
//             <GPanel 
//                 g1={g7}
//                 g2={g1}
//                 g3={g2}
//                 g4={g4}
//                 caption='Amet cursus sit amet dictum. Sed vulputate odio ut enim blandit. Tempor nec feugiat nisl pretium. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Augue mauris augue neque gravida in. Lacinia at quis risus sed vulputate. At quis risus sed vulputate odio ut enim blandit volutpat. Velit laoreet id donec ultrices tincidunt arcu non sodales. Amet purus gravida quis blandit. Eget mi proin sed libero enim. Commodo odio aenean sed adipiscing diam donec adipiscing.'
//             />
//             <GPanel3 
//                 g1={g5}
//                 g2={g11}
//                 g3={g12}
//                 caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum. Tristique senectus et netus et. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Pharetra massa massa ultricies mi quis hendrerit dolor. Et sollicitudin ac orci phasellus. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Aliquam etiam erat velit scelerisque in dictum. Fermentum posuere urna nec tincidunt. In eu mi bibendum neque egestas congue quisque egestas. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Lorem donec massa sapien faucibus et molestie ac. Tempus imperdiet nulla malesuada pellentesque elit eget gravida.'
//             />
//         </div>
//         </div>
//     )
// }
    )
}
export default Gallery
