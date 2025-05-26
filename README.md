# Shoes E-commerce Application with Authentication

This full-stack application demonstrates a complete shoes e-commerce platform with robust authentication and authorization processes. Built with React, TypeScript, and Tanstack Query for the frontend, and Node.js with Express for the backend.

## Overview

This project showcases a modern web application architecture implementing best practices for both frontend and backend development. The application features comprehensive authentication flows, role-based access control, and efficient data fetching with Tanstack Query.

## Features

- User authentication (register, login, logout)
- Role-based authorization (user/admin roles)
- JWT-based token authentication with refresh tokens
- Protected routes based on user roles
- CRUD operations for shoes inventory
- Admin dashboard for product management
- Responsive UI design with Tailwind CSS
- Form validation with Formik and Yup
- Toast notifications for user feedback

## ScreenShot

## Frontend

The client application is built with:

- **React 19** with TypeScript
- **Tanstack Query** for efficient server state management and data fetching
- **React Router v7** for navigation and route protection
- **Formik & Yup** for form handling and validation
- **Tailwind CSS** for styling
- **Axios** for API communication
- **React Toastify** for notifications

Key features of the frontend:

- Component-based architecture
- Custom hooks for authentication and data fetching
- Protected routes based on user roles
- Responsive design
- Type safety with TypeScript

## Backend

The API is built with:

- **Node.js** and **Express**
- **MongoDB** for data storage
- **JWT** for authentication
- **bcrypt** for password hashing
- **Cookie-based** refresh token management
- **Express-validator** for request validation

Key features of the backend:

- RESTful API architecture
- Middleware for authentication and authorization
- Secure password handling
- HTTP-only cookies for refresh tokens
- Error handling middleware

## Authentication & Authorization

The application implements a comprehensive authentication system:

1. **Registration**: Users can create an account with email and password
2. **Login**: Users receive access and refresh tokens upon successful login
3. **Token Management**:
   - Access tokens (short-lived) for API requests
   - Refresh tokens (long-lived) stored in HTTP-only cookies
4. **Protected Routes**:
   - Frontend routes are protected using React Router
   - Backend routes are protected using middleware
5. **Role-based Access**:
   - Regular users can browse and view products
   - Admin users have additional access to the dashboard for managing products

### Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas)

## Contact

For any questions or inquiries, please contact: fratsbht@icloud.com
# FullStack-Ts-TanstackQuery-Shoes-App
