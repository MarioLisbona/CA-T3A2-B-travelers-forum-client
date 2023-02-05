# **Postman Testing**

Postman was used for extensive testing of server routing throughout development. Important routes, their requests, and responses are outlined below.

<details>

<summary>GET /posts</summary>

Expected Outcome: Return array of all posts

Test Outcome: ✅

Response

```json
[
    {
        "_id": "63dcb429fce9476f6ce7599b",
        "title": "Backpacking across Europe",
        "author": {
            "_id": "63dcb428fce9476f6ce7596e",
            "username": "Chuck Norris"
        },
        "category": "Europe",
        "content": "Chuck Norris was an only child...eventually Chuck Norris is the only man to ever defeat a brick wall in a game of tennis. Chuck Norris invented Kentucky Fried Chicken's famous secret recipe, with eleven herbs and spices. But nobody ever mentions the twelfth ingredient: Fear Chuck Norris has two speeds. Walk, and Kill. Chuck Norris doesn't read books. He stares them down until he gets the information he wants. Chuck Norris does not sleep. He waits. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide Someone once videotaped Chuck Norris getting pissed off. It was called Walker: Texas Chain Saw Massacre. Chuck Norris does not get frostbite. Chuck Norris bites frost. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide.",
        "comments": [],
        "date_posted": "2023-02-03T07:13:45.016Z",
        "__v": 0
    },
    {
        "_id": "63dcb429fce9476f6ce7599c",
        "title": "Looting Europe",
        "author": {
            "_id": "63dcb428fce9476f6ce7596f",
            "username": "Jack Sparrow"
        },
        "category": "Europe",
        "content": "Yar Pirate Ipsum. Reef sails strike colors code of conduct parley sloop yardarm square-rigged mizzen loaded to the gunwalls keel. Bilge rat scuttle gangway heave down piracy nipper pirate mizzen topmast deadlights. Aft case shot lugsail Gold Road scourge of the seven seas mutiny skysail reef bowsprit Admiral of the Black. Man-of-war yardarm plunder Gold Road case shot capstan poop deck grog blossom clap of thunder topsail. Jack Tar coffer weigh anchor lateen sail warp crimp wench square-rigged careen pirate. Ye hearties interloper cable schooner ho avast tackle booty heave down. Prow reef sails Davy Jones' Locker spike red ensign boom scurvy ahoy belay Sea Legs. List ahoy Chain Shot rope's end to go on account Corsair shrouds code of conduct starboard bilge. Jack Ketch crow's nest topmast run a rig stern Pieces of Eight Jolly Roger Sail ho cog grog blossom.",
        "comments": [],
        "date_posted": "2023-02-03T07:13:45.016Z",
        "__v": 0
    },
    ...
]
```

</details>

<details>

<summary>GET /posts/:id</summary>

Param: `63dcb429fce9476f6ce7599f`

Expected Outcome: Return 1 post matching id: `63dcb429fce9476f6ce7599f`

Test Outcome: ✅

Response:

```json
{
    "_id": "63dcb429fce9476f6ce7599f",
    "title": "A week in Melbourne during the Aus Open",
    "author": {
        "_id": "63dcb428fce9476f6ce7596c",
        "username": "Callum"
    },
    "category": "Australia",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    "comments": [],
    "date_posted": "2023-02-03T07:13:45.016Z",
    "__v": 0
}
```

</details>

<details>

<summary>GET /posts/category/:category</summary>

Param: `Asia`

Expected Outcome: Return all posts from 'Asia' category

Test Outcome: ✅

Response:

