# Telecom Customer Management Backend.

# Commands to get started

# Install Dependencies
npm install

# Start server
node server

# REST APIs to communicate to server.

# GET all customers
http://localhost:5000/api/users/list
Response Example:
[
  {
    name: '...',
    email: '...',
  },
  ...
]

# Create customer
http://localhost:5000/api/users/create
Request Example:
{
  name: 'test',
  dob: '1993/08/19',
  email: 'test@example.com',
  aadhaarNumber: 123456789012
}

# Update customer data
http://localhost:5000/api/users/:id
Request Example:
{
  planId: 1
}

# GET all plans
http://localhost:5000/api/plans/list
Response Example:
[
  {
    name: '...',
    validity: '...',
    ...
  },
  ...
]

# GET specific plan
http://localhost:5000/api/plans/:id
Response Example:
{
  name: '..',
  validity: '..',
  ...
}
