import { useEffect, useState } from "react"
import { client } from "../client"
import BlogItem from "@/components/BlogItem"

const Blog = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        client.getEntries()
            .then((response) => {
                setPosts(response.items)
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
                <h1 className="title text-balance text-4xl sm:text-5xl">Blog</h1>
                <br />
                {posts.map(post => (
                    <BlogItem key={post.sys.id} post={post} />
                ))}
        </div>
    );
}

export default Blog;
