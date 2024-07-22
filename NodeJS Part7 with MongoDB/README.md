# NodeJS Part7 with MongoDB

Welcome to the **NodeJS Part7 with MongoDB** repository! This repo is designed to provide a comprehensive understanding of integrating MongoDB with Node.js using Mongoose. You will learn how to set up a MongoDB connection, perform CRUD (Create, Read, Update, Delete) operations using Mongoose methods, and handle routing with HTTP methods.

## Table of Contents

- [Introduction](#introduction)
- [Topics Covered](#topics-covered)
  - [MongoDB Integration](#mongodb-integration)
  - [Routing and HTTP Methods](#routing-and-http-methods)
    - [GET Method](#get-method)
    - [POST Method](#post-method)
    - [PUT Method](#put-method)
    - [DELETE Method](#delete-method)
- [Dependencies](#dependencies)
- [Additional Resources](#additional-resources)
- [Thank You](#thank-you)

## Introduction

In this repository, you will learn how to integrate MongoDB with Node.js using the `mongoose` package. You will explore how to create a connection to a MongoDB database and perform CRUD operations through various HTTP methods such as GET, POST, PUT, and DELETE. By the end of this part, you will be able to set up and interact with a MongoDB database from a Node.js application using Mongoose.

## Topics Covered

### MongoDB Integration

- **Installing `mongoose` Package**: Learn how to install and use the `mongoose` package to interact with a MongoDB database from a Node.js application.
- **Creating a Database Connection**: Understand how to establish a connection to your MongoDB database using `mongoose.connect` and manage it within your application.

### Routing and HTTP Methods

Learn how to implement CRUD operations using various HTTP methods, and how to map these operations to Mongoose methods to interact with your MongoDB database.

#### GET Method

- **Description**: Retrieve data from the server.
- **Use Case**: Fetching data from the MongoDB database using `find` and `findById` methods.

#### POST Method

- **Description**: Send data to the server to create a new resource.
- **Use Case**: Adding new records to the MongoDB database using the `save` method.

#### PUT Method

- **Description**: Update an existing resource on the server.
- **Use Case**: Updating existing records in the MongoDB database using `findByIdAndUpdate` method.

#### DELETE Method

- **Description**: Remove a resource from the server.
- **Use Case**: Deleting records from the MongoDB database using `findByIdAndDelete` method.

### MongoDB Operations with Different Routes

- **Find**: Retrieve a list of documents from the database.
- **findById**: Retrieve a single document by its ID.
- **findByIdAndUpdate**: Update a document by its ID.
- **findByIdAndDelete**: Delete a document by its ID.
- **Save**: Insert a new document into the database.

## Dependencies

This project uses the following npm packages:

- **mongoose**: For connecting and interacting with a MongoDB database.
- **express**: For building the web server and handling routes.
- **method-override**: To support HTTP methods like PUT and DELETE in forms and other requests where the client doesn't support these methods natively.

## Additional Resources

If you want to learn MongoDB commands, follow this repository: [Learning-MongoDB](https://github.com/sanket-aher/Learning-MongoDB)

## Thank You

Thank you for exploring the **NodeJS Part7 with MongoDB** repository. We hope this repository helps you gain a deeper understanding of integrating MongoDB with Node.js and performing CRUD operations using Mongoose methods. Happy coding!