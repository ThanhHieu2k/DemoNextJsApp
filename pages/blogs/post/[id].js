import {useRouter} from 'next/router';
import Layout from "../../../Components/Layout/layout.js";
import styles from '../../../styles/postDetail.module.css';

export async function getServerSideProps(context){
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


export default function PostDetail({posts}){
    let route = useRouter()
    let post = posts.find(post=>post.id===parseInt(route.query.id,10))
    return(
        <Layout title="Post Detail">
            <div className='grid'>       
                <div className={styles.container}>
                    <div className={styles.title}>{post.title}</div>
                    <div className={styles.info}>
                        <img src={post.avatar} className={styles.avatar}/>
                        <div className={styles.wrap}>
                            <span className={styles.name}>{post.author}</span>
                            <span className={styles.time}>{post.time} giờ trước</span>
                        </div>
                    </div>
                    <img src={post.image} className={styles.image}/>
                    <div className={styles.content} >{post.body}</div>
                </div>
            </div>
            
        </Layout>
    )
}