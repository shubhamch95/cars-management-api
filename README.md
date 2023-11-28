# cars-management-api

 Node.js REST API with MongoDB This is a simple Node.js REST API project using Express.js and MongoDB for managing a collection of cars.

 ## Getting Started 
 Clone the repository:
 
 git clone https://github.com/shubhamch95/cars-management-api
 cd cars-management-api

 Install dependencies:
 
 npm install

Create a .env file in the root directory and add your MongoDB connection URL and the desired port:

PORT=2000 
DB_CONNECTION_URL=mongodb://127.0.0.1:27017/yourdatabase

Start the server:

 npm start

The server will run on the specified port, and you should see "Server is Running Fine.!!" in the console.

Project Structure:

* index.js: The main entry point of the application where the Express app is configured and the server is started.
* models/model.js: Defines the Mongoose schema for the cars collection.
* routers/routes.js: Contains the Express routes for handling CRUD operations on the cars collection.

 API Endpoints:

 Get All Cars URL:
 /api/v1/ 
 Method: GET 
 Description: Get a list of all cars.

 Get Single Car URL: 
 /api/v1/:carId 
 Method: GET 
 Description: Get details of a single car by its ID.

 Create a New Car URL:
/api/v1/ 
Method: POST 
Description: Create a new car. Requires a JSON body with car details.

Example JSON body: 

{
 "brand": "Toyota",
 "type": "Sedan", 
"year": 2022,
 "price": 25000,
 "color": "Blue" 
}

Database Connection:

The project uses Mongoose to connect to a MongoDB database.
The connection URL is specified in the .env file.
DB_CONNECTION_URL=mongodb://127.0.0.1:27017/yourdatabase

Contributing:

Feel free to contribute to the project by opening issues or creating pull requests.
Your feedback and contributions are highly appreciated!



