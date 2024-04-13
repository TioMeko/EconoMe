import { Schema, model } from "mongoose";

const savingsGoalSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  goal: {
    type: String,
    required: true,
  },
  targetAmount: {
    type: Number,
    required: true,
  },
  currentAmount: {
    type: Number,
    default: 0,
  },
  targetDate: {
    type: Date,
    required: true,
  },
});

const SavingsGoal = model("Savings", savingsGoalSchema);

export default SavingsGoal;
