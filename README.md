This API is built with Express and uses MongoDB as the database. It provides functionality for user authentication, movie listings, and movie rentals.

### Prerequisites

- [Node.js](https://nodejs.org/): ^12.0.0


<hr>

### Installing

Install packages npm:


```
npm install
```
## 🎈 Usage <a name="usage"></a>

Start the dev server with this command:

```
npm run dev
```

Run http://localhost:3000/ in your borwser to do the tests.
<br>

Start the production server with this command:

```
npm start
```

# API Endpoints

This API has the following endpoints:

## Auth Endpoints

- **POST** `/auth/register`: This endpoint is used to register a new user. It requires the following parameters in the request body: `email`, `password`, `name`.
- **POST** `/auth/login`: This endpoint is used to login a user. It requires the following parameters in the request body: `email`, `password`.

## Movies Endpoints

- **GET** `/movie`: This endpoint is used to get all movies.
- **GET** `/movie/:id`: This endpoint is used to get a movie by id.

## Rented Movies Endpoints

- **PATCH** `/users/users/:userId/rent`: This endpoint is used to update rented movies.
- **PATCH** `/users/users/:userId/delete/:movieId`: This endpoint is used to delete a rented movie by id.


## User Endpoints

- **GET** `/users`: This endpoint is used to get all users. Only superadmin users can access this endpoint.
- **GET** `/users/users/:name`: This endpoint is used to get a user by name.
- **POST** `/users/delete/:id`: This endpoint is used to delete a user by id.
