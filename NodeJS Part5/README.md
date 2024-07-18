# NodeJS Part5

Welcome to the **NodeJS Part5** repository! This repo is designed to provide a comprehensive understanding of building REST APIs with Node.js. You will learn about RESTful principles and how to implement simple CRUD (Create, Read, Update, Delete) operations using HTTP methods, with examples using an array of objects instead of a database. Additionally, we will use the `uuid` package for unique identifiers and the `method-override` package to support PUT and DELETE methods.

## Table of Contents

- [Introduction](#introduction)
- [Topics Covered](#topics-covered)
  - [REST API](#rest-api)
  - [CRUD Operations](#crud-operations)
    - [GET Method](#get-method)
    - [POST Method](#post-method)
    - [PUT Method](#put-method)
    - [PATCH Method](#patch-method)
    - [DELETE Method](#delete-method)
- [Dependencies](#dependencies)
- [Thank You](#thank-you)

## Introduction

In this repository, you will learn how to build and manage REST APIs using Node.js. You will explore the principles of RESTful architecture and implement simple CRUD operations with HTTP methods such as GET, POST, PUT, PATCH, and DELETE. For demonstration purposes, these operations will be performed on an array of objects, making it easy to understand without the need for a database. Additionally, we will use the `uuid` package for generating unique identifiers for our objects and the `method-override` package to handle HTTP methods like PUT and DELETE.

## Topics Covered

### REST API

Understand the concept of REST (Representational State Transfer) and how it is used to create web services that interact with clients in a stateless manner. Learn about the principles of RESTful architecture and how to design APIs that follow these principles.

### CRUD Operations

Learn how to implement CRUD operations in a REST API using various HTTP methods. Each operation corresponds to a specific HTTP method, enabling you to interact with the resources efficiently. In these examples, we'll use an array of objects to simulate a database, `uuid` for unique identifiers, and `method-override` to support PUT and DELETE methods.

#### GET Method

- **Description**: Retrieve data from the server.
- **Use Case**: Fetching a list of resources or a single resource from an array of objects.

#### POST Method

- **Description**: Send data to the server to create a new resource.
- **Use Case**: Adding a new object to the array, with a unique identifier generated using `uuid`.

#### PUT Method

- **Description**: Update an existing resource on the server.
- **Use Case**: Replacing an object in the array with new data. Handled using `method-override` to support the PUT method.

#### PATCH Method

- **Description**: Partially update an existing resource on the server.
- **Use Case**: Modifying specific fields of an object in the array without affecting the entire object. Handled using `method-override` to support the PATCH method.

#### DELETE Method

- **Description**: Remove a resource from the server.
- **Use Case**: Deleting an object from the array. Handled using `method-override` to support the DELETE method.

## Dependencies

This project uses the following npm packages:

- **uuid**: For generating unique identifiers for objects.
- **method-override**: To support HTTP methods like PUT and DELETE in forms and other requests where the client doesn't support these methods natively.

## Thank You

Thank you for exploring the NodeJS Part5 repository. We hope this repository helps you gain a deeper understanding of building REST APIs and implementing CRUD operations with Node.js. Happy coding!

