import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardAction } from "./ui/card"
import { formatDate } from '@/lib/dateUtils'
import { formatText } from '@/lib/textUtils'

const BlogItem = ({ post }) => {
	return (
		<Card className="mb-2">
			<CardHeader className="p-4 flex flex-col">
                <div className='flex w-full justify-between items-center'>
                    <CardTitle>{post.fields.title}</CardTitle>
                    <CardAction>{formatDate(post.fields.date)}</CardAction>				
                </div>
				<CardDescription className="whitespace-pre-line">{formatText(post.fields.general)}</CardDescription>
			</CardHeader>
		</Card>
	)
}

export default BlogItem