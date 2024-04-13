import { User, Account, Budget, Savings, Transaction } from "./index.js";

const seedUsers = [
    { username: 'meko123', name: "Meko Cheeko", email: 'meko@example.com', password: 'hashed_password1' },
    { username: 'janeDoe', name: "Jane Doe", email: 'jane@example.com', password: 'hashed_password2' }
];

const seedAccounts = [
    { accountType: 'Checking', institution: 'Bank Name', balance: 1500.75 },
    { accountType: 'Savings', institution: 'Bank Name', balance: 2500.00 }
];

const seedTransactions = [
    { amount: -50.25, date: new Date(), type: 'Expense', category: 'Dining Out' },
    { amount: 1200, date: new Date(), type: 'Income', category: 'Salary' }
];

const seedBudgets = [
    { category: 'Groceries', limit: 300, startDate: new Date(), endDate: new Date() },
    { category: 'Entertainment', limit: 150, startDate: new Date(), endDate: new Date() }
];

const seedSavings = [
    { goal: 'Vacation', targetAmount: 2000, currentAmount: 500, targetDate: new Date() },
    { goal: 'New Car', targetAmount: 15000, currentAmount: 3000, targetDate: new Date() }
];

const seedDatabase = async () => {
    await User.deleteMany({});
    await Account.deleteMany({});
    await Transaction.deleteMany({});
    await Budget.deleteMany({});
    await Savings.deleteMany({});

    await User.insertMany(seedUsers);
    const users = await User.find();
    
    seedAccounts.forEach((account, index) => {
        account.userId = users[index % users.length]._id;
    });
    await Account.insertMany(seedAccounts);
    
    const accounts = await Account.find();
    seedTransactions.forEach((transaction, index) => {
        transaction.accountId = accounts[index % accounts.length]._id;
    });
    await Transaction.insertMany(seedTransactions);

    seedBudgets.forEach((budget, index) => {
        budget.userId = users[index % users.length]._id;
    });
    await Budget.insertMany(seedBudgets);

    seedSavings.forEach((savings, index) => {
        savings.userId = users[index % users.length]._id;
    });
    await Savings.insertMany(seedSavings);
};

export default seedDatabase;