import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"

const Blog = () => {
    const { posts } = useLoaderData()

     return <>
        <h1 className="py-5 text-center">Blog</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, pariatur eligendi? Id illum blanditiis eius autem nemo iusto non explicabo consequuntur. Ipsum, vel. Cupiditate placeat quae reprehenderit aut repellat rerum, odio a corrupti, sint esse laudantium asperiores eaque tempore cum sunt commodi, facilis aspernatur laborum totam. Sequi ab non ea.</p>
        <div className="blog my-3"></div>
        <ul className="list-group">
            {posts.length > 0  ? (
                posts.map((post) => (
                    <li key={post.id} className="list-group-item text-capitalize">
                        <p><strong>Author:</strong> Lorem, ipsum.</p>
                        <Link to={`/blog/${post.id}`} className="text-decoration-none h5 text-primary">{post.title}</Link>
                    </li>
                ))
            ) : (
                <li>No posts found</li>
            )
            }
        </ul>
    </>
}

export default Blog