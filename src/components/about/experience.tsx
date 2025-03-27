import React from "react";
import { Label } from "../ui/label";

const experience = {
    "OCT 2023 - Present": "📍  MAYBANK 🐯\nWork as a junior developer 💻 who involved in FE, BE and mobile development , experience in the Agile workflow to develop a survey platform integrating Qualtrics API which aimed to enhance employee engageent and feedback collection. Self-learned Docker to prepare the dockerfile for cloud deployment and worked closely with internal cloud team to troubleshoot deployment issues.\nHave experienced on design intuitive UI/UX using Figma to have a preview of the look and feel of the web page. Participated in POC development for our major mobile application to integrate dynamic notification action button for diverse user scenarios.",
    "NOV 2022 - FEB 2023": "📍 Silverlake Mobility Ecosystem\nWork as a Front-end Team intern, working closely with my team lead and colleagues to systematically documented and fixed bugs in source code.\nAlso, I have explored micro-frontends and conducted some research. Comprehensive documentation for project procedures and integration is conducted."
}


const Experience = () => {
    return (
        <>
            <Label className="font-bold text-2xl">Experience</Label>
            <div className="mt-10">
                {Object.entries(experience).map(([date, desc]) => (
                    <div className="grid grid-cols-4 gap-4 mt-5" key={date}>
                        <div className="col-span-1">
                            <Label className="text-md">{date}</Label>
                        </div>
                        <div className="col-span-3">
                            <p className="text-sm">
                                {desc.split("\n").map((line, index) => (
                                    <React.Fragment key={index}>
                                      <br/>  {line} <br />
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>


    )
}

export default Experience;