import styled from "styled-components";
import {Slide, Slider, ButtonBack, ButtonNext } from "pure-react-carousel";
import { motion } from "framer-motion";

export const Main = styled.div`
  flex: 1;
  position: relative;
  z-index: 100;
  min-height: 100vh;
`;

export const CardButton = styled(motion.div)`
  width: 240px;
  height: 15px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #242a3a;
  transition: scale 500ms linear;
`;

export const CardButtonBlue = styled(motion.div)`
  display: flex;
  text-align: center;
  width: 240px;
  height: 15px;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  background-color: aqua;
  transition: all 500ms ease-in-out;
`;

export const CardImage = styled.img`
  height: 125px;
  background-color: gray;
  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  transition: all 500ms linear;
  overflow: hidden;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  width: 240px;
  background-color: white;
  box-shadow: -5px 4px 74px -16px rgba(0, 0, 0, 0.15);
  transition: transform 1s;
  overflow: hidden;
  &:hover {
    ${CardButton} {
      display: none;
    }
    ${CardButtonBlue} {
      display: block;
      transform: scaleY(1.5);
    }
    ${CardImage} {
      background-size: 110%;
    }
  }
`;

export const CardText = styled.div`
  padding-left: 25px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  position: absolute;
  width: 10vw;
  left: 0;
  height: 83vh;
`;

export const SliderContainer = styled.div`
  position: relative;
  left: 35vw;
  height: 70vh;
  width: 90vw;
  padding-top: 10vh;

  & ul.animating {
    transition: all 900ms ease-in-out;
  }
`;
export const BackButton = styled(ButtonBack)`
  background-color: transparent;
  padding: 10px;
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
  color: white;
  border: 2px solid gray;
  transition: 0.4s;
  &:hover {
    border: 3px solid white;
  }
`;
export const NextButton = styled(ButtonNext)`
  background-color: transparent;
  padding: 10px;
  margin: 15px;
  width: 50px;
  height: 50px;
  display: inline-block;
  color: white;
  border: 2px solid gray;
  transition: 0.4s;
  &:hover {
    border: 3px solid white;
  }
`;

export const StyledSlide = styled(Slide)`
  transition: all 500ms ease-in;
  &.hidden {
    transition-delay: ${({ index }) => (index % 3) * 150}ms;
    transform: translateX(-150px);
    opacity: 0;
  }
  &.visible {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const StyledSlider = styled(Slider)`
  overflow: unset;
`;
