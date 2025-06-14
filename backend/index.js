import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./config/dbConnection.js";
import { songsRouter } from "./routes/songRoutes.js";
import { userRouter } from "./routes/userRoutes.js";
import { artisteRouter } from "./routes/artisteRoutes.js";
import { playlistRouter } from "./routes/playlistRoutes.js";


dotenv.config();

const app = express();

const allowedOrigins = [
  "https://music-interface-indol.vercel.app",
  "http://localhost:5173", 
];

const corsOptions = {
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  credentials: true,
};

app.use(cors(corsOptions));

// This is the missing part:
app.options("*", cors(corsOptions)); // handles preflight requests

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
