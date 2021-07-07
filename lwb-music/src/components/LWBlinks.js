import React from 'react';
import styled from 'styled-components';
//for now the plan is to make these separate components and hardcode in the links

const StyledContainer = styled.div`
    height: 80vh;
    width: 100vw;
    background-color: #313a61;
    display: flex;
    flex-direction: column;
`
const StyledText = styled.div`
    height: 80vh;
    width: 75vw;
    margin-left: 5%;
`
const StyledLinks = styled.a`
    text-decoration: none;
    color: #f6eaf4;
    font-size: 1.5rem;
    padding: 3%;

    &:hover {
        color: #f13e2e
    }
`

function LWBlinks() {
    return (
        <StyledContainer>
            <StyledText>
                <h1>Biographical</h1>
                <StyledLinks rel="noreferrer" href="https://en.wikipedia.org/wiki/Louis_W._Ballard" target="_blank">Louis W. Ballard | [Wikipedia]</StyledLinks>
                <br></br>
                <StyledLinks rel="noreferrer" href="https://www.okhistory.org/publications/enc/entry.php?entry=BA009" target="_blank">Ballard, Wayne Louis | [Oklahoma Historical Society]</StyledLinks>
                <br></br>
                <StyledLinks rel="noreferrer" href="https://www.britannica.com/biography/Louis-Ballard" target="_blank">Louis Ballard | [Britannica]</StyledLinks>
                <h1>Featured</h1>
                <StyledLinks rel="noreferrer" href="https://kaleidoscopemusart.com/louis-wayne-ballard/#easy-footnote-bottom-1-3489" target="_blank">Louis Wayne Ballard [by Maria Sumareva and Andrew Rosenblum]</StyledLinks>
                <br></br>
                <StyledLinks rel="noreferrer" href="https://italianacademy.columbia.edu/event/american-voices-selected-piano-works-by-black-and-native-american-composers" target="_blank">American Voices: Selected Piano Works by Black and Native American Composers</StyledLinks>
                <h1>Dissertations</h1>
                <StyledLinks rel="noreferrer" href="https://ufdc.ufl.edu/UFE0046553/00001" target="_blank">Louis W. Ballard: Composer and Music Educator [by Karl Erik Ettinger]</StyledLinks>
            </StyledText>
        </StyledContainer>
    )
}

export default LWBlinks
