import { useLoaderData } from "react-router-dom";

const Post = () => {
    const {post} = useLoaderData()
    return (
        <>
        {post.id < 101 ? (
            <div>
            <h1 className="my-5 text-capitalize">{post.title}</h1>
            <p>A{post.body}.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempore cupiditate quia ullam! Autem adipisci sequi nihil rem officia mollitia, sit temporibus provident, iure voluptate aperiam fuga libero inventore. In, excepturi, consequuntur natus laboriosam exercitationem, fugit nobis molestias unde explicabo perspiciatis impedit voluptas necessitatibus assumenda? Quia architecto assumenda unde debitis, dolorum maxime suscipit! Dolore, quo dolorem vero maiores voluptas odio veniam cum. Dicta doloribus quaerat, autem nam molestias, quidem ipsa rem excepturi necessitatibus id saepe harum nisi placeat soluta quae repellat a facere totam cupiditate. Facere, qui earum? Omnis voluptas nam, corporis fugit maxime obcaecati, quisquam laboriosam voluptatem aliquam ullam nihil blanditiis soluta, distinctio nobis ducimus sint beatae? Incidunt similique impedit, nobis quisquam quibusdam veritatis cum. At quasi aut error deleniti hic assumenda fuga repellendus nisi maxime, necessitatibus tempore id rerum temporibus, cum ducimus dolores natus perferendis accusamus. Natus neque ex magni placeat facilis ratione suscipit aut earum assumenda, quibusdam nobis quis delectus porro similique dolores, ullam molestias exercitationem nulla animi! Tenetur sed illum repellendus provident explicabo officiis, corporis voluptas qui reiciendis voluptatem, sapiente minus quibusdam consequatur, temporibus possimus nemo id velit accusantium nostrum modi quas! Inventore delectus accusantium quos laboriosam enim modi nostrum neque ut, nulla quibusdam hic minima mollitia vel rem distinctio officia magni tempore odit eaque. Accusantium excepturi vitae repellendus atque officiis aspernatur deleniti dolore voluptatibus, veniam ipsam maxime obcaecati qui quo commodi, dolores ipsa fugiat! Velit voluptatem in neque quia, alias provident tenetur aut accusantium porro totam voluptatibus aspernatur id molestiae ratione quaerat perspiciatis? Error doloribus ab eos ex vel esse soluta aspernatur. Facere dignissimos placeat quis corrupti, debitis doloremque rem voluptas sed sint provident est molestiae eum ipsum ipsa illo ut ratione quibusdam molestias. Nisi ea architecto corporis assumenda consequatur error recusandae amet voluptate blanditiis sunt ratione veniam voluptatibus iure eveniet necessitatibus, totam ipsa vitae.</p>

        </div>
        ): (
            <p>Not found</p>
        )}
        
        </>
    )
}

export default Post

export const loaderPost = async ({params}) => {
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
if(!res.ok) throw ({
    status: res.status, 
    statusText: 'No encontrado'
})

    const post = await res.json();
    return {post}
};