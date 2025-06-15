import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardAction } from "./ui/card"
import { formatDate } from '@/lib/dateUtils'

const BlogItem = ({ post }) => {
	return (
		<Card className="mb-2">
			<CardHeader className="p-4">
				<CardTitle>{post.fields.title}</CardTitle>
				<CardDescription>{post.fields.general}</CardDescription>
				<CardAction>{formatDate(post.fields.date)}</CardAction>				
			</CardHeader>
		</Card>
	)
}

export default BlogItem