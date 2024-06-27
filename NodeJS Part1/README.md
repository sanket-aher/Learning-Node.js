# NodeJS Part1

Welcome to the **NodeJS Part1** repository! This repo is designed to provide a foundational understanding of Node.js, covering essential topics such as the Node REPL, process object, modules, npm packages, and more.

## Table of Contents

- [Introduction](#introduction)
- [What is Node.js?](#what-is-nodejs)
- [Node REPL](#node-repl)
- [Process Object](#process-object)
- [process.argv](#processargv)
- [module.exports and require](#moduleexports-and-require)
- [import](#import)
- [npm Package](#npm-package)
- [Installing npm Packages](#installing-npm-packages)
- [Difference between require and import](#difference-between-require-and-import)
- [Thank You](#thank-you)

## Introduction

This repository serves as an introduction to Node.js and covers the fundamental concepts and components required to build Node.js applications.

## What is Node.js?

Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It is used for building scalable network applications and server-side tools.

## Node REPL

REPL stands for Read-Eval-Print Loop. It is a simple, interactive computer programming environment that takes single user inputs, evaluates them, and returns the result to the user. To start the Node REPL, simply type `node` in your terminal.

## Process Object

The `process` object in Node.js is a global object that provides information about the current Node.js process. It can be accessed from anywhere and provides many useful methods and properties.

## process.argv

The `process.argv` property is an array containing the command-line arguments passed when the Node.js process was launched. The first element is the process execution path, and the second element is the path to the JavaScript file being executed.

## module.exports and require

Node.js uses the CommonJS module system. The `module.exports` object is used to expose functions or variables to other modules. The `require` function is used to import these modules.

## import

Node.js also supports the ES6 `import` syntax, which is part of the ECMAScript 2015 (ES6) standard. This allows for importing modules in a more standardized way.

## npm Package

npm (Node Package Manager) is the default package manager for Node.js. It allows you to install and manage packages that you can use in your applications.

## Installing npm Packages

To install npm packages, you can use the `npm install` command followed by the package name.

## Difference between require and import

- **require**: CommonJS syntax, used in Node.js for module loading. Synchronous and can be used anywhere in the code.
- **import**: ES6 syntax, part of the ECMAScript 2015 (ES6) standard. Asynchronous and must be used at the beginning of the file.

## Thank You

Thank you for exploring the **NodeJS Part1** repository. Happy coding!