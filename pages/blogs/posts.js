import Layout from '../../Components/Layout/layout.js'
import PostItem from '../../Components/PostItem/PostItem.js'

export async function getStaticProps(){
    let response =  await fetch('https://jsonplaceholder.typicode.com/posts')
    let posts = await response.json()
    posts = posts.slice(0,20)
    posts= posts.map(post => Object.assign(post, {author: 'Thanh Hieu', image: 'https://blog.webico.vn/wp-content/uploads/2016/06/Blogging-1.jpg', time: Math.round(Math.random() * 24),avatar: 'https://upanh123.com/wp-content/uploads/2020/10/anh-gai-xinh-toc-ngang-vai-sk4-1.jpg'}))
    return {
        props:{
            posts,
        },
    }
}

export default function Posts({posts}){
    return (
        <Layout title='List Post'>
            <div className="grid">
                <ul className="postMenu">
                    {posts.map(post =><PostItem post={post}/>)} 
                </ul>
            </div>
        </Layout>
        
    )
}