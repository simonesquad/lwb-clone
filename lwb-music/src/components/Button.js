import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    height: 5vh;
    width: 10vw;
    background-color: transparent;
    border: none;
`
const StyledLink = styled.a`
    text-decoration: none;
    color: #f6eaf4;
    font-size: 1.1rem;

    &:hover {
        color: #d97e43
    }
`

function Button({ imp, text, link }) {
    return (
        <StyledButton>
           <StyledLink href={link}>
               {text}
            </StyledLink> 
        </StyledButton>
    )
}

export default Button
