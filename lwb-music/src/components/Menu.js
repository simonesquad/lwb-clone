import React from 'react';
import {
    Menu,
    MenuButton,
} from "@chakra-ui/react"

// import Button from './Button';
// import styled from 'styled-components';

// const StyledBar = styled.div`
//     height: 25vh;
//     width: 100vw;
//     background-color: #313a61;
//     display: flex;
// `
// const StyledName = styled.div`
//     height: 10vh;
//     width: 40vw;
//     font-size: 1.5rem;
//     margin-left: 2%;

// `
// const StyledLinks = styled.div`
//     height: 10vh;
//     width: 60vw;
//     margin-top: 2%;
//     margin-left: 10%;
// `

function MMenu() {
    return (
        <Menu>
               <h1>Louis Wayne Ballard</h1> 
               <h5>Life || Music || Legacy</h5>
            
                <MenuButton as="a" href='/about'>About</MenuButton>
                <MenuButton as="a" href='/music'>Music</MenuButton>
                <MenuButton as="a" href='/gallery'>Gallery</MenuButton>
                <MenuButton as="a" href='/resources'>Resources</MenuButton>
                <MenuButton as="a" href='/contact'>Contact</MenuButton>
                {/* <Button imp='secondary' text={twoTxt} link={twoLink} />
                <Button imp='tertiary' text={threeTxt} link={threeLink} />
                <Button imp='quaternary' text={fourTxt} link={fourLink} />
                <Button imp='quinternary' text={fiveTxt} link={fiveLink} /> */}
        </Menu>
    )
}

export default MMenu
