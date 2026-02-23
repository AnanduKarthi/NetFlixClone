import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjFiNjdjMTgwMzUxMWQxNTVmNDZhM2ZhZTA2ODYyYyIsIm5iZiI6MTc0ODYyOTkwNi4yNjcsInN1YiI6IjY4MzlmOTkyZGU4ZWNlOWQwZTNkMjIzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yKPIERgR6XXWDJvgWJIqIoGDVRL1HDZIJCNyZdY6uWs";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },

  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized request");
    }
    return Promise.reject(error);
  },
);
