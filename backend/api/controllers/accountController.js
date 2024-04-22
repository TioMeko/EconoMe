import { Account, User } from "../models/index.js";

// Create a new account
const createAccount = async (req, res) => {
  try {
    const { userId, accountType, institution, balance } = req.body;

    // Create new account document
    const newAccount = new Account({
      userId,
      accountType,
      institution,
      balance
    });
    await newAccount.save();

    // Link this account to the corresponding user
    await User.findByIdAndUpdate(userId, { $push: { accounts: newAccount._id } });

    console.log(`[${new Date().toISOString()}] New account has been created.`);
    res.status(201).send(newAccount);
  } catch (error) {
    console.error(error);
    res.status(400).send({
      message: "Failed to create account due to missing or invalid fields.",
      errors: error.errors
    });
  }
};

// Get all accounts
const getAllAccounts = async (req, res) => {
  try {
    const accounts = await Account.find({});
    res.send(accounts);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a single account by id
const getAccount = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    if (!account) {
      res.status(400).send({ message: "Account not found" });
    }
    res.send(account);
  } catch (error) {
    res.status(500).send({
      error: "An error occurred while fetching the account",
    });
  }
};

// Update an account by id
const updateAccount = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["accountType", "institution", "balance"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const account = await Account.findById(req.params.id);
    if (!account) {
      return res.status(404).send();
    }
    // Iterates over each field name in updates and sets the new value from req.body to account
    updates.forEach((update) => (account[update] = req.body[update]));
    await account.save();
    res.send(account);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete an account by id
const deleteAccount = async (req, res) => {
  try {
    const account = await Account.findByIdAndDelete(req.params.id);
    if (!account) {
      return res.status(404).send();
    }
    res.send(account);
    console.log(`[${new Date().toISOString()}] Account has been deleted.`);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Failed to delete account", error: error.message });
  }
};

export { createAccount, getAllAccounts, getAccount, updateAccount, deleteAccount };
