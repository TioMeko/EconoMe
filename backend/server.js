import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import connectDatabase from "./config/connection.js";
import seedDatabase from "./api/models/seed.js";
import routes from "./api/routes/index.js";
import { errorHandle, requestLogging } from "./utils/middleware/index.js";
import dateFormat from "./utils/helper/dateFormat.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swaggerConfig.js";

const PORT = process.env.PORT || 3001;
const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
requestLogging(app);
app.use(bodyParser.json());
app.use('/api', routes);
errorHandle(app);

const startServer = async () => {
  try {
    await connectDatabase();
    console.log(
      `${dateFormat} Connected to database, now seeding...`
    );
    // await seedDatabase();
    // console.log(
    //   `${dateFormat} Seeding completed, starting server...`
    // );
    app.listen(PORT, () => {
      console.log(
        `${dateFormat} API server running on port ${PORT}`
      );
    });
  } catch (error) {
    console.error(
      `${dateFormat} Failed to connect to the database or seed data:`,
      error
    );
    process.exit(1);
  }
};

startServer();
