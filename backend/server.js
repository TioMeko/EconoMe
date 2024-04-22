import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import connectDatabase from "./config/connection.js";
import seedDatabase from "./api/models/seed.js";
import routes from "./api/routes/index.js";
import { errorHandle, requestLogging } from "./middleware/middleware.js";

const PORT = process.env.PORT || 3001;
const app = express();

requestLogging(app);
app.use(bodyParser.json());
app.use('/api', routes);
errorHandle(app);

const startServer = async () => {
  try {
    await connectDatabase();
    console.log(
      `[${new Date().toISOString()}] Connected to database, now seeding...`
    );
    // await seedDatabase();
    // console.log(
    //   `[${new Date().toISOString()}] Seeding completed, starting server...`
    // );
    app.listen(PORT, () => {
      console.log(
        `[${new Date().toISOString()}] API server running on port ${PORT}`
      );
    });
  } catch (error) {
    console.error(
      `[${new Date().toISOString()}] Failed to connect to the database or seed data:`,
      error
    );
    process.exit(1);
  }
};

startServer();
