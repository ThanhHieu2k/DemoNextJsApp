import Layout from "../../Components/Layout/layout.js";
import {useRouter} from 'next/router'
import Link from 'next/link'
import styles from '../../styles/courseDetail.module.css'


export async function getServerSideProps() {
    const data = await fetch('http://localhost:3000/api/dbconnect')
    const  courses = await data.json();
    return {
      props: {
        courses,
      }
    }
  }


export default function CourseDetail({courses}){
    let route = useRouter()
    const course = courses.find(course=>course.slug === route.query.slug)
    return(
        <Layout title='detail course'>
            <div className="row">
                <div className="collumn-3">
                    <h2 className={styles.title}>Thông tin cơ bản</h2>
                    <p className={styles.name}><span className={styles.highlight}>Name: </span> {course.name}</p>
                    <p className={styles.description}><span className={styles.highlight}>Description: </span> {course.description}</p>
                </div>
                <div className="collumn-6">
                    <h2 className={styles.nameTop} >{course.name}</h2>
                    <iframe width='100%' height='500px' src={course.videoIds} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>

                <div className="collumn-3">
                    <ul className={styles.lessons}>
                        {course.lessons.map((lesson,index)=><li key={index} className={styles.lessonItem}>{lesson}</li>)}
                    </ul>
                </div>

            </div>
            
        </Layout>
    )
}