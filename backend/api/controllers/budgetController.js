import { Budget, User } from "../models/index.js";

// Create a new budget
const createBudget = async (req, res) => {
  try {
    if (!req.body.userId) {
      return res.status(400).send({ message: "UserId is required to create a budget." });
    }

    const { userId } = req.body;

    const userExists = await User.findById(userId);
    if (!userExists) {
      return res.status(404).send({ message: "User not found. Cannot create budget." });
    }

    const newBudget = new Budget(req.body);
    await newBudget.save();
    await User.findByIdAndUpdate(userId, { $push: { budgets: newBudget._id } });

    console.log(`[${new Date().toISOString()}] New budget has been created.`);
    res.status(201).send(newBudget);
  } catch (error) {
    console.error(error);
    res.status(400).send({
      message: "Failed to create budget due to missing or invalid fields.",
      errors: error.errors,
    });
  }
};

// Get all budgets
const getAllBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find({});
    res.send(budgets);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a single budget by id
const getBudget = async (req, res) => {
  try {
    const budget = await Budget.findById(req.params.id);
    if (!budget) {
      res.status(400).send({ message: "Budget not found" });
    }
    res.send(budget);
  } catch (error) {
    res.status(500).send({
      error: "An error occurred while fetching the budget",
    });
  }
};

// Update an budget by id
const updateBudget = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["category", "limit", "startDate", "endDate"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const budget = await Budget.findById(req.params.id);
    if (!budget) {
      return res.status(404).send();
    }
    // Iterates over each field name in updates and sets the new value from req.body to budget
    updates.forEach((update) => (budget[update] = req.body[update]));
    await budget.save();
    res.send(budget);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete an budget by id
const deleteBudget = async (req, res) => {
  try {
    const budget = await Budget.findByIdAndDelete(req.params.id);
    if (!budget) {
      return res.status(404).send();
    }
    res.send(budget);
    console.log(`[${new Date().toISOString()}] Budget has been deleted.`);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Failed to delete budget", error: error.message });
  }
};

export { createBudget, getAllBudgets, getBudget, updateBudget, deleteBudget };
