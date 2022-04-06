import axios from "axios";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_SPOTIFY_API_URL}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_SPOTIFY_OAUTH_TOKEN}`,
  },
});
