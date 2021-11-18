import styles from './Header.module.css'
import Link from 'next/link'
import { useState } from 'react'
export default function Header(){
    let [show, setShow] = useState(false)
    return (
        <nav className={styles.header}>
            <h2 >
                <Link href="/">
                    <a className={styles.title}>Education</a>
                </Link>
            </h2>
            
            <span className={styles.icon} onClick={()=>setShow(!show)}>
                <i className="fas fa-user-tie"></i>
            </span>
            
            {show && <ul className={styles.navbarMenu}>
                <li className={styles.navbarItem }>Thanh Hieu</li>
                <li className={styles.navbarItem}>
                    <Link href=''>
                        <a className={styles.navbarLink}>Khóa học đã đăng ký </a>
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link href=''>
                        <a className={styles.navbarLink}>Khóa học của tôi</a>
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link href='/blogs/posts'>
                        <a className={styles.navbarLink}>Blogs</a>
                    </Link>
                </li>
                <li className={styles.navbarItem}>Đăng xuất</li>
            </ul>}
            
        </nav>
    )
}