import axios from "axios";

export const axiosInstance = axios.create({
    base_url: "http://localhost:4545/"
})