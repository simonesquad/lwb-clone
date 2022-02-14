import React from 'react';
import {
    Menu,
    MenuButton,
} from "@chakra-ui/react"

import styled from 'styled-components';

const StyledBar = styled.div`
    background-color: #A0AEC0;
    display: flex;
`
const StyledSig = styled.div`
    width: 40vw;
    flex-direction: column;
    margin-left: 5%;
    margin-top: 0.5%;
`
const StyledName = styled.div`
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
            <StyledName>
               <h1>Louis Wayne Ballard</h1> 
            </StyledName>
            <StyledQuote>
                <h5>Life Music Legacy</h5>
            </StyledQuote>
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
