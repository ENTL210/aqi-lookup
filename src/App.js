import { React, useState, useEffect } from "react"
import { Main, ZipcodeEntryContainer } from "./Style"

// Import Components...
import ZipcodeEntryBox from "./components/ZipcodeEntrybox"
import SubmitBtn from "./components/SubmitBtn"


function App() {
    const [zipcode, setZipcode] = useState("")
    const [isSubmit, setIsSubmit] = useState(false)

    useEffect(() => {
        if (isSubmit) {
            console.log(zipcode)
            fetchData(zipcode)
        }
    }, [isSubmit])

    function fetchData(zipcodeValue) {
        fetch(`https://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=${zipcodeValue}&distance=25&API_KEY=FE0CA489-74F9-40ED-8B7B-B94418F5272A`)
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <Main>
            <ZipcodeEntryContainer
                animate={{
                    y: isSubmit ? 200 : 0
                }}
                transition={{
                    type: "spring",
                    stiffness: 100
                }}
            >
                <ZipcodeEntryBox
                    zipcode={zipcode}
                    setZipcode={(zipcode) => setZipcode(zipcode)}
                    isSubmit={isSubmit}
                    setIsSubmit={(value) => setIsSubmit(value)}
                />
                <SubmitBtn
                    title={"Enter"}
                    isSubmit={isSubmit}
                    handleClick={() => { setIsSubmit(true) }}
                />
            </ZipcodeEntryContainer>
        </Main>
    )
}

export default App;