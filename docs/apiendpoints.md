# API Endpoints

## Auth Routes

**/auth/reigster/**

- Request Verb: POST
- Function: Creates a new Member document in the database
- Required Arguments: N/A
- Authentication: N/A
- Authorization: N/A
- Example Request:

```json
{
    "username": "NewTestUser",
    "password": "Admin123!"
}
```

- Example Response:

```json
{
    "id": "63d3875876174e866cf4548f",
    "username": "NewTestUser",
}
```

**/auth/login/**

- Request Verb: POST
- Function: Takes an existing Member's credentials and returns a bearer token if credentials match against those in the database
- Required Arguments: N/A
- Authentication: N/A
- Authorization: N/A
- Example Request:

```json
{
    "username": "NewTestUser",
    "password": "Admin123!"
}
```

- Example Response:

```json
{
    "id": "63d3875876174e866cf4548f",
    "username": "NewTestUser",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDM4NzU4NzYxNzRlODY2Y2Y0NTQ4ZiIsImlhdCI6MTY3NDgwNzE5N30.Aav6txz-tYhTKVsR36DMYeKRhZDtNHLgMkdCYxVtxK4"
}
```

## Comment Routes

**/comments/new/**

- Request Verb: POST
- Function: Creates a new Comment document in the database
- Required Arguments: N/A
- Authentication: JWT
- Authorization: N/A
- Example Request:

```json
{
    "post": "63d862a0fcebb9c399900e01",
    "content": "Test comment"
}
```

- Example Response:

```json
{
    "post": "63d862a0fcebb9c399900e01",
    "author": {
        "_id": "63d8aee005c5dff71adb3642",
        "username": "NewTestUser3"
    },
    "content": "Test comment",
    "_id": "63d8b019c78b2300c30d9dd9",
    "date_posted": "2023-01-31T06:07:21.291Z",
    "__v": 0
}
```

**/comments/:id/**

- Request Verb: PUT
- Function: Updates an existing Comment document in the database
- Required Arguments: id (Mongo Object Id reference for Comment)
- Authentication: JWT
- Authorization: N/A
- Example Request:

```json
{
    "content": "changing comment"
}
```

- Example Response:

```json
{
    "_id": "63d8b019c78b2300c30d9dd9",
    "post": "63d862a0fcebb9c399900e01",
    "author": {
        "_id": "63d8aee005c5dff71adb3642",
        "username": "NewTestUser3"
    },
    "content": "changing comment",
    "date_posted": "2023-01-31T06:07:21.291Z",
    "__v": 0
}
```

**/comments/:id/**

- Request Verb: DELETE
- Function: Deletes an existing Comment document from the database
- Required Arguments: id (Mongo Object Id reference for Comment)
- Authentication: JWT
- Authorization: N/A
- Example Request: N/A
- Example Response: N/A

## Member Routes

**/members/:id/**

- Request Verb: GET
- Function: Retrieves a single Member from the database
- Required Arguments: id (Mongo Object Id reference for Member)
- Authentication: N/A
- Authorization: N/A
- Example Request: N/A
- Example Response:

```json
{
    "_id": "63d3875876174e866cf4548f",
    "username": "NewTestUser",
    "joined_date": "2023-01-27T08:11:51.356Z"
}
```

## Post Routes

**/posts/**

- Request Verb: GET
- Function: Retrieves all Posts from the database
- Required Arguments: N/A
- Authentication: N/A
- Authorization: N/A
- Example Request: N/A
- Example Response:

```json
[
    {
        "_id": "63d38ace76174e866cf45494",
        "title": "New Test Post 3",
        "author": {
            "_id": "63d3875876174e866cf4548f",
            "username": "NewTestUser"
        },
        "date_posted": "2023-01-27T08:11:51.352Z",
        "category": "North America",
        "content": "A cool story would go here",
        "comments": [],
        "__v": 0
    },
    {
        "_id": "63d38af076174e866cf45497",
        "title": "New Test Post 2",
        "author": {
            "_id": "63d37e827258d1092a616c57",
            "username": "Callum"
        },
        "date_posted": "2023-01-27T08:11:51.352Z",
        "category": "Asia",
        "content": "Content content content and more content",
        "comments": [],
        "__v": 0
    },
    {
        "_id": "63d38b1b76174e866cf4549a",
        "title": "New Test Post 1",
        "author": {
            "_id": "63d37e827258d1092a616c58",
            "username": "Mario"
        },
        "date_posted": "2023-01-27T08:11:51.352Z",
        "category": "Asia",
        "content": "Really cool content about travelling",
        "comments": [
            {
                "_id": "63d38b5076174e866cf4549d",
                "post": "63d38b1b76174e866cf4549a",
                "author": {
                    "_id": "63d3875876174e866cf4548f",
                    "username": "NewTestUser"
                },
                "date_posted": "2023-01-27T08:11:51.346Z",
                "content": "and a comment to go on the post",
                "__v": 0
            }
        ],
        "__v": 0
    }
]
```

**/posts/:id/**

- Request Verb: GET
- Function: Retrieves a single Post from the database
- Required Arguments: id (Mongo Object Id reference for Post)
- Authentication: N/A
- Authorization: N/A
- Example Request: N/A
- Example Response:

```json
{
    "_id": "63d38ace76174e866cf45494",
    "title": "New Test Post 3",
    "author": {
        "_id": "63d3875876174e866cf4548f",
        "username": "NewTestUser"
    },
    "date_posted": "2023-01-27T08:11:51.352Z",
    "category": "North America",
    "content": "A cool story would go here",
    "comments": [],
    "__v": 0
}
```

**/posts/category/:category/**

- Request Verb: GET
- Function: Retrieves all Posts from the database with the matching category
- Required Arguments: category
- Authentication: N/A
- Authorization: N/A
- Example Request: N/A
- Example Response:

```json
[
    {
        "_id": "63d38af076174e866cf45497",
        "title": "New Test Post 2",
        "author": {
            "_id": "63d37e827258d1092a616c57",
            "username": "Callum"
        },
        "date_posted": "2023-01-27T08:11:51.352Z",
        "category": "Asia",
        "content": "Content content content and more content",
        "comments": [],
        "__v": 0
    },
    {
        "_id": "63d38b1b76174e866cf4549a",
        "title": "New Test Post 1",
        "author": {
            "_id": "63d37e827258d1092a616c58",
            "username": "Mario"
        },
        "date_posted": "2023-01-27T08:11:51.352Z",
        "category": "Asia",
        "content": "Really cool content about travelling",
        "comments": [
            {
                "_id": "63d38b5076174e866cf4549d",
                "post": "63d38b1b76174e866cf4549a",
                "author": {
                    "_id": "63d3875876174e866cf4548f",
                    "username": "NewTestUser"
                },
                "date_posted": "2023-01-27T08:11:51.346Z",
                "content": "and a comment to go on the post",
                "__v": 0
            }
        ],
        "__v": 0
    }
]
```

**/posts/new/**

- Request Verb: POST
- Function: Creates a new Post document in the database
- Required Arguments: N/A
- Authentication: JWT
- Authorization: N/A
- Example Request:

```json
{
    "title": "Making a new post",
    "category": "Asia",
    "content": "A new post with some cool new content"
}
```

- Example Response:

```json
{
    "title": "Making a new post",
    "author": {
        "_id": "63d8aee005c5dff71adb3642",
        "username": "NewTestUser3"
    },
    "category": "Asia",
    "content": "A new post with some cool new content",
    "comments": [],
    "_id": "63d8b0fec78b2300c30d9de0",
    "date_posted": "2023-01-31T06:11:10.461Z",
    "__v": 0
}
```

**/posts/:id/**

- Request Verb: PUT
- Function: Updates an existing Post document in the database
- Required Arguments: id (Mongo Object Id reference for Post)
- Authentication: JWT
- Authorization: N/A
- Example Request:

```json
{
    "title": "Editing a post",
    "category": "South America",
    "content": "Editing post with some cool new content and changing the category"
}
```

- Example Response:

```json
{
    "_id": "63d8b0fec78b2300c30d9de0",
    "title": "Editing a post",
    "author": {
        "_id": "63d8aee005c5dff71adb3642",
        "username": "NewTestUser3"
    },
    "category": "South America",
    "content": "Editing post with some cool new content and changing the category",
    "comments": [],
    "date_posted": "2023-01-31T06:11:10.461Z",
    "__v": 0
}
```

**/posts/:id/**

- Request Verb: DELETE
- Function: Deletes an existing Post document from the database
- Required Arguments: id (Mongo Object Id reference for Post)
- Authentication: JWT
- Authorization: N/A
- Example Request: N/A
- Example Response: 204 No Conetent status code upon successful deletion

**/posts/:id/rating/**

- Request Verb: PATCH
- Function: Adds rating to a post
- Required Arguments: id (Mongo Object Id reference for Post)
- Authentication: JWT
- Authorization: N/A
- Example Request:

```json
{
    "userRating": 5
}
```

- Example Response:

```json
{
    "_id": "63ddb3c27c6d021912b37e60",
    "title": "TESTING RATING",
    "author": {
        "_id": "63ddab012540a036440302bc",
        "username": "PostmanTest6"
    },
    "category": "North America",
    "content": "TESTING",
    "comments": [],
    "rating": [
        3,
        5
    ],
    "date_posted": "2023-02-04T01:24:18.894Z",
    "__v": 0,
    "calculated_rating": 4,
    "id": "63ddb3c27c6d021912b37e60"
}
```
