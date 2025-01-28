# User Management ReactJS Project

## What is the use of this Repo

This project is a simple **User Management** application built with **ReactJS** and **Vite**. It demonstrates the following:

1. Creating React components with functional components and hooks (`useState`, `useEffect`).
2. Making HTTP API calls to fetch, add, update, and delete user data.
3. Communicating between parent and child components.
4. Using a form for adding and editing user information.
5. Styling the application using **Tailwind CSS**.
6. Managing the list of users and their details.

This template can be extended to build more complex applications with similar user management functionalities.

## Live Application URL

[Live Application](https://your-live-url-here)

Click the link above to view the deployed application.

## Prerequisites

### Install Node.js

Make sure you have **Node.js** installed on your system. You can download and install it from [nodejs.org](https://nodejs.org/en/).

### Install Vite

Install Vite globally to easily create and run React projects. You can install it by running the following command:

```bash
npm install -g create-vite
```

## Getting Started

### Cloning the Repository

To clone this project to your local machine, use the following command:

```bash
git clone https://github.com/your-username/user-management-reactjs.git
```

## Installing Dependencies

Navigate into the project directory and install the required dependencies by running:

```bash
npm install
```

### Running the Application Locally

Once the dependencies are installed, you can start the development server by running:

```bash
npm run dev
```

The application will be running at http://localhost:5173.

## Application Design

### Components

**App**: The main component that handles the logic for adding, editing, and deleting users. It fetches user data and passes it to the child components.

**UserForm**: A form used to add or edit user details. It takes in the user data as props for editing and handles form submissions for both adding and editing.

**UserList**: Displays the list of users with actions for editing and deleting each user.

**UserItem**: Displays a single user's details and includes buttons to edit or delete the user.

## API Functions

The following API functions are used to interact with the backend or mock API:

**fetchUsers()**: Fetches the list of users from an API.

**addUser(userData)**: Adds a new user.

**updateUser(userId, updatedData)**: Updates the user with the specified ID.

**deleteUser(userId)**: Deletes the user with the specified ID.

## Styling

This application uses **Tailwind CSS** for styling. You can modify the design and layout by adjusting the Tailwind classes in the JSX files.

## Project Structure

/src

/api

userApi.js // Functions for making API calls to manage users

/components

UserForm.jsx // Form component for adding/editing users

UserList.jsx // List component for displaying users

UserItem.jsx // Component for displaying a single user's data

App.jsx // Main component that manages the app state and UI

## Resources

[Vite Documentation](https://vite.dev/guide/why)
[ReactJS Documentation](https://react.dev/reference/react)
[Tailwind CSS Documentation](https://tailwindcss.com/docs/installation/using-vite)
