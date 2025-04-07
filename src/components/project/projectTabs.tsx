"use client"
import { Label } from "../ui/label";
import ProjectCards from "./projectCards";

const ProjectTabs = () => {
    return (
        <>
            <Label className="font-bold text-2xl">Projects</Label>
            <div className="mt-10 border h-auto w-full">
                <ProjectCards />
            </div>
        </>
    )
}


export default ProjectTabs;