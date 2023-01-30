# API Endpoints

This API has the following endpoints:

## Auth Endpoints

- **POST** `/register`: This endpoint is used to register a new user. It requires the following parameters in the request body: `email`, `password`, `name`.
- **POST** `/login`: This endpoint is used to login a user. It requires the following parameters in the request body: `email`, `password`.

## Movies Endpoints

- **GET** `/`: This endpoint is used to get all movies.
- **GET** `/:id`: This endpoint is used to get a movie by id.

## Rented Movies Endpoints

- **PATCH** `/users/:userId/rent`: This endpoint is used to update rented movies.
- **POST** `/users/:userId/delete/:movieId`: This endpoint is used to delete a rented movie by id.


## User Endpoints

- **GET** `/`: This endpoint is used to get all users. Only superadmin users can access this endpoint.
- **GET** `/users/:name`: This endpoint is used to get a user by name.
- **POST** `/delete/:id`: This endpoint is used to delete a user by id.
