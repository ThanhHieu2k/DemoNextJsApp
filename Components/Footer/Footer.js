import styles from './Footer.module.css'

export default function Footer(){
    return (
        <div className={styles.footer}>
            Design by <span className={styles.hightlight}>Thanh Hieu</span>
        </div>
    )
}
