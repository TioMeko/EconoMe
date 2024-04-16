import { Savings } from "../models/index.js";

// Create a new savings
const createSavings = async (req, res) => {
  try {
    const newSavings = new Savings(req.body);
    await newSavings.save();
    console.log(`[${new Date().toISOString()}] New savings has been created.`);
    res.status(201).send(newSavings);
  } catch (error) {
    // 400 Error if missing params
    res.status(400).send({
      message: "Failed to create savings due to missing or invalid fields.",
      errors: error.errors,
    });
  }
};

// Get all savings
const getAllSavings = async (req, res) => {
  try {
    const savings = await Savings.find({});
    res.send(savings);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a single savings by id
const getSavings = async (req, res) => {
  try {
    const savings = await Savings.findById(req.params.id);
    if (!savings) {
      res.status(400).send({ message: "Savings not found" });
    }
    res.send(savings);
  } catch (error) {
    res.status(500).send({
      error: "An error occurred while fetching the savings",
    });
  }
};

// Update savings by id
const updateSavings = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["goal", "targetAmount", "currentAmount", "targetDate"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const savings = await Savings.findById(req.params.id);
    if (!savings) {
      return res.status(404).send();
    }
    // Iterates over each field name in updates and sets the new value from req.body to saving
    updates.forEach((update) => (savings[update] = req.body[update]));
    await savings.save();
    res.send(savings);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete an saving by id
const deleteSavings = async (req, res) => {
  try {
    const savings = await Savings.findByIdAndDelete(req.params.id);
    if (!savings) {
      return res.status(404).send();
    }
    res.send(savings);
    console.log(`[${new Date().toISOString()}] Savings has been deleted.`);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Failed to delete saving", error: error.message });
  }
};

export { createSavings, getAllSavings, getSavings, updateSavings, deleteSavings };
