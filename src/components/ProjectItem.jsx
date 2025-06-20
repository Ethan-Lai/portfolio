import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardAction } from "./ui/card"
import { Badge } from "./ui/badge"

const ProjectItem = ({ project }) => {
    const tools = project.tools.map((tool, index) => 
        <Badge 
            key={index} 
            variant="outline"
            className="mr-1 mb-1"
        >
            {tool}
        </Badge>
    )

    const links = project.links.map((link, index) => 
        <Badge
            key={index}
            className="mr-1"
        >
            <a href={link.link} target="_blank">
                {link.name}
            </a>
        </Badge>
    )

    return (
        <Card className="flex w-full h-full">
            <CardHeader className="flex flex-col justify-between h-full">
                <div>
                    <img src={project.image} alt={`Photo of ${project.name}`} className="mt-6 mb-4" />
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription className="mt-2">{project.description}</CardDescription>
                </div>
                <div className="space-y-4">                    

                    <div className="flex flex-wrap items-start">
                        <span className="sr-only">{`List of tools used for ${project.name}`}</span>
                        {tools} 
                    </div>
                    <div className="flex flex-wrap mb-6">
                        {links}
                    </div>
                </div>
            </CardHeader>
        </Card>
    )
}

export default ProjectItem