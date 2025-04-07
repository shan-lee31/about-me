import { ChevronDown, ChevronsDown, ChevronsDownIcon, ChevronsUp, ChevronsUpDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useState } from "react";


const Intro = () => {
    const [isOpen, setIsOpen] = useState(false)

    const techAndSkills = {
        "Language": ['Javascript', 'Typescript', 'Python'],
        "Framework": ['React', "React Native", 'NextJS'],
        "Backend": ['Node.js', 'Express.js'],
        "Database": ['MongoDB', 'MySQL'],
        "Tools": ["Insomnia", "Docker"],
    }

    const intro = "Hi 👋🏼 — I'm a junior software developer based in Selangor,Malaysia, who's always up for a little tech adventure.\nI may not call it love, but there's something exciting about solving problems, learning new things, and making cool stuff happen! ✨ Every challenge feels like a puzzle waiting to be cracked,and every project is a chance to build something meaningful. I'm here to explore, grow, and most importantly—contribute in any way I can. \nLet’s create something awesome together! 🚀"
    return (
        <>
            <div className="place-items-center md:hidden">
                <div className="flex flex-row justify-center mb-5">
                    <img alt="me" src="grad1.png" width={100} height={100} className="rounded-xl" />
                </div>
            </div>
            <div className="grid grid-cols-4 md:gap-4 gap-2">
                <div className="md:col-span-3 col-span-full text-center flex flex-col items-center justify-center">
                    <Label className="md:text-6xl flex text-3xl">
                        Lee Pui Shan
                    </Label>
                    <br />
                </div>
                <div className="place-items-center hidden md:flex">
                    <div className="">
                        <img alt="me" src="grad1.png" width={120} height={120} className="rounded-xl" />
                    </div>
                </div>

                {intro.split("\n").map((line, index) => (
                    <div className="col-span-full mt-2" key={index}>
                        <p key={index} className="text-justify">{line}</p>
                    </div>
                ))}


            </div>
            <p className="flex mt-5 text-[#50d71e]">View My Skills {isOpen ? <ChevronUp onClick={() => setIsOpen(!isOpen)}
                className="hover:cursor-pointer" /> : <ChevronDown onClick={() => setIsOpen(!isOpen)}
                    className="hover:cursor-pointer" />}</p>
            <div>
                {isOpen ?
                    <>
                        <div className="hidden md:flex mt-10 border rounded-md p-3">
                            {Object.entries(techAndSkills).map(([tech, skills]) => (
                                <div className="grid md:grid-cols-3 gap-3 mr-2" key={tech}>
                                    <div className="flex flex-col md:col-span-1">

                                        <Label className="underline">{tech}</Label>
                                        {skills.map((x) => (
                                            <div className="mb-2 flex mt-2" key={x}>
                                                <Label className="border rounded-xl p-3 md:text-md text-xs md:min-w-24">{x}</Label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className="flex mt-10 border rounded-md p-3 md:hidden">
                            <div className="grid grid-cols-2 grid-rows-3 gap-3 mr-2">
                                {Object.entries(techAndSkills).map(([tech, skills]) => (

                                    <div className="flex flex-col" key={tech}>

                                        <Label className="underline">{tech}</Label>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {skills.map((x) => (
                                                // <div className="mb-2 flex mt-2" key={x}>
                                                <Label key={x} className="border rounded-xl p-3 text-xs">{x}</Label>
                                                // </div>
                                            ))}
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </>
                    : <></>
                }
            </div>
        </>
    )
}

export default Intro;