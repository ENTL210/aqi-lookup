import React from "react"
import {SubmitButton} from "../Style"

export default function SubmitBtn(props) {
    return (
        <SubmitButton onClick={props.handleClick}>
            {props.title}
        </SubmitButton>
    )
}