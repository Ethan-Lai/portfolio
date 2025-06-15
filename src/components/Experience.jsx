import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Card } from "./ui/card"
import { workExperience, educationExperience, toolsExperience } from "../data/experienceData.js"
import ExperienceItem from "./ExperienceItem"
import ToolItem from "./ToolItem"

const Experience = () => {
    return (
        <div className="w-full">
            <Tabs defaultValue="Experience">
                <TabsList>
                    <TabsTrigger value="Experience">Experience</TabsTrigger>
                    <TabsTrigger value="Education">Education</TabsTrigger>
                    <TabsTrigger value="Tools">Tools</TabsTrigger>
                </TabsList>
                <TabsContent value="Experience">
                    <Card>
                        {workExperience && workExperience.map(experience => 
                            <ExperienceItem key={experience.id} experience={experience} />
                        )}
                    </Card>
                </TabsContent>
                <TabsContent value="Education">
                    <Card>
                        {educationExperience && educationExperience.map(experience => 
                            <ExperienceItem key={experience.id} experience={experience} />
                        )}
                    </Card>
                </TabsContent>
                <TabsContent value="Tools">
                    <Card className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 p-6">
                        {toolsExperience && toolsExperience.map(tool => 
                            <ToolItem key={tool.id} tool={tool} />
                        )}
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default Experience