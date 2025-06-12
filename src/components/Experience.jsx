import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardAction } from "./ui/card"
import OneChartLogo from "/OneChartLogo.jpeg"
import CMALogo from "/CMALogo.png"
import UTMLogo from "/UTMLogo.jpeg"

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
                        <CardHeader className="ml-10 pl-10 pt-3 pb-3 border-l-1">
                            <CardDescription>May 2024 - May 2025</CardDescription>
                            <div className="flex items-center relative">
                                <a href="https://onechart.ai/">
                                    <img 
                                        src={OneChartLogo} 
                                        alt="OneChart.ai Logo" 
                                        className="absolute -left-16 -top-4 w-12 h-12 rounded-full border-1"
                                    />
                                </a>
                                <CardTitle>OneChart</CardTitle>
                            </div>
                            <CardDescription>Software Developer</CardDescription>
                            <CardDescription>
                                <ul className="list-disc pl-5 text-slate-300">
                                    <li>Developed an automated React form builder to streamline client onboarding, supporting 1,500+ users and reducing development time by 100+ hours</li>
                                    <li>Built reusable React component library for form builder, reducing new form type development time by 20+ hours and supporting 10+ customizable UI elements</li>
                                    <li>Deployed and maintained Docker instances of OneChart on MedStack cluster, serving 10 healthcare organizations with secure cloud infrastructure</li>
                                    <li>Implemented Stripe API to automate subscription billing, handling 1,500+ checkout transactions</li>
                                    <li>Developed Celery (Python) workers using Redis to manage AI dictation workflows, eliminating API bottlenecks and improving system response time by 20%</li>
                                </ul>
                            </CardDescription>
                        </CardHeader>
                        <CardHeader className="ml-10 pl-10 pt-3 pb-3 border-l-1">
                            <CardDescription>April 2018 - March 2021</CardDescription>
                            <div className="flex items-center relative">
                                <a href="https://www.championsmartialarts.ca/">
                                    <img 
                                        src={CMALogo} 
                                        alt="Champions Martial Arts Logo" 
                                        className="absolute -left-16 -top-4 w-12 h-12 rounded-full border-1 bg-white"
                                    />
                                </a>
                                <CardTitle>Champions Martial Arts</CardTitle>
                            </div>
                            <CardDescription>Martial Arts Instructor</CardDescription>
                            <CardDescription>
                                <ul className="list-disc pl-5 text-slate-300">
                                    <li>Broke down complex martial arts techniques into manageable steps, reducing average skill mastery time by 50%</li>
                                    <li>Adapted teaching methods to accommodate students with diverse learning styles and physical abilities, achieving 80% student retention</li>
                                </ul>
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </TabsContent>
                <TabsContent value="Education">
                    <Card className="relative">
                        <CardHeader className="ml-10 pl-10 pt-3 pb-3 border-l-1">
                            <CardDescription>September 2021 - April 2026</CardDescription>
                            <div className="flex items-center relative">
                                <a href="https://www.utm.utoronto.ca/">
                                    <img 
                                        src={UTMLogo} 
                                        alt="University of Toronto Mississauga Logo" 
                                        className="absolute -left-16 -top-4 w-12 h-12 rounded-full border-1"
                                    />
                                </a>
                                <CardTitle>Champions Martial Arts</CardTitle>
                            </div>
                            <CardDescription>Bachelor's of Science in Economics</CardDescription>
                            <ul className="list-disc pl-5 text-sm text-slate-300">
                                <li>Computer Science Minor</li>
                                <li>Mathematical Sciences Minor</li>
                            </ul>
                        </CardHeader>
                    </Card>
                </TabsContent>
                <TabsContent value="Tools">
                    <Card className="relative">
                        <CardHeader className="ml-10 pl-10 pt-3 pb-3 border-l-1">
                            <CardDescription>September 2021 - April 2026</CardDescription>
                            <div className="flex items-center relative">
                                <a href="https://www.utm.utoronto.ca/">
                                    <img 
                                        src={UTMLogo} 
                                        alt="University of Toronto Mississauga Logo" 
                                        className="absolute -left-16 -top-4 w-12 h-12 rounded-full border-1"
                                    />
                                </a>
                                <CardTitle>Champions Martial Arts</CardTitle>
                            </div>
                            <CardDescription>Bachelor's of Science in Economics</CardDescription>
                            <ul className="list-disc pl-5 text-sm text-slate-300">
                                <li>Computer Science Minor</li>
                                <li>Mathematical Sciences Minor</li>
                            </ul>
                        </CardHeader>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default Experience