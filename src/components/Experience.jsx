import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

const Experience = () => {
    return (
        <div className="w-full">
            <Tabs defaultValue="Experience">
                <TabsList>
                    <TabsTrigger value="Experience">Experience</TabsTrigger>
                    <TabsTrigger value="Education">Education</TabsTrigger>
                </TabsList>
                <TabsContent value="Experience">Display Experience here</TabsContent>
                <TabsContent value="Education">Display Education here</TabsContent>
            </Tabs>
        </div>
    );
}

export default Experience