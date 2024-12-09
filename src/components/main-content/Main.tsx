"use client"
import TypeIt from "typeit-react"

export const Main = () => {
    return (
        <div>
            <span className="text-white text-6xl">
                <TypeIt 
                options={{
                    loop: true,
                    strings: ["Hi,", "  ", "I am Pui Shan."],
                    waitUntilVisible: true,
                }}>
                </TypeIt>
            </span>
        </div>
    )
}