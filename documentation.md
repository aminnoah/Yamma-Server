# Node and PostgreSQL Boilerplate app

## How to set it up

1. Clone this repository to your local machine
2. Install the dependencies for the project:
   ```console
   npm install
   ```
3. If there are high vulnerabilities reported during the install:
   ```console
   npm audit fix --force
   ```
4. Ensure your PostgreSQL server is running:
   ```console
   pg_ctl restart
   ```
5. Create a User for this project:
   ```console
   createuser testuser
   ```
6. Create a database for the project with your user as the owner:
   ```console
   createdb testdb
   ```
7. Grant all privileges for the new database
   ```console
   psql testdb
   ```
   ```sql
   alter user testuser with encrypted password 'qwerty';
   grant all privileges on database testdb to testuser;
   ```
8. Rename the `example.env` file to `.env` and update the following fields with your database credentials:
   ```console
   MIGRATION_DB_NAME=
   MIGRATION_DB_USER=
   MIGRATION_DB_PASS=
   DATABASE_URL=postgresql://USERNAME@localhost/DATABASE_NAME
   TEST_DB_URL=postgresql://USERNAME@localhost/DATABASE_NAME
   WORKER_KEY=some-key
   ```
9. Create the database tables:
   ```console
   npm run migrate -- 3
   ```
10. Start the tests:
    ```console
    npm t
    ```
11. Tests have not yet been implemented

## Local Node scripts

- To install the node project ===> npm install
- To fix vulnerabilities after installation ===> npm audit fix --force
- To migrate the database ===> npm run migrate -- 1
- To run Node server (on port 8000) ===> npm run dev
- To run tests ===> npm run test

## App Structure

- **migration** folder contains all the sql files necesay for the DB setup
- **public** folder contains the View related files
- **src** folder contains the Controller related files

  - **server.js** is the entry point of the Controller logic (where all the general app settings live)
  - **app.js** is the starting pint for the routes

  - **pancake** folder contains the router with all the pancake API endpoints
    - **pancake-router.js** Pancake Router
      - GET Endpoint: Add a GET endpoint to this server
      - POST Endpoint: Add a POST endpoint to this server
      - DELETE Endpoint: Add a Delete endpoint to this server
      - PATCH Endpoint: Add a PATCH Endpoint to this server
    - **pancake-service.js** Service file for the Controller connection witht the Model
  - **middleware** folder contains functions that are used by the controller in multiple places

- **test** folder contains the Test files
