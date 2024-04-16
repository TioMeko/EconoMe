import { User } from "../models/index.js";

// Create a new user
const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    console.log(`[${new Date().toISOString()}] New user has been created.`);
    res.status(201).send(newUser);
  } catch (error) {
    // 400 Error if missing params
    res.status(400).send({
      message: "Failed to create user due to missing or invalid fields.",
      errors: error.errors,
    });
  }
};

// Get a user's data by ID
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    // 400 error if no user with that ObjectId exists
    if (!user) return res.status(400).send({ message: "User not found" });
    res.send(user);
  } catch (error) {
    // 500 error if improper id.length || characters
    res.status(500).send({
      error: "An error occurred while fetching the user",
    });
  }
};

// Updates a user's data by ID
const updateUser = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password'];
    const isValid = updates.every(update => allowedUpdates.includes(update));

    if (!isValid) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        // Iterates over each field name in updates and sets the new value from req.body to user
        updates.forEach(update => user[update] = req.body[update]);
        await user.save();
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
        console.log(`[${new Date().toISOString()}] User has been deleted.`);
    } catch (error) {
        res.status(500).send({ message: "Failed to delete user", error: error.message });
    }
};

export { createUser, getUser, updateUser, deleteUser};
