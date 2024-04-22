import jwt from "jsonwebtoken";

const errorHandle = (app) => {
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });
};

const requestLogging = (app) => {
  app.use((req, res, next) => {
    console.log(
      `${new Date().toISOString()} - ${req.method} Request to ${req.url}`
    );
    next();
  });
};

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  };

export { errorHandle, requestLogging, authenticateToken };
