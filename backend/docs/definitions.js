/**
* @swagger
* components:
*   schemas:
*     Account:
*       type: object
*       example:
*          userId: 66266a84377231fcab399f24
*          accountType: Savings
*          institution: Chase
*          balance: 32302.53
*       required:
*         - userId
*         - accountType
*         - institution
*         - balance
*       properties:
*         userId:
*           type: string
*           format: uuid
*           description: 'Reference to the User document this account belongs to.'
*         accountType:
*           type: string
*           example: 'Checking'
*           description: 'Type of the account (e.g., Checking, Savings).'
*         institution:
*           type: string
*           example: 'Bank of Example'
*           description: 'The financial institution where the account is held.'
*         balance:
*           type: number
*           format: double
*           example: 1000
*           description: 'Current balance of the account.'
*         transactions:
*           type: array
*           items:
*             type: string
*             format: uuid
*             description: 'References to Transaction documents.'
*/

/**
* @swagger
* components:
*   schemas:
*     Budget:
*       type: object
*       example:
*          userId: 66266a84377231fcab399f24
*          category: Groceries
*          limit: 300
*          startDate: January 1 2022
*          endDate: January 31 2022
*       required:
*         - userId
*         - category
*         - limit
*         - startDate
*         - endDate
*       properties:
*         userId:
*           type: string
*           format: uuid
*           description: 'Reference to the User document this budget belongs to.'
*         category:
*           type: string
*           example: 'Groceries'
*           description: 'Category of the budget.'
*         limit:
*           type: number
*           format: double
*           example: 300
*           description: 'The spending limit for this budget category.'
*         startDate:
*           type: string
*           format: date
*           example: '2022-01-01'
*           description: 'Start date of the budget period.'
*         endDate:
*           type: string
*           format: date
*           example: '2022-01-31'
*           description: 'End date of the budget period.'
*/

/**
* @swagger
* components:
*   schemas:
*     SavingsGoal:
*       type: object
*       example:
*          userId: 66266a84377231fcab399f24
*          goal: Buy a new car
*          targetAmount: 20000
*          currentAmount: 3550
*          targetDate: March 5 2021
*       required:
*         - userId
*         - goal
*         - targetAmount
*         - targetDate
*       properties:
*         userId:
*           type: string
*           format: uuid
*           description: 'Reference to the User document this savings goal belongs to.'
*         goal:
*           type: string
*           example: 'New Car'
*           description: 'Description of the savings goal.'
*         targetAmount:
*           type: number
*           format: double
*           example: 20000
*           description: 'The target amount of money needed to achieve the savings goal.'
*         currentAmount:
*           type: number
*           format: double
*           example: 5000
*           description: 'Current amount saved towards the goal.'
*         targetDate:
*           type: string
*           format: date
*           example: '2023-12-31'
*           description: 'The date by which the target amount is expected to be reached.'
*/

/**
* @swagger
* components:
*   schemas:
*     Transaction:
*       type: object
*       example:
*          accountId: 66266a84377231fcab399f28
*          amount: -300.72
*          date: August 23 2020
*          type: Expense
*          category: Phone Bill
*       required:
*         - accountId
*         - amount
*         - type
*         - category
*       properties:
*         accountId:
*           type: string
*           format: uuid
*           description: Reference to the account this transaction belongs to.
*         amount:
*           type: number
*           description: The amount of the transaction.
*         date:
*           type: string
*           format: date-time
*           description: The date of the transaction.
*         type:
*           type: string
*           enum:
*             - Income
*             - Expense
*           description: The type of the transaction, either Income or Expense.
*         category:
*           type: string
*           description: The category of the transaction.
*/

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       example:
 *          username: smithingJohn
 *          name: John Smith
 *          email: jsmith@example.com
 *          password: hashedpasswords
 *       required:
 *         - username
 *         - name
 *         - email
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: Unique username for the user.
 *         name:
 *           type: string
 *           description: Full name of the user.
 *         email:
 *           type: string
 *           format: email
 *           description: Email address of the user.
 *         password:
 *           type: string
 *           format: password
 *           description: Password for the user account, should be kept secure.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the user was created.
 *         accounts:
 *           type: array
 *           description: List of accounts associated with the user.
 *           items:
 *             type: string
 *             format: uuid
 *             description: Unique identifier for an account.
 *         budgets:
 *           type: array
 *           description: List of budgets associated with the user.
 *           items:
 *             type: string
 *             format: uuid
 *             description: Unique identifier for a budget.
 *         savings:
 *           type: array
 *           description: List of savings goals associated with the user.
 *           items:
 *             type: string
 *             format: uuid
 *             description: Unique identifier for a savings goal.
 */