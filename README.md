# TypeScript Expense Tracker

A command-line expense tracking application built with **TypeScript** and **Node.js**.

This project was created to strengthen practical TypeScript skills by implementing type-safe data structures, interfaces, classes, modules, and basic expense management functionality.

The application demonstrates a structured approach to building maintainable JavaScript applications using TypeScript.

---

## Features

- Add expenses
- View all expenses
- Calculate total spending
- Organize expenses by category
- Track expense dates
- Maintain type-safe expense records
- Manage expense data using reusable classes and modules

---

## Technologies Used

- TypeScript
- Node.js
- npm
- Git & GitHub

---

## Project Architecture

The project follows a TypeScript compilation workflow:

TypeScript Source Code

↓

TypeScript Compiler

↓

JavaScript Output (dist/)

↓

Node.js Runtime

Source files are written in TypeScript and compiled into JavaScript before execution.

---

## Installation

### Clone the repository

git clone https://github.com/JessicaComfortGrant/Typescript_Expense_Tracker.git

### Navigate into the project directory

cd Typescript_Expense_Tracker

### Install dependencies

npm install

---

## Running the Project

### Compile TypeScript

npm run build

This compiles TypeScript files from the src directory into JavaScript files inside the dist directory.

### Start the application

npm start

---

## Example Output

Expenses:

[
  {
    id: 1,
    title: 'Transport',
    amount: 21,
    category: 'Travel',
    date: '2026-07-16'
  },
  {
    id: 2,
    title: 'Lunch',
    amount: 20,
    category: 'Food',
    date: '2026-07-16'
  }
]

Total Spent:

GH₵ 41

---

## Project Structure

Typescript_Expense_Tracker/

├── src/

│   ├── index.ts

│   ├── expense.ts

│   └── tracker.ts

│

├── dist/

│   ├── index.js

│   ├── expense.js

│   └── tracker.js

│

├── package.json

├── package-lock.json

├── tsconfig.json

├── .gitignore

└── README.md

---

## TypeScript Concepts Practiced

This project explores and applies:

- TypeScript interfaces
- Type annotations
- Type-only imports
- Classes and object-oriented programming
- Modules and exports/imports
- Arrays and objects
- Functions and return types
- Static type checking
- Compilation from TypeScript to JavaScript

---

## Development Workflow

The project follows a simple development workflow:

1. Write TypeScript source code inside the src directory
2. Compile TypeScript into JavaScript
3. Execute the compiled application using Node.js

Commands:

npm run build

npm start

The dist directory contains generated JavaScript files and is excluded from version control.

---

## Future Improvements

### Application Features

- Add terminal-based user input
- Add expense deletion
- Add expense editing
- Add expense filtering by category
- Add monthly expense summaries
- Add budget tracking

### Data Management

- Store expenses in JSON files
- Integrate a database
- Add data persistence

### Advanced Development

- Build a REST API
- Create a web interface using React/Next.js
- Add authentication
- Add data visualization and financial analytics
- Add automated testing

---

## Learning Goals

This project is part of my journey toward becoming a stronger software and data professional by combining:

- Programming fundamentals
- Data management
- Software engineering practices
- Type-safe application development

---

## Author

Jessica Comfort Grant

GitHub:
https://github.com/JessicaComfortGrant

---

Built as a learning project while exploring TypeScript, Node.js, and modern JavaScript development practices.
