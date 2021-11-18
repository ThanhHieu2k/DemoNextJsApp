

export async function getAllPosts(){
    let response =  await fetch('https://jsonplaceholder.typicode.com/posts')
    let posts = await response.json() 
    return posts.map(post => Object.assign(post, {author: 'Thanh Hieu', image: 'https://blog.webico.vn/wp-content/uploads/2016/06/Blogging-1.jpg'}))
}