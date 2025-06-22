import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardAction } from "./ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import { Badge } from "./ui/badge"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"


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
        <a key={index} href={link.link} target="_blank">
            <Badge
                key={index}
                className="mr-1 hover:bg-primary/90"
            >
                {link.name === "Website" ? <FontAwesomeIcon icon={faGlobe} /> : <FontAwesomeIcon icon={faGithub} />}
                {link.name}
            </Badge>
        </a>
    )

    const imagesPreview = project.imagesPreview.map((image, index) => (
        <CarouselItem key={index}>
            <div className="p-1">
                <img src={image} alt={`Photo of ${project.name} ${index}`} className="mt-6 mb-4 rounded-sm" />     
            </div>
        </CarouselItem>
    ))

    return (
        <Card className="flex w-full h-full">
            <CardHeader className="flex flex-col justify-between h-full">
                <div>
                    <Dialog>
                        <DialogTrigger className="cursor-pointer">
                            <img src={project.image} alt={`Photo of ${project.name}`} className="mt-6 mb-4 rounded-sm" />     
                        </DialogTrigger>
                        <DialogContent>
                            <Carousel className="ml-auto mr-auto w-8/9">
                                <CarouselContent>
                                    {imagesPreview}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </DialogContent>
                    </Dialog>
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