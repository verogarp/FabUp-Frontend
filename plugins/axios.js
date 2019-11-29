import axios from 'axios'

export default axios.create({
  baseURL: process.env.API_URL || 'http://locahost:3000/api'
})
