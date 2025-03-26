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
                    <img alt="me" src="grad1.png" width={100} height={100} className="rounded-xl" />
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
                        <img alt="me" src="grad1.png" width={120} height={120} className="rounded-xl" />
                    </div>
                </div>
                <div className="col-span-full mt-10">
                    <Label className="text-md">
                        Hi 👋🏼 — I'm a junior software developer based in
                        Selangor,Malaysia. 
                        <span><br/></span>Just started my career about 1.5 years. 
                        Mainly working on web application and had the opportunity to involve in mobile 
                        development during my degree time.

                        

                    </Label>
                    <br />
                </div>

            </div>
            <p className="flex mt-5 font-thin">View My Skills {isOpen ? <ChevronUp onClick={() => setIsOpen(!isOpen)}
                className="hover:cursor-pointer" /> : <ChevronDown onClick={() => setIsOpen(!isOpen)}
                    className="hover:cursor-pointer" />}</p>
            <div>
                {isOpen ?
                    <div className="flex mt-10 border rounded-md p-3">
                        {Object.entries(techAndSkills).map(([tech, skills]) => (
                            <div className="grid md:grid-cols-3 gap-4 mr-2" key={tech}>
                                <div className="md:col-span-1 justify-center">

                                    <Label className="underline">{tech}</Label>
                                    {skills.map((x) => (
                                        <div className="mb-2 flex mt-2" key={x}>
                                            <Label className="border rounded-xl p-3 md:text-md text-xs">{x}</Label>
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