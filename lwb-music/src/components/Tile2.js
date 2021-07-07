import React from 'react';
import styled from 'styled-components';

const StyledTile = styled.div`
    height: 40vh;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #487c7c;
    display: flex;
    scroll-snap-align: start;
    justify-content: right;
`
const StyledText = styled.div`
    height: 35vh;
    width: 55vw;
    margin-left: 10%;
    margin-top: 2%;
`
const StyledBox = styled.div`
    height: 35vh;
    width: 30vw;
    margin-left: 5%;
`
const StyledIcon = styled.img`
    height: 30vh;
    width: 17vw;
    margin-left: 15%;
    margin-top: 9%;
`

function Tile2({ title, link, text, icon, color }) {
    return (
        <StyledTile>
            <StyledText>
                <h1>{title}</h1>
                {/* <a href={link}></a> */}
                <h3>{text}</h3>
            </StyledText>
            <StyledBox>
                <StyledIcon src={icon} alt="icon" />
            </StyledBox> 
        </StyledTile>
    )
}

export default Tile2