import { useEffect, useState } from "react"
import { client } from "../client"

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
            <h1>My Blog</h1>

            {posts.map((post) => (
                <div
                    key={post.sys.id}
                >
                    <h2>{post.fields.title}</h2>
                    <p>
                        <strong>Date:</strong>{" "}
                        {new Date(post.fields.date).toLocaleDateString()}
                    </p>
                    <p>
                        <strong>Tags:</strong> {post.fields.tags}
                    </p>
                    <div>{post.fields.content}</div>
                </div>
            ))}
        </div>
    );
}

export default Blog;
