# cars-management-api

 Node.js REST API with MongoDB This is a simple Node.js REST API project using Express.js and MongoDB for managing a collection of cars.

 ## Getting Started 
 **Clone the repository:**
 
 git clone https://github.com/shubhamch95/cars-management-api <br> cd /cars-management-api

 ## Install dependencies:
 
 npm install

Create a .env file in the root directory and add your MongoDB connection URL and the desired port:

PORT=2000<br>DB_CONNECTION_URL=mongodb://127.0.0.1:27017/yourdatabase

## Start the server:

 npm start

The server will run on the specified port, and you should see "Server is Running Fine.!!" in the console.

## Project Structure:

* index.js: The main entry point of the application where the Express app is configured and the server is started.
* models/model.js: Defines the Mongoose schema for the cars collection.
* routers/routes.js: Contains the Express routes for handling CRUD operations on the cars collection.

 ## API Endpoints:

 Get All Cars URL:<br>/api/v1/ <br>Method: GET <br>Description: Get a list of all cars.

 Get Single Car URL: <br>/api/v1/:carId <br>Method: GET <br>Description: Get details of a single car by its ID.

 Create a New Car URL:<br>/api/v1/ <br>Method: POST <br>Description: Create a new car. Requires a JSON body with car details.

Example JSON body: 

{
 "brand": "Toyota",<br>"type": "Sedan", <br>"year": 2022,<br>"price": 25000,<br>"color": "Blue" 
}

## Database Connection:

The project uses Mongoose to connect to a MongoDB database.
The connection URL is specified in the .env file.
DB_CONNECTION_URL=mongodb://127.0.0.1:27017/yourdatabase

## Contributing:

Feel free to contribute to the project by opening issues or creating pull requests.
Your feedback and contributions are highly appreciated!



