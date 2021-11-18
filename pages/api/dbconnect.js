import {connect} from '../../config/db.js'
import Course from '../../lib/database.js'

connect()

export default function handler(req, res) {
    Course.find({})
        .then(courses=>res.status(200).json(courses))
        .catch(err=>res.send('error message'))
  }