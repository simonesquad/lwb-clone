import React from 'react';
// import '../styles/Gallery.css'
//pics panel one
import g1 from '../assets/gallery/g_1.png';
import g2 from '../assets/gallery/g_2.png';
import g7 from '../assets/gallery/g_7.png';
import g4 from '../assets/gallery/g_4.png';
//pics panel two
import g5 from '../assets/gallery/g_5.png';
import g11 from '../assets/gallery/g_11.png';
import g12 from '../assets/gallery/g_12.png';

//other style sheet with styled components built in
import {
    Card,
    ButtonContainer,
    SliderContainer,
    StyledSlide,
    StyledSlider,
    BackButton,
    NextButton,
    CardText,
  } from "./gstyles";

//pure carousel
import { CarouselProvider, ImageWithZoom } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



function Gallery() {
    return (
        <CarouselProvider
            naturalSlideWidth={90}
            naturalSlideHeight={105}
            totalSlides={5}
            visibleSlides={2}
            step={2}
        >
        <ButtonContainer>
        <BackButton>
            <ArrowBackIosIcon fontSize="large" /> 
        </BackButton>
        <NextButton>
            <ArrowForwardIosIcon fontSize="large" />
        </NextButton>
        </ButtonContainer>
        <SliderContainer>
        <StyledSlider classNameAnimation="animating">
          <StyledSlide 
            index={0}
            classNameHidden="hidden"
            classNameVisible="visible"
          >
            <Card>
            <ImageWithZoom
            className='d-block w-100'
            src={g1}></ImageWithZoom>
                <CardText>
                    <h1>TEST</h1>
                    <h4>caption something here</h4>
                </CardText>
            </Card>
          </StyledSlide>
          <StyledSlide 
            index={1}
            classNameHidden="hidden"
            classNameVisible="visible"
        >
          <Card>
          <ImageWithZoom
           className='d-block w-100'
           src={g2}></ImageWithZoom>
                <CardText>
                    <h1>TEST</h1>
                    <h4>caption something here</h4>
                </CardText>
          </Card>
          </StyledSlide>
          <StyledSlide 
            index={2}
            classNameHidden="hidden"
            classNameVisible="visible"
          >
          <Card>
          <ImageWithZoom
           className='d-block w-100' 
           src={g7}></ImageWithZoom>
                <CardText>
                    <h1>TEST</h1>
                    <h4>caption something here</h4>
                </CardText>
          </Card>
          </StyledSlide>
          <StyledSlide 
            index={3}
            classNameHidden="hidden"
            classNameVisible="visible"
            >I am the third Slide.
          <ImageWithZoom
           className='d-block w-100' 
           src={g4}></ImageWithZoom>
          </StyledSlide>
          <StyledSlide 
            index={4}
            classNameHidden="hidden"
            classNameVisible="visible"
            >I am the third Slide.
          <ImageWithZoom
           className='d-block w-100' 
           src={g5}></ImageWithZoom>
          </StyledSlide>
          </StyledSlider>
          </SliderContainer>
          </CarouselProvider>
      
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
    );
};

export default Gallery;
