import "dotenv/config";
import { User } from "../models/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Create a new user
const createUser = async (req, res) => {
  try {
    const { username, name, email, password } = req.body;

    // Check if the user or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .send({ message: "Username or email already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10); // The salt rounds, 10 is generally recommended
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user with the hashed password
    const newUser = new User({
      username,
      name,
      email,
      password: hashedPassword,
      createdAt: Date.now(),
    });

    await newUser.save();
    console.log(`[${new Date().toISOString()}] New user has been created.`);

    // Send the response without including the password
    const userResponse = {
      _id: newUser._id,
      username: newUser.username,
      name: newUser.name,
      email: newUser.email,
      createdAt: newUser.createdAt,
    };
    res.status(201).send(userResponse);
  } catch (error) {
    console.error(error);
    // 400 Error if there is an issue during user creation, typically validation
    res.status(400).send({
      message: "Failed to create user due to missing or invalid fields.",
      errors: error.errors,
    });
  }
};

// Get a user's data by ID
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password")
    if (!user) return res.status(400).send({ message: "User not found" });
    res.send(user);
  } catch (error) {
    res.status(500).send({
      error: "An error occurred while fetching the user",
    });
  }
};

// Updates a user's data by ID
const updateUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password"];
  const isValid = updates.every((update) => allowedUpdates.includes(update));

  if (!isValid) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    // Iterates over each field name in updates and sets the new value from req.body to user
    updates.forEach((update) => (user[update] = req.body[update]));
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
    res
      .status(500)
      .send({ message: "Failed to delete user", error: error.message });
  }
};

// Login user
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(404).send("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export { createUser, getUser, updateUser, deleteUser, loginUser };
