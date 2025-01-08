import { getComment } from "@/actions/comment_action";
import ProjectTabs from "@/components/project/projectTabs";


export default async function Project() {
    return (
        <div className="flex justify-center justify-items-center">
            <ProjectTabs />
        </div>
    )
}