```json
[
    {
        "_id": "63dcb429fce9476f6ce7597d",
        "title": "They built the Great Wall of China to keep me out... but it didn't work",
        "author": {
            "_id": "63dcb428fce9476f6ce7596e",
            "username": "Chuck Norris"
        },
        "category": "Asia",
        "content": "Chuck Norris was an only child...eventually Chuck Norris is the only man to ever defeat a brick wall in a game of tennis. Chuck Norris invented Kentucky Fried Chicken's famous secret recipe, with eleven herbs and spices. But nobody ever mentions the twelfth ingredient: Fear Chuck Norris has two speeds. Walk, and Kill. Chuck Norris doesn't read books. He stares them down until he gets the information he wants. Chuck Norris does not sleep. He waits. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide Someone once videotaped Chuck Norris getting pissed off. It was called Walker: Texas Chain Saw Massacre. Chuck Norris does not get frostbite. Chuck Norris bites frost. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide.",
        "comments": [],
        "date_posted": "2023-02-03T07:13:45.013Z",
        "__v": 0
    },
    {
        "_id": "63dcb429fce9476f6ce7597e",
        "title": "Shipwrecked in Beijing",
        "author": {
            "_id": "63dcb428fce9476f6ce7596f",
            "username": "Jack Sparrow"
        },
        "category": "Asia",
        "content": "Yar Pirate Ipsum. Reef sails strike colors code of conduct parley sloop yardarm square-rigged mizzen loaded to the gunwalls keel. Bilge rat scuttle gangway heave down piracy nipper pirate mizzen topmast deadlights. Aft case shot lugsail Gold Road scourge of the seven seas mutiny skysail reef bowsprit Admiral of the Black. Man-of-war yardarm plunder Gold Road case shot capstan poop deck grog blossom clap of thunder topsail. Jack Tar coffer weigh anchor lateen sail warp crimp wench square-rigged careen pirate. Ye hearties interloper cable schooner ho avast tackle booty heave down. Prow reef sails Davy Jones' Locker spike red ensign boom scurvy ahoy belay Sea Legs. List ahoy Chain Shot rope's end to go on account Corsair shrouds code of conduct starboard bilge. Jack Ketch crow's nest topmast run a rig stern Pieces of Eight Jolly Roger Sail ho cog grog blossom.",
        "comments": [],
        "date_posted": "2023-02-03T07:13:45.013Z",
        "__v": 0
    },
    ...
]
```

</details>

<details>

<summary>GET /memberss/:id</summary>

Param: `63dee7f6cfe958d0f0567eea`

Expected Outcome: Return member matching id, excluding their password

Test Outcome: ✅

Response:

```json
{
    "_id": "63dee7f6cfe958d0f0567eea",
    "username": "CodaCat",
    "has_rated": [
        "63dee750cfe958d0f0567ecd"
    ],
    "joined_date": "2023-02-04T23:19:18.661Z"
}
```

</details>

<details>

<summary>POST /auth/register</summary>

**Test 1**

Expected Outcome: Register a user in the DB and return their id and username

Test Outcome: ✅

Request:

```json
{
    "username": "PostmanTest",
    "password": "Postman123!"
}
```

Response:

```json
{
    "id": "63dd7dd514ca26d2655eae23",
    "username": "PostmanTest"
}
```

**Test 2**

Expected Outcome: Fail registration by providing an invalid password (no number, no symbol)

Test Outcome: ✅

Request:

```json
{
    "username": "PostmanTest2",
    "password": "Postman"
}
```

Response:

```json
{
    "errors": [
        {
            "value": "Postman",
            "msg": "Password must be atleast 8 characters; 1 uppercase, 1 lowercase, 1 number and 1 symbol",
            "param": "password",
            "location": "body"
        }
    ]
}
```

</details>

<details>

<summary>POST /auth/login</summary>

**Test 1**

Expected Outcome: Login a user by returning their id, username and jwt token

Test Outcome: ✅

Request:

```json
{
    "username": "PostmanTest",
    "password": "Postman123!"
}
```

Response:

```json
{
    "id": "63dd7dd514ca26d2655eae23",
    "username": "PostmanTest",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGQ3ZGQ1MTRjYTI2ZDI2NTVlYWUyMyIsImlhdCI6MTY3NTQ2MDE2MCwiZXhwIjoxNjc1NDYwMjgwfQ.Pu6XE7k-S3jfcL_JkgLTGVwKMNK2HXqnMJ2lYuWA3gI"
}
```

**Test 2**

Expected Outcome: Fail login by providing an incorrect password

Test Outcome: ✅

Request:

```json
{
    "username": "PostmanTest",
    "password": "WrongPassword"
}
```

Response:

```json
{
    "error": "Incorrect username or password"
}
```

