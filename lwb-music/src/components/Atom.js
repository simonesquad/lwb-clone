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
    margin-left: 10%;
`
const StyledPic = styled.img`
    height: 70vh;
    width: 47vw;
    margin-left: 4.5%;
`

function Atom({ title, subtitle, text, flic }) {
    return (
    <StyledAtom>
        <div>
            <StyledContents>
                <div>
                    <StyledPic src={flic} alt="primary"/>
                </div>
                <StyledText>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <h3>{text}</h3>
                </StyledText>

            </StyledContents>    
        </div>   
    </StyledAtom>
    )
}

export default Atom
