import axios from 'axios';
import {BASE_URL} from "../App"

export const connector = axios.create({
  baseURL: `https://topicly.backend.thecrimsonbaron.com/api`,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});