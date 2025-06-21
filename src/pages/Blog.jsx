import { useEffect, useState } from "react"
import { client } from "../client"
import BlogItem from "@/components/BlogItem"

const Blog = ({ limit }) => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        client.getEntries()
            .then((response) => {
                setPosts(limit ? response.items.slice(0, limit) : response.items)
            })
            .catch((error) => {
                console.log("Error fetching posts:", error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) return <div>Loading ...</div>

    return (
        <div>
            <h1 className={`title text-balance ${limit ? "text-4xl" : "text-5xl"} calistoga-regular`}>{limit ? "recent posts" : "blog"}</h1>
            <br />
            {posts.map(post => (
                <BlogItem key={post.sys.id} post={post} />
            ))}
        </div>
    );
}

export default Blog;
