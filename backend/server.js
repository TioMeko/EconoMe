import "dotenv/config";
import express from "express";
import connectDatabase from "./src/config/connection.js";

const PORT = process.env.PORT || 3001;
const app = express();

const startServer = async () => {
  try {
    await connectDatabase();
    app.listen(PORT, () => {
      console.log(`[${new Date().toISOString()}] API server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Failed to connect to the database:`, error);
    process.exit(1);
  }
};

startServer();
