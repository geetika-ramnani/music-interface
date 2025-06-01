import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./config/dbConnection.js";
import { songsRouter } from "./routes/songRoutes.js";
import { userRouter } from "./routes/userRoutes.js";
import { artisteRouter } from "./routes/artisteRoutes.js";
import { playlistRouter } from "./routes/playlistRoutes.js";
import cors from "cors";

const allowedOrigins = [
  "https://music-interface-indol.vercel.app",
  "http://localhost:5173", 
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));


dotenv.config();

const app = express();
app.use(express.json());

connectDb();

app.use("/api/songs/", songsRouter);
app.use("/api/users/", userRouter);
app.use("/api/artistes/", artisteRouter);
app.use("/api/playlists/", playlistRouter);

const port = process.env.PORT || 6000;

app.listen(port, async () => {
	console.log(`SERVER RUNNING ON PORT ${port}`);
});
