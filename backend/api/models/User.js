import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  accounts: [{ type: Schema.Types.ObjectId, ref: "Account" }],
  budgets: [{ type: Schema.Types.ObjectId, ref: "Budget" }],
  savings: [{ type: Schema.Types.ObjectId, ref: "Savings"}]
});

const User = model("User", userSchema);

export default User;
