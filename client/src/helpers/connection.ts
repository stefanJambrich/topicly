import axios from 'axios';

// export const BASE_URL = "https://topicly.backend.thecrimsonbaron.com";
export const BASE_URL = "http://localhost:8080";

export const connector = axios.create({
  baseURL: `${BASE_URL}/api`,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
  withCredentials: true
});

export const getPicture = async (picture: string) => {
  const response = await connector.get(`/pictures/${picture}`);
  return response.data;
}