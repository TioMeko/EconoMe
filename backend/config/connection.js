import mongoose from "mongoose";

const connectDatabase = async () => {
    const dbURI = process.env.URI || "mongodb://localhost:27017/econome"
    await mongoose.connect(dbURI);
    console.log(`[${new Date().toISOString()}] MongoDB connected successfully at ${dbURI.split('@').pop()}`);
    return mongoose.connection;
};

export default connectDatabase;
