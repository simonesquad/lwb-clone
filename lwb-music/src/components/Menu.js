import React from 'react';
import {
    Menu,
    MenuButton,
} from "@chakra-ui/react"

import styled from 'styled-components';
import Zia from '../assets/th-1.webp'

const StyledBar = styled.div`
    background-color: #A0AEC0;
    display: flex;
    height: 17vh;
`
const StyledSig = styled.div`
    display: flex;
    width: 40vw;
    margin-left: 0%;
    margin-top: 0.5%;
`
const StyledText = styled.div`
    display: flex;
    flex-direction: column;
`
// const StyledLogo = styled.div`
//     width: 7vw;
//     height: 7vh;
// `
const StyledName = styled.div`
    width: 25vw;
    font-size: 1.5rem;
    margin-left: 5%;
    margin-top: 1%;

`
const StyledQuote = styled.div`
    font-size: 1.1rem;
    margin-left: 30%;
    margin-top: 2%;
`
const StyledLinks = styled.div`
    height: 12vh;
    width: 60vw;
    margin-top: 1%;
    margin-left: 3%;
`
const StyledButton = styled.button`
    height: 5vh;
    width: 10vw;
    background-color: transparent;
    border: none;
`

function MMenu() {
    return (
        <StyledBar>
        <Menu>
            <StyledSig>
            <StyledText>
            <StyledName>
               <h1>Louis Wayne Ballard</h1> 
            </StyledName>
            <StyledQuote>
                <h5>Life Music Legacy</h5>
            </StyledQuote>
            </StyledText>
            </StyledSig>
            <StyledLinks>
                <StyledButton>
                <MenuButton as="a" href='/about'>About</MenuButton>
                </StyledButton>
                <StyledButton>
                <MenuButton as="a" href='/music'>Music</MenuButton>
                </StyledButton>
                <StyledButton>
                <MenuButton as="a" href='/gallery'>Gallery</MenuButton>
                </StyledButton>
                <StyledButton>
                <MenuButton as="a" href='/resources'>Resources</MenuButton>
                </StyledButton>
                <StyledButton>
                <MenuButton as="a" href='/contact'>Contact</MenuButton>
                </StyledButton>
            </StyledLinks>
        </Menu>
        </StyledBar>
    )
}

export default MMenu