</details>

<details>

<summary>POST /posts/new</summary>

**Test 1**

Expected Outcome: Enter a new Post into the DB as a logged in user

Test Outcome: ✅

Request:

```json
{
    "title": "Postman testing",
    "category": "North America",
    "content": "A post about using Postman to test stuff."
}
```

Response:

```json
{
    "title": "Postman testing",
    "author": {
        "_id": "63dd7dd514ca26d2655eae23",
        "username": "PostmanTest"
    },
    "category": "North America",
    "content": "A post about using Postman to test stuff.",
    "comments": [],
    "_id": "63dd805d14ca26d2655eae29",
    "date_posted": "2023-02-03T21:45:01.199Z",
    "__v": 0
}
```

**Test 2**

Expected Outcome: Error message when passing invalid category for a new Post

Test Outcome: ✅

Request:

```json
{
    "title": "Postman testing",
    "category": "America",
    "content": "A post about using Postman to test stuff."
}
```

Response:

```json
{
    "errors": [
        {
            "value": "America",
            "msg": "Invalid category",
            "param": "category",
            "location": "body"
        }
    ]
}
```

**Test 3**

Expected Outcome: Error message when token not provided in authorization header

Test Outcome: ✅

Request:

```json
{
    "title": "Postman testing",
    "category": "North America",
    "content": "A post about using Postman to test stuff."
}
```

Response:

```json
{
    "error": "Access denied."
}
```

</details>

<details>

<summary>PUT /posts/:id</summary>

**Test 1**

Params: `63dd805d14ca26d2655eae29`

Expected Outcome: Edit post title, category and content

Test Outcome: ✅

Request:

```json
{
    "title": "Postman testing - EDIT",
    "category": "Africa",
    "content": "A post about using Postman to test stuff - EDIT"
}
```

Response:

```json
{
    "_id": "63dd805d14ca26d2655eae29",
    "title": "Postman testing - EDIT",
    "author": {
        "_id": "63dd7dd514ca26d2655eae23",
        "username": "PostmanTest"
    },
    "category": "Africa",
    "content": "A post about using Postman to test stuff - EDIT",
    "comments": [],
    "date_posted": "2023-02-03T21:45:01.199Z",
    "__v": 0
}
```

**Test 2**

Params: `63dd805d14ca26d2655eae29`

Expected Outcome: Error message when not providing title in request body

Test Outcome: ✅

Request:

```json
{
    "category": "Africa",
    "content": "A post about using Postman to test stuff - EDIT"
}
```

Response:

```json
{
    "errors": [
        {
            "msg": "Title is required",
            "param": "title",
            "location": "body"
        }
    ]
}
```

**Test 3**

Params: `63dd805d14ca26d2655eae29`

Expected Outcome: Error message when token in authorization header member id does not match author id

Test Outcome: ✅

Request:

```json
{
    "title": "Postman testing - EDIT",
    "category": "Africa",
    "content": "A post about using Postman to test stuff - EDIT"
}
```

Response:

```json
{
    "error": "Access Denied. You are not the owner of this post"
}
```

</details>

<details>

<summary>DELETE /posts/:id</summary>

**Test 1**

Params: `63dd805d14ca26d2655eae29`

Expected Outcome: Delete post matching id passed as param

Test Outcome: ✅

Response: Status Code 204 No Content

**Test 2**

Params: `63dd805d14ca26d2655eae29`

Expected Outcome: Error message when token in authorization header member id does not match author id

Test Outcome: ✅

Response:

```json
{
    "error": "Access Denied. You are not the owner of this post"
}
```

</details>

<details>

<summary>PATCH /posts/:id/rating</summary>

**Test 1**

Params: `63dcdb88851a8b6a8fb8f7d1`

Expected Outcome: Rating is added to post rating array and calculated rating is returned

Test Outcome: ✅

Request:

```json
{
    "userRating": 4
}
```

Response:

```json
{
    "_id": "63dcdb88851a8b6a8fb8f7d1",
    "title": "test a post",
    "author": {
        "_id": "63dcdb5d851a8b6a8fb8f7cd",
        "username": "Callum1"
    },
    "category": "North America",
    "content": "test",
    "comments": [],
    "date_posted": "2023-02-03T10:01:44.246Z",
    "__v": 0,
    "rating": [
        4
    ],
    "calculated_rating": 4
}
```

