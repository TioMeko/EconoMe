import { Transaction } from "../models/index.js";

// Create a new transaction
const createTransaction = async (req, res) => {
  try {
    const newTransaction = new Transaction(req.body);
    await newTransaction.save();
    console.log(`[${new Date().toISOString()}] New transaction has been created.`);
    res.status(201).send(newTransaction);
  } catch (error) {
    // 400 Error if missing params
    res.status(400).send({
      message: "Failed to create transaction due to missing or invalid fields.",
      errors: error.errors,
    });
  }
};

// Get all transactions
const getAllTransactions = async (req, res) => {
  try {
    const transaction = await Transaction.find({});
    res.send(transaction);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a single transaction by id
const getTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      res.status(400).send({ message: "Transaction not found" });
    }
    res.send(transaction);
  } catch (error) {
    res.status(500).send({
      error: "An error occurred while fetching the transaction",
    });
  }
};

// Update transaction by id
const updateTransaction = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["amount", "date", "type", "category"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).send();
    }
    // Iterates over each field name in updates and sets the new value from req.body to saving
    updates.forEach((update) => (transaction[update] = req.body[update]));
    await transaction.save();
    res.send(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete an saving by id
const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction) {
      return res.status(404).send();
    }
    res.send(transaction);
    console.log(`[${new Date().toISOString()}] Transaction has been deleted.`);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Failed to delete saving", error: error.message });
  }
};

export { createTransaction, getAllTransactions, getTransaction, updateTransaction, deleteTransaction };
