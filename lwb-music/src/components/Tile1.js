import React from 'react';
import styled from 'styled-components';
//probably this will include audio sample too at some point

const StyledTile = styled.div`
    height: 40vh;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #d97e43;
    display: flex;
    scroll-snap-align: start;
    justify-content: left;
`
const StyledText = styled.div`
    height: 35vh;
    width: 55vw;
    margin-left: 0%;
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

function Tile1({ title, link, text, icon, color }) {
    return (
        <StyledTile>
           <StyledBox>
                <StyledIcon src={icon} alt="icon" />
            </StyledBox> 
            <StyledText>
                <h1>{title}</h1>
                {/* <a href={link}></a> */}
                <h3>{text}</h3>
            </StyledText>
        </StyledTile>
    )
}

export default Tile1
