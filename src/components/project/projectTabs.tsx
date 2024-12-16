import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SingleClick from "./singleClick";

const ProjectTabs = () => {
    return (
        <Tabs defaultValue="singleClick" className="">
            <TabsList>
                <TabsTrigger value="singleClick">Single Click</TabsTrigger>
                <TabsTrigger value="chat">Chat</TabsTrigger>
            </TabsList>
            <TabsContent value="singleClick"><SingleClick /></TabsContent>
            <TabsContent value="chat">Chat.</TabsContent>
        </Tabs>
    )
}


export default ProjectTabs;