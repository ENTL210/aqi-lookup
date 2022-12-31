import {React, useState, useEffect} from "react";
import { motion } from "framer-motion"

export default function AQI({ size, strokeWidth, isSubmit, percentage, color, data}) {
    const [progress, setProgress] = useState(0);
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        setIsReady(true)
        setProgress(percentage)
    }, [percentage])

    // Svg viewbox
    const viewBox = `0 0 ${size} ${size}`
    // Radius base on the given size - strokewidth and divide by 2
    const radius = (size - strokeWidth) / 2
    // Circumference of the progress circle...
    const circumference = radius * Math.PI * 2
    const dash = (progress * circumference) / 100;
    
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox={viewBox}
            animate={{
                opacity: isReady ? 1 : 0,
            }}
            transition={{
                type:"spring",
                stiffness:"50"
            }}
        >   
            <circle
                fill="none"
                stroke="rgb(228,227,222,0.6)"
                // x-coordinate of the circle
                cx={size / 2}
                // y-coordinate of the circle
                cy={size / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}
            />
            <circle 
                fill="none"
                stroke={color}
                cx={size/2}
                cy={size / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
                strokeDasharray={[dash, circumference - dash ]}
                strokeLinecap="round"
                style={{transition: "all 1s"}}
            />
        </motion.svg>
    )
}