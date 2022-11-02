# rtb-server

## Description

Backend part of the project rtb-chart. This project features data fetching from a persistence layer and renders a table with the fetched data. It also features filters and pagination; the pagination being cursor pagination done by the back-end.

## Table of Contents

* [Description](#description)
* [Table of Contents](#table-of-contents)
  * [Installation](#installation)
    * [Zip File](#zip-file)
    * [Git Repository](#git-repository)
  * [Technologies](#technologies)
  * [Features](#features)
  * [Documentation](#documentation)
  * [Observations](#observations)
  * [Author](#author)
  * [License](#license)

## Installation

### Zip File

#### Requirements before installation

##### Tested and developed using Node version 18.12.0

```bash
# Install dependencies
npm install

# or
yarn
```

to run project in development mode

```bash
npm run dev

# or
yarn dev

# will be running on port: 3333 - access: <http://localhost:3333>
```

### Git Repository

```bash
# clone this repository with ssh:
git clone <git@github.com:Isadora-Costa/rtb-chart-backend.git>

# or clone this repository with url:
git clone <https://github.com/Isadora-Costa/rtb-chart-backend.git>

# Access the project folder in the terminal path/folder
cd rtb-chart-backend

# Install dependencies
npm install

# or
yarn
```

to run project in development mode

```bash
npm run dev

# or
yarn dev

# will be running on port: 3333 - access: <http://localhost:3333>
```

## Technologies

### The following technologies were used in the making of this project

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/pt-br/)
* [TypeScript](https://www.typescriptlang.org/)
* [Swagger](https://swagger.io/)
* [SQLite](https://www.sqlite.org/index.html)
* [TypeORM](https://typeorm.io/)
* [Dependency Injection](https://www.npmjs.com/package/tsyringe?activeTab=readme)
* [Logger | Pino](https://www.npmjs.com/package/pino)

## Documentation

### Swagger API Documentation

```bash
npm run dev

# or 
yarn dev

# will be running on port: 3333 - access: <http://localhost:3333/docs>
```

## Observations

Database file already populated. File location src/database/datafile.
A backup file will be available with zip package.
If necessary for testing to generate an empty database, enable entity and datasource syncs and erase datafile.

## Features

* [TypeORM cursor pagination (infinite-scroll).](#technologies)
* [Swagger Open API documentation.](#documentation)
* [Filters using TypeORM Query Runner.](#technologies)

## Author

![avatar](https://avatars.githubusercontent.com/u/99675777?v=2)

Made with ❤️ by Isadora Costa | Contact me!

[![Linkedin Badge](https://img.shields.io/badge/-Isadora-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/isadora-costa-97354a244/)
[![Gmail Badge](https://img.shields.io/badge/-isadorafreire@protonmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:tgmarinho@gmail.com)](mailto:tgmarinho@gmail.com)

## License

Unlicensed