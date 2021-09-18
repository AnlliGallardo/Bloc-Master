// import React from 'react'
import styled from 'styled-components';




const LoginStyled = styled.div`
    text-align: center;
    background-color: #0C0E16;
    heigth: 5000px;
`;

const input1H1 = styled.h1`
    text-align: center;
    color: white;
    padding-top: 230px;
`;

const Cuadro1 = styled.input`
    border: 1px solid #FED941;
    margin-top: 50px;
    border-radius: 4px;
    width: 250px;
    height: 35px;
    padding-left: 12px;
`;

const Cuadro2 = styled.input`
    border: 1px solid #FED941;
    margin-top: 20px;
    border-radius: 4px;
    width: 250px;
    height: 35px;
    padding-left: 12px;
`;

const BotonBtn = styled.button`
    background-color: #FED941;
    border: 1px solid #FED941;
    color: #0C0E16;
    border: 6px;
    width: 150px;
    height: 30px;
    margin-top: 20px;
    margin-left: 460px;
    border-radius: 6px;
    display: flex;
    text-align: center;
    padding-left: 52px;
    padding-top: -10px;
`;

const iniciarSesion = styled.p`
    text-align: center;
    font-weigh: 400;
    color: white;
`;

const divImg = styled.img`
    width: 20px;
    heigth: 20px;
    margin-left: -170px;
    padding-top: 15px;
`;

const BtnText = styled.p`
    margin-left: 10px;
    margin-top: -22px;
`;

const GoogleBtn = styled.div`
    width: 200px;
    margin-left: 580px;
    padding-left: 12px;
    margin-top: 10px;
`;




export const GoogBtn = GoogleBtn
export const LoginS = LoginStyled
export const Input1 = input1H1
export const Inpu1 = Cuadro1
export const Inpu2 = Cuadro2
export const Boton = BotonBtn
export const Text = BtnText
export const Img = divImg
export const Iniciar = iniciarSesion