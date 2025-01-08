"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter, useSearchParams } from "next/navigation"
import CommentBoard from "./commentBoard";
import WordCloud from "./wordCloud";

const ProjectTabs = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeTab = searchParams.get("tab") || "commentBoard"; // Default tab


    const onTabChange = (tab: string) => {
        router.push(`?tab=${tab}`, { scroll: false });
    }
    return (
        <Tabs defaultValue={activeTab} className="text-center" onValueChange={onTabChange}>
            <TabsList>
                <TabsTrigger value="commentBoard">Comment Board</TabsTrigger>
                <TabsTrigger value="wordcloud">Cloud Chart</TabsTrigger>
            </TabsList>
            <TabsContent value="commentBoard"><CommentBoard /></TabsContent>
            <TabsContent value="wordcloud"><WordCloud /></TabsContent>
        </Tabs>
    )
}


export default ProjectTabs;