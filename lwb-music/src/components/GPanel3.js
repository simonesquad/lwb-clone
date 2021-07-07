import React from 'react';
import styled from 'styled-components';

const StyledPanel = styled.div`
    height: 80vh;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #313a61;
    scroll-snap-align: start;
`
const StyledContents = styled.div`
    display: flex;
`
const StyledPic = styled.img`
    height: 50vh;
    width: 31vw;
    padding: 1.25%;
`
const StyledCaption = styled.h4`
    margin-left: 1.5%;
    width: 90vw;
`

function GPanel3({ g1, g2, g3, caption }) {
    return (
        <StyledPanel>
            <StyledContents>
                <StyledPic src={g1} alt="tertiary"/>
                <StyledPic src={g2} alt="tertiary"/>
                <StyledPic src={g3} alt="tertiary"/>
            </StyledContents>
            <StyledCaption>{caption}</StyledCaption>
        </StyledPanel>
    )
}

export default GPanel3