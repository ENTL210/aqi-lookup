import { React, useState, useEffect } from "react"
import { Main, ZipcodeEntryContainer, AqiTextContainer } from "./Style"

// Import Components...
import ZipcodeEntryBox from "./components/ZipcodeEntrybox"
import SubmitBtn from "./components/SubmitBtn"
import CircularView from "./components/CircularView"
import Text from "./components/Text"


function App() {
    const [zipcode, setZipcode] = useState("")
    const [isSubmit, setIsSubmit] = useState(false)
    const [percentage, setPecentage] = useState(0)
    const [aqiData, setAQIData] = useState({
        reportingArea: null,
        stateCode: null,
        aqi: null,
        category: null,
    })

    useEffect(() => {
        if (isSubmit) {
            fetchData(zipcode, updatingCircularView)
        } else {
            setAQIData(() => ({
                reportingArea: null,
                stateCode: null,
                aqi: null,
                category: null
            }))
        }
    }, [isSubmit])

    function fetchData(zipcodeValue, callback) {
        fetch(`https://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=${zipcodeValue}&distance=25&API_KEY=FE0CA489-74F9-40ED-8B7B-B94418F5272A`)
            .then(res => res.json())
            .then(data => {
                if (data.length !== 0) {
                    setAQIData(() => ({
                        reportingArea: data[0].ReportingArea,
                        stateCode: data[0].StateCode,
                        aqi: data[0].AQI,
                        category: data[0].Category.Name
                    }))
                    callback(100)
                } else {
                    setAQIData(() => ({
                        reportingArea: null,
                        stateCode: null,
                        aqi: null,
                        category: null
                    }))
                    callback(100)
                }
            })
    }

    function updatingCircularView(value) {
        setPecentage(value)
    }

    function setColor() {
        var color;
        if (aqiData.category === "Good") {
            color = "#00e400"
        } else if (aqiData.category === "Moderate") { 
            color= "#ffff00"
        } else if (aqiData.category === "Unhealthy for Sensitive Groups") {
            color = "#ff7e00"
        } else if (aqiData.category === "Unhealthy") {
            color ="#ff0000"
        } else if (aqiData.category === "Very Unhealthy") {
            color ="8f3f97"
        } else if (aqiData.category === "Hazardous") {
            color ="#7e0023"
        } 
        return color
    }



    return (
        <Main>
            {(isSubmit && aqiData.aqi != null && aqiData.reportingArea != null & aqiData.stateCode != null) &&
                <CircularView
                    size={300}
                    strokeWidth={25}
                    percentage={percentage}
                    color={setColor()}
                    isSubmit={isSubmit}
                    data={aqiData}
                />
            }
            <ZipcodeEntryContainer
                animate={{
                    y: (isSubmit && aqiData.aqi != null && aqiData.reportingArea != null & aqiData.stateCode != null) ? 200 : 0
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
                    handleClick={() => {
                        if (zipcode) {
                            setIsSubmit(true)
                        }
                    }}
                />
            </ZipcodeEntryContainer>

            {(isSubmit && aqiData.aqi != null && aqiData.reportingArea != null & aqiData.stateCode != null) &&
                <AqiTextContainer>
                    <Text text={aqiData.aqi} fontSize={"40px"} />
                    <Text text={aqiData.category} fontSize={"30px"} />
                </AqiTextContainer>
            }
        </Main>
    )
}

export default App;