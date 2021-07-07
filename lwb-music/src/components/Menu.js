import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const StyledBar = styled.div`
    height: 25vh;
    width: 100vw;
    background-color: #313a61;
    display: flex;
`
const StyledName = styled.div`
    height: 10vh;
    width: 40vw;
    font-size: 1.5rem;
    margin-left: 2%;

`
const StyledLinks = styled.div`
    height: 10vh;
    width: 60vw;
    margin-top: 2%;
    margin-left: 10%;
`

function Menu({ oneTxt, oneLink, twoTxt, twoLink, threeTxt, threeLink, fourTxt, fourLink, fiveTxt, fiveLink }) {
    return (
        <StyledBar>
            <StyledName>
               <h1>Louis Wayne Ballard</h1> 
               <h5>Life || Music || Legacy</h5>
            </StyledName>
            <StyledLinks>
                <Button imp='primary' text={oneTxt} link={oneLink} />
                <Button imp='secondary' text={twoTxt} link={twoLink} />
                <Button imp='tertiary' text={threeTxt} link={threeLink} />
                <Button imp='quaternary' text={fourTxt} link={fourLink} />
                <Button imp='quinternary' text={fiveTxt} link={fiveLink} />
            </StyledLinks>
        </StyledBar>
    )
}

export default Menu
