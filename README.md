# test
Basic CRUD operations on user model using node and mongodb.

Pre-requisites:
1. Need to have node install in your machine.
2. Need to Have mongodb in your machine.

How to Install? 
1. Git clone this repository in a desired folder.
2. Go to root folder and do enter 'npm install' in terminal to install all packages.

How to start server?
1. Go to root directory of this project and then enter 'npm start' in terminal.
Server will start on 'http://localhost:3000'.

User Model:
id: number
name: string
email: string
contactno: number

Routes:
1. Get All User
Use GET method on 'http://localhost:3000/users'.

2. Add new User
Use POST method on 'http://localhost:3000/users'.

3. Get particular user using id
Use GET method on 'http://localhost:3000/users/{id}';

4. Update a particular user using id
Use PUT method on 'http://localhost:3000/users/{id}';

5. Delete a particular user using id
Use DELETE method on 'http://localhost:3000/users/{id}';
