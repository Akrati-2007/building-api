# Building REST API with Node.js & Express

A simple REST API built from scratch using **Node.js** and **Express**.

## Features

- Built with Node.js and Express
- GET endpoint
- POST endpoint
- Route parameters
- JSON request body
- Middleware using `express.json()`
- Input validation
- Proper HTTP status codes

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/building-api.git
```

Install dependencies:

```bash
npm install
```

Run the server:

```bash
node index.js
```

The server starts at:

```
http://localhost:8080
```

## API Endpoints

### GET `/tshirt`

Returns a sample t-shirt.

Example Response:

```json
{
  "tshirt": "👕",
  "size": "small"
}
```

---

### POST `/tshirt/:id`

Creates a customized t-shirt.

Example Request:

```http
POST /tshirt/123
Content-Type: application/json
```

Request Body:

```json
{
  "logo": "Nike"
}
```

Example Response:

```json
{
  "tshirt": "👕 with your Nike and ID of 123"
}
```

If `logo` is missing:

```json
{
  "message": "We need a logo!"
}
```

Status Code:

```
400 Bad Request
```

## Tech Stack

- Node.js
- Express.js
- REST API
- JavaScript