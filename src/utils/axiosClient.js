import axios from 'axios'
import { API_KEY } from '../utils/constants'

const Key = API_KEY
const axiosClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 15,
    key: Key,
    type: 'video',
  },
})

export default axiosClient
