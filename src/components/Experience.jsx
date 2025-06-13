import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Card } from "./ui/card"
import { workExperience, educationExperience, toolsExperience } from "../data/experienceData.js"
import ExperienceItem from "./ExperienceItem"

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
                    <Card className="relative">
                        {workExperience && workExperience.map(experience => 
                            <ExperienceItem key={experience.id} experience={experience} />
                        )}
                    </Card>
                </TabsContent>
                <TabsContent value="Education">
                    <Card className="relative">
                        {educationExperience && educationExperience.map(experience => 
                            <ExperienceItem key={experience.id} experience={experience} />
                        )}
                    </Card>
                </TabsContent>
                <TabsContent value="Tools">
                    <Card className="relative">
                        {toolsExperience && toolsExperience.map(experience => 
                            <ExperienceItem key={experience.id} experience={experience} />
                        )}
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default Experience