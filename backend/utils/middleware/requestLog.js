import dateFormat from "../helper/dateFormat.js";

const requestLogging = (app) => {
  app.use((req, res, next) => {
    console.log(
      `${dateFormat} - ${req.method} Request to ${req.url}`
    );
    next();
  });
};

export default requestLogging;