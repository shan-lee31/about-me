import { getComment } from "@/actions/comment_action";
import ProjectTabs from "@/components/project/projectTabs";
import { Suspense } from "react";


export default async function Project() {
    return (
        <Suspense>
        <div className="flex justify-center justify-items-center">
            <ProjectTabs />
        </div>
        </Suspense>
    )
}