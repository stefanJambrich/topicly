import axios from "axios";

// export const BASE_URL = "https://topicly.backend.thecrimsonbaron.com";
export const BASE_URL = "http://localhost:8080";

export const connector = axios.create({
  baseURL: `${BASE_URL}/api`,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
  withCredentials: true,
});

export const getPicture = (picture: string) => {
  return `${BASE_URL}/img/${picture}`;
  // const response = await connector.get(`/img/${picture}`);
  // return response.data;
};

export const getUserPicture = (picture: string) => {
  if (picture && picture !== "null") return getPicture(picture);
  else return getPicture("stock.jpg");
};
