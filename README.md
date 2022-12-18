This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Product Inventory App
Product Inventory is an app to manage inventory of products organized by categories, and contains the following features:
- list of all categories available
- list of products from each category
- stock amount management
- register new products

## Installation
- Download and Install [Git](http://git-scm.com);
- Download and Install [NodeJS](http://nodejs.org) (_this app have been developed using node v16.15.1_);
- Clone the project

### Yarn

In this project, yarn have been used to manage the packages

## Running
To install the project dependencies, run the following command:
```sh
yarn install
yarn start
```

## Technologies

### Packages

- [React](https://github.com/facebook/react)
- [React Router Dom](https://reactrouter.com/web/guides/quick-start)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [Jest](https://jestjs.io)
- [Testing Library](https://testing-library.com)
- [Yup](https://github.com/jquense/yup)
- [React Hook Form](https://react-hook-form.com/)
- [Apollo Client](https://www.apollographql.com/docs/react/)

## Folder Structure
- public -> Static files as index.html, favicon, etc.
- src -> Folder that contains all code
    - components -> General components
    - graphql -> All files related to graphql queries and mutations
    - hooks -> All hooks used on diferent parts of the app
    - modules -> Components related by context
      - components -> All components directly related to that module
      - constants -> All constatns directly related to that module
      - types -> All types related to that module
    - routes -> The routes used by the app
    - pages -> Pages that the app content are distributed

## URLs

### Local

http://localhost:3001



