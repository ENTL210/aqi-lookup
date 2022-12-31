import { React, useState, useRef, useEffect } from "react";
import { ZipcodeEntryWrapper, ZipcodeEntry, ZipcodeEntryLabel } from "../Style"

export default function ZipcodeEntryBox(props) {
    const inputRef = useRef(null)
    const [isClicked, setIsClicked] = useState(false)

    // Props...
    const zipcode = props.zipcode

    useEffect(() => {
        if (isClicked) {
            handleFocus()
        }
    }, [isClicked]);

    function handleFocus() {
        inputRef.current.focus()
    }

    return (
        <ZipcodeEntryWrapper
            onClick={(e) => {
                setIsClicked(true);
                if (props.isSubmit) {
                    props.setIsSubmit(false)
                    props.setZipcode("")
                } 
            }}
            onMouseLeave={() => {
                if (zipcode === "") {
                    setIsClicked(false)
                } else {
                    setIsClicked(true)
                }
            }}
        >
            <ZipcodeEntryLabel
                animate={{
                    y: isClicked ? - 2 : 0,
                    fontSize: isClicked ? "12px" : "18px",
                }}
                transition={{
                    type:"spring",
                    stiffness: 100
                }}
            >
                Zipcode
            </ZipcodeEntryLabel>
            <ZipcodeEntry
                hidden={isClicked ? false : true}
                ref={inputRef}
                value={zipcode}
                onChange={(e) => {
                    const inputValue = e.target.value
                    if (/^[0-9]*$/.test(inputValue) === true) {
                        props.setZipcode(inputValue)
                    } else {
                        props.setZipcode("")
                    }
                }}
            />
        </ZipcodeEntryWrapper>
    )
}
