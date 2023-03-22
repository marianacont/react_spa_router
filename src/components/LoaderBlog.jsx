const loaderBlog = async ()=> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return {posts}
}
export default loaderBlog