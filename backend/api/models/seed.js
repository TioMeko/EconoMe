import bcrypt from "bcryptjs";
import { User, Account, Budget, Savings, Transaction } from "./index.js";

const seedUsers = [
  {
    username: "meko123",
    name: "Meko Cheeko",
    email: "meko@example.com",
    password: "hashed_password1",
  },
  {
    username: "janeDoe",
    name: "Jane Doe",
    email: "jane@example.com",
    password: "hashed_password2",
  },
];

const seedAccounts = [
  { accountType: "Checking", institution: "Bank Name", balance: 1500.75 },
  { accountType: "Savings", institution: "Bank Name", balance: 2500.0 },
];

const seedTransactions = [
  { amount: -50.25, date: new Date(), type: "Expense", category: "Dining Out" },
  { amount: 1200, date: new Date(), type: "Income", category: "Salary" },
];

const seedBudgets = [
  {
    category: "Groceries",
    limit: 300,
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    category: "Entertainment",
    limit: 150,
    startDate: new Date(),
    endDate: new Date(),
  },
];

const seedSavings = [
  {
    goal: "Vacation",
    targetAmount: 2000,
    currentAmount: 500,
    targetDate: new Date(),
  },
  {
    goal: "New Car",
    targetAmount: 15000,
    currentAmount: 3000,
    targetDate: new Date(),
  },
];

const seedDatabase = async () => {
  await User.deleteMany({});
  await Account.deleteMany({});
  await Transaction.deleteMany({});
  await Budget.deleteMany({});
  await Savings.deleteMany({});

  // Hash passwords
  for (let user of seedUsers) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }

  // Insert users
  await User.insertMany(seedUsers);
  const users = await User.find();

  // Assign user IDs to accounts and link accounts to users
  seedAccounts.forEach((account, index) => {
    account.userId = users[index % users.length]._id;
  });
  await Account.insertMany(seedAccounts);
  const accounts = await Account.find();
  for (const account of accounts) {
    await User.findByIdAndUpdate(account.userId, {
      $push: { accounts: account._id },
    });
  }

  // // Assign account IDs to transactions
  seedTransactions.forEach((transaction, index) => {
    transaction.accountId = accounts[index % accounts.length]._id;
  });
  await Transaction.insertMany(seedTransactions);
  const transactions = await Transaction.find();
  for (const transaction of transactions) {
    await Account.findByIdAndUpdate(transaction.accountId, {
      $push: { transactions: transaction._id },
    });
  }

  // Assign user IDs to budgets and savings

  seedBudgets.forEach((budget, index) => {
    budget.userId = users[index % users.length]._id;
  });
  await Budget.insertMany(seedBudgets);
  const budgets = await Budget.find();
  for (const budget of budgets) {
    await User.findByIdAndUpdate(budget.userId, {
      $push: { budgets: budget._id },
    });
  }

  seedSavings.forEach((savings, index) => {
    savings.userId = users[index % users.length]._id;
  });
  await Savings.insertMany(seedSavings);
  const savings = await Savings.find();
  for (const saving of savings) {
    await User.findByIdAndUpdate(saving.userId, {
      $push: { savings: saving._id },
    });
  }
};

export default seedDatabase;
