
import Link from 'next/link'
import Layout from '../Components/Layout/layout.js'
import CourseItem from '../Components/CourseItem/CourseItem'

import {connect} from '../config/db.js'



connect();

export async function getStaticProps() {
  const data = await fetch('http://localhost:3000/api/dbconnect')
  const  courses = await data.json();
  return {
    props: {
      courses,
    }
  }
}

export default function Home( {courses} ) {
  return (
    <Layout title="Home" >
      <div className="grid">
        <div className="row">
          {courses.map(course=>{
            return <Link key={course._id} href={`/courses/${course.slug}`}>
              <a key={course._id} className="collumn-4"><CourseItem course={course}/></a>
            </Link>
          })}
        </div>
      </div>
    </Layout>
  )
}








  