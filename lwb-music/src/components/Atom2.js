import React from 'react';
import styled from 'styled-components';

const StyledAtom = styled.div`
    height: 100vh;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #313a61;
    display: flex;
    justify-content: left;
    scroll-snap-align: start;
`
const StyledContents = styled.div`
    display: flex;
`
const StyledText = styled.div`
    height: 60vh;
    width: 45vw;
    margin-left: 5%;
`
const StyledPic = styled.img`
    height: 70vh;
    width: 47vw;
    margin-left: 11.5%;
`

function Atom2({ title, subtitle, text, flic }) {
    return (
    <StyledAtom>
        <div>
            <StyledContents>
                <StyledText>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <h3>{text}</h3>
                </StyledText>
                <div>
                    <StyledPic src={flic} alt="primary"/>
                </div>
            </StyledContents>    
        </div>   
    </StyledAtom>
    )
}

export default Atom2