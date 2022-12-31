import styled from "styled-components";
import { motion } from "framer-motion";

const Main = styled.div`
    width: 100%;
    height: 100vh;
    background: #EAF4F4;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center
`

const ZipcodeEntryContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: max-content;
    row-gap: 0px;
    column-gap: 20px;
`

const ZipcodeEntryLabel = styled(motion.h1)`
    grid-row: 1 / span 1;
    font-family: inter;
    font-weight: 400;
    color: gray;
    font-size: 1rem;
    grid-column: 2 / span 1;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

const ZipcodeEntryWrapper = styled(motion.div)`
    width: 200px;
    height: 50px;
    background-color: rgb(228,227,222,0.2);
    grid-column: 1 / span 1;
    border-bottom: solid #CCE3DE;
    border-radius: 5px 5px 0 0;
    &:hover {
        background-color: rgb(228,227,222,0.7);
    }
    display: grid;
    grid-template-columns: 20px 30px 5px;
    grid-template-rows: max-content;
    cursor: text;
`

const ZipcodeEntry = styled(motion.input)`
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
     box-sizing: border-box; 
    border-top: none;
    border-bottom: none;
    border-left: none;
    border-right: none;
    background-color: rgb(228,227,222,0.2);
    border-radius: 5px 5px 0 0;
    width: 200px;
    height: 50px;
    grid-columns: 2 / span 1;
    &:focus {
        outline: none
    }
    padding: 20px;
    padding-top: 35px;
    font-family: inter
    font-weight: 400;
    font-size: 18px
`
const SubmitButton = styled.button`
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    background: rgb(228,227,222,0.5);
    border-radius: 5px;
    width: 100px;
    height: 50px;
    grid-column: 2 / span 1;
    &: hover {
        background-color: rgb(228,227,222,1);
    }
`

const AqiTextContainer = styled(motion.div)`
    position: relative;
    top: -250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TextStyle = styled.h1`
    font-famioly: inter;
    font-weight: 400;
    font-size: ${props => props.fontSize};
    margin: 5px;
    padding: 0px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
`

export { Main, ZipcodeEntry, ZipcodeEntryContainer, ZipcodeEntryLabel, ZipcodeEntryWrapper, SubmitButton, AqiTextContainer, TextStyle}