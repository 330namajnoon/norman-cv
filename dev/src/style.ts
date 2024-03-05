import styled from "styled-components";
import { colors } from "./config";

export const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: ${colors[0]};
    display: flex;
    flex-direction: column;
    align-items: center;
    background-position: center;
    background-repeat: no-repeat;
    overflow-y: auto;
    @media screen and (max-width: 600px) {
        
    }
`
export const Details = styled.div`
    background-color: transparent;
    width: 100%;
    @media screen and (max-width: 600px) {
        
    }
`
export const TransparentBox = styled.div`
    background-color: transparent;
    width: 100%;
    @media screen and (max-width: 600px) {
        height: 70vh;
    }
`

export const HLine = styled.div`
    background-color: ${colors[0]};
    @media screen and (max-width: 600px) {
        width: 1px;
        height: 70px;
        margin: 30px;
        
    }
`

export const InfoBox = styled.div`
    background-color: ${colors[1]};
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 600px) {
        padding-top: 30px;
        width: 100%;
        border-radius: 25vw 25vw 0px 0px;

    }
`

export const FullName = styled.h1`
    font-size: 25px;
    color: ${colors[0]};
    font-weight: 500;
    font-style: italic;
    @media screen and (max-width: 600px) {
       font-size: 10vw;
    }
`


export const Title = styled.h1`
    font-size: 10px;
    color: ${colors[0]};
    font-weight: 500;
    font-style: italic;
    @media screen and (max-width: 600px) {
       font-size: 5vw;
       margin: 10px;
    }
`

export const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    max-width: 100px;
    max-height: 100px;
    border-radius: 100px;
    object-fit: cover;
    margin: 10px;
    @media screen and (max-width: 600px) {
       width: 50vw;
       height: 50vw;
       max-width: 50vw;
       max-height: 50vw;

    }
`

export const AboutMi = styled.h2`
    font-size: 15px;
    color: ${colors[0]};
    width: 600px;
    margin: 20px;
    @media screen and (max-width: 600px) {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 7vw;
        font-weight: 600;
        h2 {
            margin-top: 10px;
            font-size: 5vw;
        }

    }
`


export const Icons = styled.div`
    width: 600px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: ${colors[0]};
    @media screen and (max-width: 600px) {
        width: 90%;
        border-radius: 10vw;
        margin: 10px;
    }
`

export const Icon = styled.img`
    max-width: 30px;
    max-height: 30px;
    min-width: 30px;
    min-height: 30px;
    border-radius: 100vw;
    object-fit: cover;
    margin: 10px;
    @media screen and (max-width: 600px) {
        max-width: 12vw;
        max-height: 12vw;
        min-width: 12vw;
        min-height: 12vw;

    }
`

export const CVLink = styled.a`
    color: ${colors[0]};
    background-color: ${colors[2]};
    border-radius: 5vw;
    padding: 10px 20px;
    margin: 10px;
    @media screen and (max-width: 600px) {
       
    }
`

export const ContactButton = styled.button`
    color: ${colors[0]};
    background-color: ${colors[2]};
    border-radius: 5vw;
    padding: 10px 20px;
    margin: 10px;
    @media screen and (max-width: 600px) {
       
    }
`

export const ContactContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${colors[1]};
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    #exit {
        position: absolute;
        top: 10px;
        left: 10px;
        color: ${colors[0]};
        font-size: 30px;
    }
    @media screen and (max-width: 600px) {
       
    }
`

