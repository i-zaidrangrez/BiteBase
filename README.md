# Food Ordering & Restaurant Management Platform

This project is a full-stack web application designed for a restaurant or food business that wants to offer a smooth digital experience for customers and administrators. It combines a modern customer-facing interface with an admin dashboard for managing menu items, restaurant operations, and user access.

## Overview

The platform allows users to:
- Browse the restaurant menu and food categories
- Register and log in securely
- Add items to a cart and manage selections
- Access role-based features for customers and admins
- Use an admin dashboard for restaurant management tasks

This project is ideal for businesses that want to modernize ordering and menu management with a simple and attractive web experience.

## Key Features

### Customer Experience
- Welcome and authentication pages
- Responsive home page with featured food categories
- Menu browsing experience
- Shopping cart flow
- Protected routes for authenticated users

### Admin Experience
- Dashboard overview
- Menu management support
- Role-based access control
- Restaurant-related data handling through the backend APIs

## Tech Stack

### Frontend
- React
- Vite
- React Router
- Redux Toolkit
- Tailwind CSS
- Recharts

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Cloudinary for image uploads
- Multer for file handling

## Project Structure

- Client: frontend application
- Server: backend API and database integration

## Getting Started

### Prerequisites
- Node.js installed on your machine
- npm or yarn
- MongoDB running locally or a cloud MongoDB connection

### Installation

1. Clone the repository
2. Install frontend dependencies:
   ```bash
   cd Client
   npm install
   ```
3. Install backend dependencies:
   ```bash
   cd ../Server
   npm install
   ```
4. Start the frontend:
   ```bash
   cd ../Client
   npm run dev
   ```
5. Start the backend:
   ```bash
   cd ../Server
   node server.js
   ```

### Environment Variables

Create a `.env` file in the Server folder and configure values such as:
- MongoDB connection string
- JWT secret
- Cloudinary credentials
- Other required API settings

## How the App Works

1. Users visit the website and can view the home and menu sections.
2. Customers can create an account or log in to access protected features.
3. The cart and menu systems are managed through the backend APIs.
4. Admin users can access the dashboard to manage restaurant content and operations.

## Future Improvements

Possible enhancements include:
- Online food ordering and checkout flow
- Payment gateway integration
- Order tracking
- Order history and notifications
- Advanced admin analytics and inventory tools

## License

This project is for educational and development purposes.
