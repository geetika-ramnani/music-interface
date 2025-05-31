import axios from "axios";

export const client = axios.create({
	baseURL: "https://music-interface.onrender.com",
});
