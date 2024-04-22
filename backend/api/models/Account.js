import { Schema, model } from "mongoose";

const accountSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  accountType: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  transactions: [{ type: Schema.Types.ObjectId, ref: "Transaction" }],
});

const Account = model("Account", accountSchema);

export default Account;
