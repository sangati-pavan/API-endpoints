# Product Total Value API

This is a simple Node.js and Express API that calculates the total value of a list of product objects. Each product has a `name`, `price`, and `quantity`. You can send a list of products to the API, which will return the total value by multiplying the `price` and `quantity` of each product.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Example Requests](#example-requests)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/product-total-value-api.git
   cd product-total-value-api
   
2. Install dependencies:
    npm install
   
4. Run the server:
    node server.js
  The server will start on http://localhost:3000.

Usage :
This API accepts JSON data with a list of products and returns the total value of all products. Ensure that each product object includes name, price, and quantity fields.

Endpoints
1. /api/total-value - Calculate Total Value of Products
  Method: POST
  Description: Calculates and returns the total value of all products in the provided list.
Request Body:

    {
      "products": [
        { "name": "Product1", "price": 10.5, "quantity": 3 },
        { "name": "Product2", "price": 20, "quantity": 2 }
      ]
    }
   
Response:

    {
      "totalValue": 115
    }
    
2. /api/add-products (Optional) - Add Products to Database
  Method: POST
  Description: Adds products to an in-memory SQLite database.
Request Body:

    {
      "products": [
        { "name": "Product1", "price": 10.5, "quantity": 3 },
        { "name": "Product2", "price": 20, "quantity": 2 }
      ]
    }
   
Response:

    {
      "message": "Products added successfully"
    }

Example Requests :

To calculate the total value, send a POST request to http://localhost:3000/api/total-value with a JSON body containing your list of products.

    {
      "products": [
        { "name": "Product1", "price": 10.5, "quantity": 3 },
        { "name": "Product2", "price": 20, "quantity": 2 },
        { "name": "Product3", "price": 5, "quantity": 10 }
      ]
    }
    
Expected response:

    {
      "totalValue": 115
    }
    
Technologies Used :

Node.js: JavaScript runtime for building scalable server-side applications.
Express.js: Web framework for Node.js for building APIs quickly.
SQLite3: In-memory database used for storing products (optional).
