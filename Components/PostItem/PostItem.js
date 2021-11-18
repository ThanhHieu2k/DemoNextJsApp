import styles from './PostItem.module.css'
import Link from 'next/link'

export default function PostItem({post}){
    return(
        <li key={post.id}>
            <Link href={`/blogs/post/${post.id}`}>
                <a className={styles.postItemWrap}>
                    <div className={styles.author}>
                        <img src={post.avatar} className={styles.avatar}/>
                        <span className={styles.name}>{post.author}</span>
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.title}>{post.title}</h2>
                        <img src={post.image} className={styles.image}/>
                    </div>  
                    <div className={styles.time}>
                        {post.time} giờ trước
                    </div>
                </a>
            </Link>
        </li>
    )
}