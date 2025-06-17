import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardAction } from "./ui/card"
import { Badge } from './ui/badge'

const ExperienceItem = ({ experience }) => {
    const experienceDescription = experience.description.map((descriptionItem, index) => 
        <li key={index}>{descriptionItem}</li>
    )

    const experienceLanguages = experience.languages ? 
        experience.languages.map((language, index) => 
            <Badge 
                key={index} 
                className="ml-1 mr-1"
                style={{ backgroundColor: language.color }}
            >
                {language.name}
            </Badge>
        ) : [];

    return (
        <CardHeader className="ml-10 pl-10 pt-3 pb-3 border-l-1">
            <CardDescription>{experience.startDate} - {experience.endDate}</CardDescription>
            <div className="flex items-center relative">
                <a href={experience.website} target="_blank">
                    <img 
                        src={experience.logo} 
                        alt={experience.logoAlt}
                        className={`absolute -left-16 -top-4 w-12 h-12 rounded-full border-1 ${experience.customBackground}`}
                    />
                </a>
                <CardTitle>{experience.organization}</CardTitle>
            </div>
            <CardDescription>{experience.role}</CardDescription>
            <CardDescription>
                <ul className="list-disc pl-5 dark:text-slate-300">
                    {experienceDescription}
                </ul>
            </CardDescription>
            {
                <div className='flex'>
                    <span className="sr-only">List of tools used at OneChart</span>
                    {experienceLanguages}   
                </div>
            }
        </CardHeader>
    )
}

export default ExperienceItem