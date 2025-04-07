import { SquareArrowOutUpRight } from "lucide-react";
import { Label } from "../ui/label";

type ProjectInfo = {
    description: string;
    skill: string;
    attachment: string;
    url: string;
};

const ProjectCards = () => {

    const projects: Record<string, ProjectInfo> = {
        "Personal Website": {
            "description": "My portfolio",
            "skill": "Built with Tailwind CSS and Next.js",
            "attachment": "project-1.png",
            "url": "https://github.com/shan-lee31/about-me"
        },
        "Interactive Card": {
            "description": "A responsive and interactive card form inspired by a Frontend Mentor challenge.",
            "skill": "Built with Tailwind CSS and Next.js",
            "attachment": "project-2.png",
            "url": "https://github.com/shan-lee31/interactive-card-details-form"
        },
        "Lottie Animation": {
            "description": "A simple lottie animation icon",
            "skill": "Built with Lottie Creator",
            "attachment": "project-3.png",
            "url": "https://lottiefiles.com/free-animation/chat-loading-Qu8wLVs2xM"
        }
    }

    const handleNavigation = (url: string) => {
        window.open(url, "_blank")
    }
    return (
        <>
            <div className="grid grid-rows-auto grid-cols-3 space-x-4 p-2">
                {Object.keys(projects).map((x, y) => (
                    <div key={y} className="grid border rounded-md p-5 space-y-4 group hover:cursor-pointer transition-colors duration-300" onClick={() => handleNavigation(projects[x].url)}>
                        <img src={projects[x].attachment} alt={`picture-${y}`} width={400} className=""></img>
                        <div className="flex items-center space-x-2">
                            <h2 className="font-bold">{x}</h2>
                            <SquareArrowOutUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <p className="text-sm">{projects[x].description}</p>
                        <p className="text-sm text-gray-500">{projects[x].skill}</p>
                    </div>
                ))
                }
            </div>
        </>
    )
}


export default ProjectCards;