**Test 2**

Params: `63dcdb88851a8b6a8fb8f7d1`

Expected Outcome: Error when trying to rate a post again as the same user

Test Outcome: ✅

Request:

```json
{
    "userRating": 3
}
```

Response:

```json
{
    "error": "You have already rated this post"
}
```

**Test 3**

Params: `63dcdb88851a8b6a8fb8f7d1`

Expected Outcome: Error when trying to rate a post with a number not 1-5

Test Outcome: ✅

Request:

```json
{
    "userRating": 6
}
```

Response:

```json
{
    "errors": [
        {
            "value": 6,
            "msg": "Rating must be a number 1-5",
            "param": "userRating",
            "location": "body"
        }
    ]
}
```

</details>

<details>

<summary>POST /comments/new</summary>

**Test 1**

Expected Outcome: Comment is added to post in DB with author as logged in user

Test Outcome: ✅

Request:

```json
{
    "post": "63dd870614ca26d2655eae43",
    "content": "A comment for Postman testing"
}
```

Response:

```json
{
    "post": "63dd870614ca26d2655eae43",
    "author": {
        "_id": "63dd7dd514ca26d2655eae23",
        "username": "PostmanTest"
    },
    "content": "A comment for Postman testing",
    "_id": "63dd872714ca26d2655eae49",
    "date_posted": "2023-02-03T22:13:59.329Z",
    "__v": 0
}
```

**Test 2**

Expected Outcome: Error message when no post id is given in request body

Test Outcome: ✅

Request:

```json
{
    "content": "A comment for Postman testing"
}
```

Response:

```json
{
    "errors": [
        {
            "msg": "Post id required",
            "param": "post",
            "location": "body"
        },
        {
            "msg": "Invalid Mongo id",
            "param": "post",
            "location": "body"
        }
    ]
}
```

**Test 3**

Expected Outcome: Error message when trying to create a comment with expired JWT

Test Outcome: ✅

Request:

```json
{
    "post": "63dd870614ca26d2655eae43",
    "content": "A comment for Postman testing"
}
```

Response:

```json
{
    "error": "jwt expired"
}
```

</details>

<details>

<summary>PUT /comments/:id</summary>

**Test 1**

Params: `63dd872714ca26d2655eae49`

Expected Outcome: Edit a comment content

Test Outcome: ✅

Request:

```json
{
    "content": "EDIT - A comment for Postman testing"
}
```

Response:

```json
{
    "_id": "63dd872714ca26d2655eae49",
    "post": "63dd870614ca26d2655eae43",
    "author": {
        "_id": "63dd7dd514ca26d2655eae23",
        "username": "PostmanTest"
    },
    "content": "EDIT - A comment for Postman testing",
    "date_posted": "2023-02-03T22:13:59.329Z",
    "__v": 0
}
```

**Test 2**

Params: `63dd872714ca26d2655eae49`

Expected Outcome: Error message when sending no content in request body

Test Outcome: ✅

Request:

```json
{

}
```

Response:

```json
{
    "errors": [
        {
            "msg": "Content required",
            "param": "content",
            "location": "body"
        },
    ]
}
```

**Test 3**

Params: `63dd872714ca26d2655eae49`

Expected Outcome: Error message when trying to edit a comment that you are not the owner of

Test Outcome: ✅

Request:

```json
{
    "content": "EDIT - A comment for Postman testing"
}
```

Response:

```json
{
    "error": "Access Denied. You are not the owner of this comment"
}
```

</details>

<details>

<summary>DELETE /comments/:id</summary>

**Test 1**

Params: `63dd872714ca26d2655eae49`

Expected Outcome: Edit a comment content

Test Outcome: ✅

Response: Status Code 204 No Content

**Test 2**

Params: `63dd872714ca26d2655eae49`

Expected Outcome: Error message when trying to delete a comment that you are not the owner of

Test Outcome: ✅

Response:

```json
{
    "error": "Access Denied. You are not the owner of this comment"
}
```
