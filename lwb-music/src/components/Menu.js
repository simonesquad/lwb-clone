import React from 'react';
import {
    Menu,
    MenuButton,
    Heading,
    Image,
} from "@chakra-ui/react"
import Icon from '../assets/example.png'

import styled from 'styled-components';

const StyledBar = styled.div`
    background-color: none;
    display: flex;
    height: 17vh;
`
const StyledSig = styled.div`
    display: flex;
    width: 40vw;
    margin-left: 0%;
`
const StyledText = styled.div`
    display: flex;
    flex-direction: column;
`
const StyledLogo = styled.div`
    width: 5vw;
    height: 5vh;
`
const StyledName = styled.div`
    width: 25vw;
    font-size: 1.5rem;
    margin-left: 5%;
    margin-top: 1%;

`
const StyledQuote = styled.div`
    font-size: 1.1rem;
    margin-left: 50%;
    margin-top: 2%;
`
const StyledLinks = styled.div`
    height: 12vh;
    width: 60vw;
    margin-top: 1%;
    margin-left: 10%;
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
            <StyledLogo>
                <a href='/'>
                    <Image src={Icon} alt='logo' />
                </a>
            </StyledLogo>
            <StyledText>
            <StyledName>
               <Heading>Louis Wayne Ballard</Heading> 
            </StyledName>
            <StyledQuote>
                <Heading as='h3' size='md'>Life Music Legacy</Heading>
            </StyledQuote>
            </StyledText>
            </StyledSig>
            <StyledLinks>
                <StyledButton>
                <MenuButton as="a" href='/bio'>Bio</MenuButton>
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
