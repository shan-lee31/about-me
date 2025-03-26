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
        "Framework": ['React', 'React Native', 'NextJS'],
        "Backend": ['NodeJS', 'Express.JS', 'MongoDB', 'MySQL']
    }
    return (
        <>
            <div className="place-items-center md:hidden">
                <div className="flex flex-row justify-center mb-5">
                    <img alt="me" src="globe.svg" width={70} height={70} className="rounded-xl" />
                </div>
            </div>
            <div className="grid grid-cols-4 md:gap-4 gap-2">
                <div className="md:col-span-3 col-span-full">
                    <Label className="md:text-6xl flex text-3xl justify-center">
                        Lee Pui Shan
                    </Label>
                    <br />
                </div>
                <div className="place-items-center hidden md:flex">
                    <div className="">
                        <img alt="me" src="globe.svg" width={70} height={70} className="rounded-xl" />
                    </div>
                </div>
                <div className="col-span-3 mt-10">
                    <Label className="text-md">
                        Hi 👋🏼 — I'm a junior software developer based in
                        Selangor,Malaysia.
                        My focus is on ....
                    </Label>
                    <br />
                </div>

            </div>
            <p className="flex mt-5 font-thin">View My Skills {isOpen ? <ChevronUp onClick={() => setIsOpen(!isOpen)}
                className="hover:cursor-pointer" /> : <ChevronDown onClick={() => setIsOpen(!isOpen)}
                    className="hover:cursor-pointer" />}</p>
            <div>
                {isOpen ?
                    <div className="flex mt-10 bg-muted-foreground rounded-md p-3">
                        {Object.entries(techAndSkills).map(([tech, skills]) => (
                            <div className="grid grid-cols-3" key={tech}>
                                <div className="col-span-1">

                                    <Label>{tech}</Label>
                                    {skills.map((x) => (
                                        <div className="m-2 flex" key={x}>
                                            <Label className="border rounded-xl p-3">{x}</Label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                    </div>
                    : <></>
                }
            </div>
        </>
    )
}

export default Intro;