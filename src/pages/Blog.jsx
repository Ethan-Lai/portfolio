import { useEffect, useState } from "react"
import { client } from "../client"
import BlogItem from "@/components/BlogItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

const Blog = ({ limit }) => {
    const navigate = useNavigate()
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
            <div className="flex justify-between items-center">
                <h1 className={`title text-balance ${limit ? "text-4xl" : "text-5xl"} calistoga-regular`}>{limit ? "recent posts" : "blog"}</h1>
                {
                    limit &&
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/blog")}>
                        <span>view more</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                }            
            </div>
            <br />
            {posts.map(post => (
                <BlogItem key={post.sys.id} post={post} />
            ))}
        </div>
    );
}

export default Blog;
