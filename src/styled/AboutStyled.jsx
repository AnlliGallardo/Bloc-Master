import React from "react";
import styled from "styled-components";




const AboutStyled = styled.div`
    background-color: #0C0E16;
    height: 1500px;
`;

const Moviediv = styled.div`
    padding: 2em;
    width: 50px;
    height: 50px;
    text-align: center;
    margin-left: 150px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 300px;
    grid-column-gap: 50px;
    color: white;
`;

const StyledH1 = styled.h1`
    padding: 50px;
    color: white;
`;



export const AboutS = AboutStyled
export const Movie = Moviediv
export const H1 = StyledH1