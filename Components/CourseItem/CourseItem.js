
import styles from './CourseItem.module.css'

const CourseItem = ({course}) => {
    return (
        <div className={styles.courseItem}  key ={course.id}>
            <img className={styles.img} src={course.image} alt="Card image cap"/>
            <div className={styles.body}>
                <h5 className={styles.name}>{course.name}</h5>
                <p className={styles.description}>{course.description}</p>
                <button  className="btn btn-primary">Register </button>
            </div>
        </div>
    )
}

export default CourseItem
