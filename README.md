# nodejs-common-helper

# Description:
`nodejs-common-helper` is a versatile and evolving npm package designed to simplify Node.js development by providing a set of common functions that developers frequently encounter in their projects. Whether you're working on web applications, APIs, or other Node.js-based projects, this package aims to save you time and effort with its handy utilities.

# Current Functions:
1. `Common`: General-purpose functions that are commonly used across various scenarios in Node.js development.
2. `MongoDBConnection`: Simplifies MongoDB connection handling, making it easy to set up and manage connections to your MongoDB database.
3. `JwtWebToken`: Offers straightforward functions for working with JSON Web Tokens (JWT), a popular method for authentication and authorization in web applications.
4. `OTPGenerator`: Provides a reliable and customizable one-time password (OTP) generation solution, essential for secure authentication processes.
5. `CryptoService`: A set of cryptographic functions to enhance the security of your applications, including encryption and hashing.
6. `AgeCalculator`: Easily calculate the age based on a given date of birth, simplifying age-related operations in your applications.
7. `ZodiacSignCalculator`: Determine the zodiac sign based on a person's birthdate, adding a touch of astrological information to your projects.

`In Progress:`
Expect more valuable functions and enhancements to be added in future updates. We are committed to continuously improving and expanding the capabilities of nodejs-common-helper to meet the evolving needs of Node.js developers.

## Node.js (Install)

Requirements:

- Node.js
- npm (Node.js package manager)

```bash
npm install nodejs-common-helper
```

## Example

``` js
   const { common } = require('nodejs-common-helper');
   let a = [1,2]
   let b = [1,2]
   let c = common.IsEqualArrays(a,b)
   console.log(c) // true

   let d = common.common.getCountryFromCode('IN');
   console.log(d) // India
```

``` js
   const { MongoDBConnection } = require('nodejs-common-helper');
   const mongoConnection = new MongoDBConnection();

   async function abc(){
                                                     // DB_STRING                   COLLECTION_NAME
     const connection = await mongoConnection.connect('mongodb://127.0.0.1:27017', 'sunnydb');
     const listCollections = await mongoConnection.listCollections();
      // [ 'quots', 'random', 'temp' ]
     const listDatabases = await mongoConnection.listDatabases();
      // ['admin','config','local','sunny''sunnydb']
     const getCollectionSize = await mongoConnection.getCollectionSize('sunnydb','quots'); 
     //  0.00000286102294921875

     const collection = connection.collection('quots');
     let data = await collection.find({}).toArray();
     //console.log(data);
}
abc()
```