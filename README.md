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

``` js
   const { JwtWebToken } = require('nodejs-common-helper');
   const secretKey = 'abc';
   const jwtService = new JwtWebToken(secretKey);

   // Create a token
   const payload = { userId: 123, username: 'john_doe' };
   const expiresIn = '1h';
   const token = jwtService.sign(payload, expiresIn);
   console.log('Token:', token); 
   // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJqb2huX2RvZSIsImlhdCI6MTcwNDEyNTI3OCwiZXhwIjoxNzA0MTI4ODc4fQ.0KrJvPMlBDM-MPHGQ_a0CpjSo5VPZ0yiPJ4iMidXn5o

   // Verify a token
   const verifiedPayload = jwtService.verify(token);
   console.log('Verified Payload:', verifiedPayload);
   //{ userId: 123, username: 'john_doe', iat: 1704125278, exp: 1704128878 }
```

``` js
   const { OTPGenerator } = require('nodejs-common-helper');
   const otpGenerator = new OTPGenerator();
   const numericOTP = otpGenerator.generateNumericOTP(4);
   const characterOTP = otpGenerator.generateCharacterOTP(4);
   const alphanumericOTP = otpGenerator.generateAlphanumericOTP(4);

   console.log('Numeric OTP:', numericOTP); //0579
   console.log('Character OTP:', characterOTP); //TTZV
   console.log('Alphanumeric OTP:', alphanumericOTP); //5A3E
```

``` js
   const { CryptoService } = require('nodejs-common-helper');
   const encryptionKey = 'YourEncryptionKey';
   const iv = 'YourInitializationVector';

   const cryptoService = new CryptoService(encryptionKey, iv);

   const plaintext = 'Hello, this is a secret message!';
   const encryptedText = cryptoService.encrypt(plaintext);
   console.log('Encrypted:', encryptedText); //U2FsdGVkX19GqjJHRU/DEAWKscOuBYKYwtDuPkco/o5jn+/ytYmJlgBQptKrx1r6PipkI0f6xYAJwqHYf1D2FQ==

   const decryptedText = cryptoService.decrypt(encryptedText);
   console.log('Decrypted:', decryptedText); //Hello, this is a secret message!
```

``` js
   const { AgeCalculator } = require('nodejs-common-helper');
   const birthDateTimeString = '1990-08-16';
   const birthDateTime = new Date(birthDateTimeString);
   const ageCalculator = new AgeCalculator(birthDateTime);

   const age = ageCalculator.getAge();
   console.log(age);
   //{"years":33,"months":5,"days":16}
```

``` js
   const { ZodiacSignCalculator } = require('nodejs-common-helper');
   const birthDateTimeString = '1990-08-16';
   const birthDateTime = new Date(birthDateTimeString);
   const zodiacSignCalculator = new ZodiacSignCalculator(birthDateTime);
   const zodiacSign = zodiacSignCalculator.getZodiacSign();
   console.log(`Your zodiac sign is ${zodiacSign}.`);
   //Leo
```