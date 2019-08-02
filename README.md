# Backend---Restaurant Passport

Restaurant Passport

As a foodie, I want to be able to always have ideas of where I can eat when the opportunity arises (date night, a rare free night, girls night, bachelor party, etc.). I’m tired of defaulting to McDonalds because of decision fatigue every week!  I’m a goal setter, so I want to see visual progress of restaurants I’ve tried. I also want to brag to my friends about all the cool places I’ve been.

Users can signup and login. Include their name, city for their first passport, and email (can include other info you feel is needed).

## NPM Scripts For the Backend

`npm i` || `yarn install`

Installs project dependencies.

`npm start` || `yarn start`

Starts the server.

`npm run dev` || `yarn dev`

Starts the development server in watch mode.

`npm test` || `yarn test`

Runs all the test suites and displays test coverage.

## NPM Scripts For the Frontend
 - Navigate to client `cd client` and run
`npm start || yarn start`

## API Documentation

The Restaurant Passport Backend code is hosted on Heroku and can be found [here](https://restaurant-review-api.herokuapp.com/).


### API Endpoints

The following endpoints are available for use.

| Methods | Endpoint              | Description                              |
| ------- | --------------------- | ---------------------------------------- |
| GET     | /                     | Returns the server status with a message |
| GET     | /api/v1/users       | gets all users                           |
| GET     | /api/v1/users/:id   | gets a user by id                        |
| PUT    | /api/v1/users/:id   | update a user by id                        |
| DELETE     | /api/v1/users/:id   | delete a user by id                        |
| POST    | /api/v1/auth/register    | registers a new user                     |
| POST    | /api/v1/auth/login       | logs a user in                           |
| POST    | /api/v1/blacklists/:userId/:restaurantID       | blacklists a restaurant                          |
| DELETE    | /api/v1/blacklists/:id       | removes a restaurant from the blacklist                          |
| GET    | /api/v1/blacklists/:userId      | returns restaurants in the users blacklist                          |
| GET    | /api/v1/restaurants/      | returns all restaurants                         |
| GET    | /api/v1/restaurants/passport?city&&user      | returns restaurants in the users city                         |
| GET    | /api/v1/restaurants/:id      | returns a single restaurant with its reviews                         |
| POST    | /api/v1/restaurants      | create a restaurant                        |
| DELETE    | /api/v1/restaurants/:id     | deletes a restaurant                         |
| PUT    | /api/v1/restaurants/:id     | updates a restaurant                         |
| DELETE    | /api/v1/reviews/:id     | delete a review                       |
| POST    | /api/v1/reviews/:userId/:restaurantId    | mark restaurant as visited                         |
| GET    | /api/v1/visits//:userId    | get users visited restaurants                         |
| DELETE    | /api/v1/visits/:id    | delete or remove restaurant as visited                       |



**NOTE**: Requests needing image uploads are handled from the frontend and the url returned from cloudinary is sent with the request

### Authentication Endpoints

#### Registration [POST]

**URL**: https://restaurant-review-api.herokuapp.com/api/v1/auth/register

**Payload**:

```javascript
{
    "firstname": "Johnson",
    "lastname": "Ogwuruu",
    "email": "ogwurujohnson11@gmail.com",
    "password": "test",
    "city": "lagos"
}
```

**Returns**: A message that user has been added successfully.

```javascript
{
    "id": 11,
    "firstname": "Johnson",
    "lastname": "Ogwuruu",
    "email": "ogwurujohnson11@gmail.com",
    "password": "$2b$12$FT3lnf/qlO.mdxos5TflReEFIcgjuruv.qt2AJmldbW1KSbK55VrO",
    "city": "lagos",
    "role": "user",
    "joined_at": "2019-08-02T09:34:06.809Z"
}
```

#### Login [POST]

**URL**: https://restaurant-review-api.herokuapp.com/api/v1/auth/login

**Payload**:

```javascript
{
    "email": "ogwurujohnson11@gmail.com",
    "password": "test"
}
```

**Returns**: An object with the token

```javascript
{
    "user": {
        "id": 11,
        "firstname": "Johnson",
        "lastname": "Ogwuruu",
        "email": "ogwurujohnson11@gmail.com",
        "password": "$2b$12$FT3lnf/qlO.mdxos5TflReEFIcgjuruv.qt2AJmldbW1KSbK55VrO",
        "city": "lagos",
        "role": "user",
        "joined_at": "2019-08-02T09:34:06.809Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjExLCJpYXQiOjE1NjQ3Mzg1NTcsImV4cCI6MTU2NDgyNDk1N30.lgb_dNNxxnIQp2CsGrhIYdHQve4d74a7ww-JQo4cg60"
}
```

#### Get all users [GET]

**URL**: https://restaurant-review-api.herokuapp.com/api/v1/users/

**Returns**: An array of user object.

```javascript
[
    {
        "id": 2,
        "firstname": "Johnson",
        "lastname": "Ogwuruu",
        "email": "ogwurujohnson1@gmail.com",
        "password": "$2b$12$dq3zwaupFhn4ZCbnrVY/SO2fsp.Sqktx./TpA34W/M543GscMxhD2",
        "city": "lagos",
        "role": "user",
        "joined_at": "2019-07-30T23:54:50.994Z"
    },
    {
        "id": 3,
        "firstname": "Johnson",
        "lastname": "Ogwuru",
        "email": "ben@lambdaschool.com",
        "password": "$2b$12$/ceFTr.GNsJ7aA0pHt7xL.GnQlNvIA38cs9dRYXo5cLdtuzWCt22i",
        "city": "lagos",
        "role": "user",
        "joined_at": "2019-07-31T14:35:02.548Z"
    },
    {
        "id": 4,
        "firstname": "Johnson",
        "lastname": "Ogwuru",
        "email": "johnson.ogwuru@andela.com",
        "password": "$2b$12$3H8h9pnijikzv3sRH4xHDugyrzHkFgzUo8jQgIffSJG8jH7rtSWFi",
        "city": "lagos",
        "role": "user",
        "joined_at": "2019-07-31T14:35:44.396Z"
    },
    {
        "id": 5,
        "firstname": "Johnson",
        "lastname": "Ogwuru",
        "email": "paddy@gmail.com",
        "password": "$2b$12$RGDTlgWTcxZ6wpPXFPun/uTZ0FQRPl8taGcYtR49Z660ayEcXi5X2",
        "city": "aba",
        "role": "user",
        "joined_at": "2019-07-31T14:46:42.179Z"
    },
    {
        "id": 6,
        "firstname": "Johnson",
        "lastname": "Ogwuru",
        "email": "ogwurujohnson115@gmail.com",
        "password": "$2b$12$xKztd0fqAfHFfXrg67NwHOYosgEIDGuVXJXFdB48rsDhT72U/BzOW",
        "city": "lagos",
        "role": "user",
        "joined_at": "2019-08-01T10:26:58.341Z"
    },
    {
        "id": 7,
        "firstname": "Johnson",
        "lastname": "Ogwuru",
        "email": "ogwurujohnson222@gmail.com",
        "password": "$2b$12$YQKrtl7fikWBA9bxvhJ/VuQyDhwSLHdRkQhoVdad85QLjoy9Pn5KK",
        "city": "lagos",
        "role": "user",
        "joined_at": "2019-08-01T10:27:56.328Z"
    },
    {
        "id": 8,
        "firstname": "Johnson",
        "lastname": "Ogwuru",
        "email": "ogwurujohnson20@gmail.com",
        "password": "$2b$12$kuaokpmm5CRT2GYxjzODnOg5DnRJjAQxX8r9TXDVAxqrxqh/Kqr4.",
        "city": "lagos",
        "role": "user",
        "joined_at": "2019-08-02T01:03:00.359Z"
    },
    {
        "id": 9,
        "firstname": "Johnson",
        "lastname": "Ogwuru",
        "email": "ogwurujohnson30@gmail.com",
        "password": "$2b$12$oKwJcHq1Za2IQKEFt0ZvRO7eVSRFZZzRd0zDGJ1m5wfW1pxU2vvd2",
        "city": "aba",
        "role": "user",
        "joined_at": "2019-08-02T01:03:57.253Z"
    },
    {
        "id": 10,
        "firstname": "Delba",
        "lastname": "test",
        "email": "delbatest@gmail.com",
        "password": "$2b$12$rIv6JxLn6kAx915li.ZheuHmp9.COG91wZqIA3uwiwgWnitJJPWuW",
        "city": "newyork",
        "role": "user",
        "joined_at": "2019-08-02T07:18:09.847Z"
    },
    {
        "id": 11,
        "firstname": "Johnson",
        "lastname": "Ogwuruu",
        "email": "ogwurujohnson11@gmail.com",
        "password": "$2b$12$FT3lnf/qlO.mdxos5TflReEFIcgjuruv.qt2AJmldbW1KSbK55VrO",
        "city": "lagos",
        "role": "user",
        "joined_at": "2019-08-02T09:34:06.809Z"
    }
]
```

#### Get user by id [GET]

**URL**: https://restaurant-review-api.herokuapp.com/api/v1/users/3

**Returns**: the user object.

```javascript
{
    "id": 3,
    "firstname": "Johnson",
    "lastname": "Ogwuru",
    "email": "ben@lambdaschool.com",
    "password": "$2b$12$/ceFTr.GNsJ7aA0pHt7xL.GnQlNvIA38cs9dRYXo5cLdtuzWCt22i",
    "city": "lagos",
    "role": "user",
    "joined_at": "2019-07-31T14:35:02.548Z"
}
```

#### Get restaurants [GET]

**URL**: https://restaurant-review-api.herokuapp.com/api/v1/restaurants

**Returns**: an array of restaurants

```javascript
[
    {
        "id": 4,
        "name": "iya tomi",
        "description": "the best of them all",
        "image": "https://res.cloudinary.com/ogwurujohnson/image/upload/v1561643304/bjc5fbdksvte293pnhdl.jpg",
        "city": "lagos",
        "no_of_reviews": "4",
        "sum": "12",
        "avgRating": 3
    },
    {
        "id": 7,
        "name": "Johnsonn",
        "description": "jbjjlk",
        "image": "https://res.cloudinary.com/ogwurujohnson/image/upload/v1561643304/bjc5fbdksvte293pnhdl.jpg",
        "city": "lagos",
        "no_of_reviews": "0",
        "sum": null,
        "avgRating": null
    },
    {
        "id": 9,
        "name": "Kelechi",
        "description": "i dont have sense",
        "image": "https://res.cloudinary.com/ogwurujohnson/image/upload/v1564707896/pnjzkouqqhdljbx9wdqo.jpg",
        "city": "aba",
        "no_of_reviews": "0",
        "sum": null,
        "avgRating": null
    },
    {
        "id": 10,
        "name": "Kelechi",
        "description": "get sense u say no",
        "image": "https://res.cloudinary.com/ogwurujohnson/image/upload/v1564707964/rsickofgtm8oztu7labj.jpg",
        "city": "aba",
        "no_of_reviews": "1",
        "sum": "2",
        "avgRating": 2
    },
    {
        "id": 6,
        "name": "Odogwu",
        "description": "opens very late oo",
        "image": "https://res.cloudinary.com/ogwurujohnson/image/upload/v1561643304/bjc5fbdksvte293pnhdl.jpg",
        "city": "lagos",
        "no_of_reviews": "1",
        "sum": "2",
        "avgRating": 2
    },
    {
        "id": 12,
        "name": "Wakkis Restaurant",
        "description": "mnsbfadsmhfdjkhfdkbjmdjkmznsbma",
        "image": "https://res.cloudinary.com/ogwurujohnson/image/upload/v1564730340/gqxxwy0nipunvqhfjmzz.jpg",
        "city": "newyork",
        "no_of_reviews": "1",
        "sum": "3",
        "avgRating": 3
    },
    {
        "id": 3,
        "name": "Iya Goodness",
        "description": "The best restaurant in the whole of lekki",
        "image": "null",
        "city": "lagos",
        "no_of_reviews": "1",
        "sum": "3",
        "avgRating": 3
    },
    {
        "id": 1,
        "name": "Junior High",
        "description": "The best restaurant in the whole of lekki",
        "image": "null",
        "city": "lagos",
        "no_of_reviews": "1",
        "sum": "2",
        "avgRating": 2
    },
    {
        "id": 5,
        "name": "Iya oge",
        "description": "the best cook ever",
        "image": "https://res.cloudinary.com/ogwurujohnson/image/upload/v1561643304/bjc5fbdksvte293pnhdl.jpg",
        "city": "lagos",
        "no_of_reviews": "2",
        "sum": "9",
        "avgRating": 4
    },
    {
        "id": 2,
        "name": "Mama Ebuka",
        "description": "The best restaurant in the whole of lekki",
        "image": "null",
        "city": "enugu",
        "no_of_reviews": "0",
        "sum": null,
        "avgRating": null
    },
    {
        "id": 8,
        "name": "Wakkis Restaurant",
        "description": "Wakkis Food & Beverage Ltd is a registered company in Nigeria established to car.",
        "image": "https://res.cloudinary.com/ogwurujohnson/image/upload/v1564702081/rnzpfg8tupzzkcbmiypq.jpg",
        "city": "lagos",
        "no_of_reviews": "0",
        "sum": null,
        "avgRating": null
    },
    {
        "id": 11,
        "name": "Kelechi",
        "description": "get sense, no",
        "image": "https://res.cloudinary.com/ogwurujohnson/image/upload/v1564708009/wbrgilu7qrg8kjunld3c.jpg",
        "city": "aba",
        "no_of_reviews": "0",
        "sum": null,
        "avgRating": null
    }
]
```

#### Get restaurant by id [GET]

**URL**: https://restaurant-review-api.herokuapp.com/api/v1/restaurants/1

**Returns**: The restaurant object with an array of reviews.

```javascript
{
    "id": 1,
    "name": "Junior High",
    "description": "The best restaurant in the whole of lekki",
    "image": "null",
    "city": "lagos",
    "created_at": "2019-07-30T23:58:19.543Z",
    "reviews": [
        {
            "id": 1,
            "firstname": "Johnson",
            "lastname": "Ogwuruu",
            "ratings": 2,
            "reviews": "Her rice is very bad"
        }
    ]
}
```

### Protected Endpoints

#### Get all passport in user city [GET]

**URL**: https://restaurant-review-api.herokuapp.com/api/v1/restaurants/passport?city=lagos&&user=4

**Returns**: Returns an array of restaurants.

```javascript
[
    {
        "id": 3,
        "name": "Iya Goodness",
        "description": "The best restaurant in the whole of lekki",
        "image": "null",
        "city": "lagos",
        "no_of_reviews": "1",
        "sum": "3",
        "avgRating": 3
    },
    {
        "id": 8,
        "name": "Wakkis Restaurant",
        "description": "Wakkis Food & Beverage Ltd is a registered company in Nigeria established to car.",
        "image": "https://res.cloudinary.com/ogwurujohnson/image/upload/v1564702081/rnzpfg8tupzzkcbmiypq.jpg",
        "city": "lagos",
        "no_of_reviews": "0",
        "sum": null,
        "avgRating": null
    }
]
```

#### Get restaurant by id [GET]

**URL**: _https://one-line-daily.herokuapp.com/api/entries/17_

**Returns**: Returns an entry object.

```javascript
{
    "status": 200,
    "data": {
        "id": 17,
        "title": "file upload",
        "text": "this uploads file to cloudinary",
        "created_at": "2019-07-31T14:43:29.686Z",
        "user_id": 2,
        "image": {
            "url": "http://res.cloudinary.com/dopxebhwn/image/upload/v1564584208/one_line_a_day/jspat0k0fjihpcqredrm.png"
        }
    }
}
```

#### Get a user's blacklist [GET]

**URL**: https://restaurant-review-api.herokuapp.com/api/v1/blacklists/4

**Returns**: An array of user's blacklist

```javascript
[
    {
        "id": 4,
        "name": "iya tomi",
        "description": "the best of them all"
    }
]
```

#### Get a user's visits [GET]

**URL**: https://restaurant-review-api.herokuapp.com/api/v1/visits/4

**Returns**: An array of user's visited restaurant

```javascript
[
    {
        "id": 4,
        "name": "iya tomi",
        "description": "the best of them all"
    }
]
```


## Testing

The server uses the Jest testing framework to run tests.

Check tests with the `npm test` command.


## Author

💻 ☕️ **Johnson Ogwuru** 😎 🤙
