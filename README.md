# MERN Stack User Registration and Login System

This is a user registration and login system built using the MERN stack (MongoDB, Express, React, Node.js). The project allows users to register, log in, and authenticate using JWT (JSON Web Tokens). It provides secure user authentication and stores user data in MongoDB.

## Features

- **User Registration**: New users can sign up by providing their name, email, and password.
- **User Login**: Registered users can log in using their email and password.
- **JWT Authentication**: JSON Web Tokens are used for secure user authentication.
- **Password Hashing**: Passwords are securely hashed using bcryptjs to prevent storing plain text passwords.
- **Error Handling**: Comprehensive error handling for user input validation and authentication processes.

## Technologies Used

- **Frontend**:
  - React
  - React Router
  - Axios

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - JWT (JSON Web Tokens)
  - bcryptjs
  - dotenv

## Setup

### Prerequisites

- Node.js and npm installed
- MongoDB database (local or cloud)

### Installation

1. Clone the repository:https://github.com/alperenbizel/MERN-Auth/
2.cd mern-auth
3.cd backend
npm install
4.cd ../frontend
npm install
5.cd backend
npm start
6.cd frontend
npm start
8.8. Access the application in your browser at `http://localhost:3000`.

## Usage

- Register a new user by providing your name, email, and password.
- Log in using your registered email and password.
- After successful login, you'll receive a JWT token that can be used for further authenticated requests.

## Contributing

Feel free to fork this repository and submit pull requests. Contributions are welcome!
