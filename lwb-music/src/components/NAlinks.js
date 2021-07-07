import React from 'react';
import styled from 'styled-components';
//for now the plan is to make these separate components and hardcode in the links

const StyledContainer = styled.div`
    height: 80vh;
    width: 100vw;
    background-color: #487c7c;
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

function NAlinks() {
    return (
        <StyledContainer>
            <StyledText>
                <h1>Historical</h1>
                <StyledLinks rel="noreferrer" href="https://www.okhistory.org/index.php" target="_blank">Oklahoma Historical Society</StyledLinks>
                <br></br>
                <StyledLinks rel="noreferrer" href="https://indiancountrytoday.com/archive/12-images-seneca-indian-boarding-school" target="_blank">12 Images From Seneca Indian Boarding School [Indian Country Today]</StyledLinks>
                <h1>Tribal</h1>
                <StyledLinks rel="noreferrer" href="https://www.quapawtribe.com/" target="_blank">Quapaw Nation</StyledLinks>
                <br></br>
                <StyledLinks rel="noreferrer" href="https://www.cherokee.org/" target="_blank">Cherokee Nation</StyledLinks>
                <br></br>
                <StyledLinks rel="noreferrer" href="https://www.osagenation-nsn.gov/" target="_blank">Osage Nation</StyledLinks>
                <h1>Cultural</h1>
                <StyledLinks rel="noreferrer" href="https://americanindian.si.edu/" target="_blank">National Museum of the American Indian [Smithsonian]</StyledLinks>
                <br></br>
                <StyledLinks rel="noreferrer" href="https://famok.org/" target="_blank">First Americans Museum [Oklahoma]</StyledLinks>
                <br></br>
                <StyledLinks rel="noreferrer" href="https://composersforum.org/resources/organizations-supporting-composers-new-music/" target="_blank">American Composers Forum [Supporting Organizations]</StyledLinks>
            </StyledText>
        </StyledContainer>
    )
}

export default NAlinks