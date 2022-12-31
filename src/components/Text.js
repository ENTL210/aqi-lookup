import React from "react";
import {TextStyle } from "../Style";

export default function Text({text, fontSize}) {
    return (
        <TextStyle fontSize={fontSize}>
            {text}
        </TextStyle>
    )
}