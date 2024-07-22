# NodeJS Part6 with SQL

Welcome to the **NodeJS Part6 with SQL** repository! This repo is designed to provide a comprehensive understanding of integrating MySQL with Node.js. You will learn how to set up a MySQL database, connect to it using the `mysql2` package, and perform CRUD (Create, Read, Update, Delete) operations with routing and HTTP methods.

## Table of Contents

- [Introduction](#introduction)
- [Topics Covered](#topics-covered)
  - [MySQL Integration](#mysql-integration)
  - [Routing and HTTP Methods](#routing-and-http-methods)
    - [GET Method](#get-method)
    - [POST Method](#post-method)
    - [PUT Method](#put-method)
    - [PATCH Method](#patch-method)
    - [DELETE Method](#delete-method)
- [Dependencies](#dependencies)
- [Additional Resources](#additional-resources)
- [Thank You](#thank-you)

## Introduction

In this repository, you will learn how to integrate MySQL with Node.js using the `mysql2` package. You will explore how to create a connection to a MySQL database and perform CRUD operations through various HTTP methods such as GET, POST, PUT, PATCH, and DELETE. For demonstration purposes, these operations will be performed on an array of objects, making it easy to understand without the need for a database. Additionally, we will use the `uuid` package for generating unique identifiers for our objects and the `method-override` package to handle HTTP methods like PUT and DELETE.

## Topics Covered

### MySQL Integration

- **Installing `mysql2` Package**: Learn how to install and use the `mysql2` package to interact with a MySQL database from a Node.js application.
- **Creating a Database Connection**: Understand how to establish a connection to your MySQL database and manage it within your application.

### Routing and HTTP Methods

Learn how to implement CRUD operations using various HTTP methods, and how to map these operations to SQL queries to interact with your MySQL database.

#### GET Method

- **Description**: Retrieve data from the server.
- **Use Case**: Fetching data from the MySQL database using SELECT queries.

#### POST Method

- **Description**: Send data to the server to create a new resource.
- **Use Case**: Adding new records to the MySQL database using INSERT queries.

#### PUT Method

- **Description**: Update an existing resource on the server.
- **Use Case**: Updating existing records in the MySQL database using UPDATE queries.

#### PATCH Method

- **Description**: Partially update an existing resource on the server.
- **Use Case**: Modifying specific fields of records in the MySQL database using UPDATE queries with specific fields.

#### DELETE Method

- **Description**: Remove a resource from the server.
- **Use Case**: Deleting records from the MySQL database using DELETE queries.

## Dependencies

This project uses the following npm packages:

- **mysql2**: For connecting and interacting with a MySQL database.
- **@faker-js/faker**: For generating fake data to populate the database.
- **method-override**: To support HTTP methods like PUT and DELETE in forms and other requests where the client doesn't support these methods natively.
- **uuid**: For generating unique identifiers for objects.

## Additional Resources

If you want to learn SQL commands, follow this repository: [Learning-SQL](https://github.com/sanket-aher/Learning-SQL)

## Thank You

Thank you for exploring the **NodeJS Part6 with SQL** repository. We hope this repository helps you gain a deeper understanding of integrating MySQL with Node.js and performing CRUD operations using SQL queries. Happy coding!