# EconoMe - Backend

EconoMe is a personal finance management application designed to help users track their income, expenses, and manage their budgets efficiently. This repository contains the backend code for EconoMe, built with Node.js, Express, and MongoDB.

### Features
- User Authentication
- Income and Expense Tracking
- Budget Management
- Financial Reports and Analytics

### Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens)
- API Documentation: Swagger

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository

```bash
git clone https://github.com/TioMeko/EconoMe.git
cd EconoMe
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables:

Create a .env file in the root directory and add the following variables:

```env
PORT=your_desired_port
URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Start the server:

```bash
npm start
```

*The server will start on http://localhost:4000 unless specified in .env*

## API Documentation
API documentation is available via Swagger. Once the server is running, navigate to http://localhost:4000/api-docs to view and interact with the API endpoints.

*NOTE: The port will be different if changed in .env*

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License.