# Ecommerece

# E-Commerce App

## Overview

An e-commerce application built with TypeScript, Node.js, Express, and PostgreSQL. The application supports product management, variant handling, and basic CRUD operations.

## Features

- Product management
- Inventory management
- RESTful API
- TypeORM for database interactions

## Technologies

- Node.js
- TypeScript
- Express
- PostgreSQL
- TypeORM

## Getting Started

### Prerequisites

- Node.js and npm
- PostgreSQL

### Installation

1. **Clone the repository:**

   ```bash
   git clone (https://github.com/giselaz/Ecommerece.git)
   cd ecommerce
2. Install dependencies
npm install

3. Start the application:

npm run dev

API ENDPOINTS

GET /products: Retrieve a list of products
GET /products/:sku: Retrieve a specific product by SKU code
POST /products: Create a new product
PUT /products/:sku: Update a product by SKU code

Example Requests
Here are some example requests to interact with the API using curl:

curl http://localhost:3000/products
curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d '{"name": "T-Shirt", "description": "A nice T-Shirt"}'
