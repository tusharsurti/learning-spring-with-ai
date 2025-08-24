# Online Parking Management System

This project is an Online Parking Management System with a Spring Boot backend and an Angular frontend.

## Prerequisites

* Java 17 or higher
* Maven
* Node.js and npm
* Angular CLI

## Backend Setup

1. Navigate to the `parking-management-system-backend` directory.
2. Run `mvn clean install` to build the project and download dependencies.
3. Run `java -jar target/parking-management-system-backend-0.0.1-SNAPSHOT.jar` to start the backend server.
4. The backend will be running on `http://localhost:8080`.

## Frontend Setup

1. Navigate to the `parking-management-system-frontend` directory.
2. Run `npm install` to install the dependencies.
3. Run `ng serve` to start the frontend development server.
4. The frontend will be running on `http://localhost:4200`.

## Running the application

1. Start the backend server as described in the "Backend Setup" section.
2. Start the frontend server as described in the "Frontend Setup" section.
3. Open your browser and navigate to `http://localhost:4200`.
4. Click on the "Parking Spots" link to view the parking spots management page.

## API Endpoints

The backend provides the following REST endpoints for managing parking spots:

- `GET /api/parking-spots`: Get a list of all parking spots.
- `POST /api/parking-spots`: Add a new parking spot.
- `GET /api/parking-spots/{id}`: Get a single parking spot by its ID.
- `PUT /api/parking-spots/{id}`: Update an existing parking spot.
- `DELETE /api/parking-spots/{id}`: Delete a parking spot.
