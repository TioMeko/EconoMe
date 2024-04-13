import { Schema, model } from "mongoose";

const transactionSchema = new Schema({
  accountId: {
    type: Schema.Types.ObjectId,
    ref: "Account",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
    enum: ["Income", "Expense"],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Transaction = model("Transaction", transactionSchema);

export default Transaction;