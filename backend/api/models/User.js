import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures email addresses are unique across documents
  },
  password: {
    type: String,
    required: true,
    // *************** need to add in security validation ***************
  },
  createdAt: {
    type: Date,
    default: Date.now, // Default value for the createdAt field
  },
});

const User = model("User", userSchema);

export default User;
