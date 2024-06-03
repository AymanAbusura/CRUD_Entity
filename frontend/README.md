# CRUD_Entities manager

Documentation
Table of Contents
1. Introduction
2. Project Structure
3. Prerequisites
4. Setup Instructions
    * Backend Setup
    * Frontend Setup
5. Usage
6. API Endpoints
7. Available Scripts

## Introduction

This project is a web application for managing a dataset of two-dimensional named entities. Each entity consists of a name, a 2D coordinate, and one or more string labels. The application allows users to perform CRUD operations on entities and visualize the dataset using a canvas.

## Project Structure

- frontendtest/
    - backend/
        - controllers/
            - operations.js
        - routes/
            - entities.js
        - db.json
        - index.js
    - frontend/
        - public/
            - index.html
        - src/
            - canvas/
                - Canvas.js
            - component/
                - Form.js
                - List.js
            - redux/
                - actions.js
                - store.js
            - App.css 
            - App.js 
            - index.js
        - package.json

## Prerequisites
* Node.js (>= 12.x)
* npm (>= 6.x)

## Setup Instructions
* Backend Setup

1. Navigate to the backend directory:

    cd backend

2. Install json-server:

    npm install -g json-server 

3. Create a db.json file:

4. Ensure the db.json file exists with the following content:

    {
        "entities": 
        [
            { 
                "name": "Entity1",
                "coordinate": [-5, 10],
                "labels": ["labelA", "labelB", "labelE"]
            },
            { 
                "name": "Entity2",
                "coordinate": [3, 6],
                "labels": ["labelC", "labelD"]
            },
            { 
                "name": "Entity3",
                "coordinate": [4, -1],
                "labels": ["labelA", "labelC"]
            }
        ]
    }


5. Run the mock API server:

    json-server --watch db.json --port 3001 

    This will start the mock API server at http://localhost:3001.

* Frontend Setup

1. Navigate to the frontend directory:
    
    cd frontend 

2. Install dependencies:
    
    npm install 

3. Start the React application:
    
    npm start 

This will start the React development server at http://localhost:3000.

## Usage
1. Open your browser and navigate to http://localhost:3000.

2. In this project interface where you can:
    * View the list of entities
    * Add a new entity
    * Edit an existing entity
    * Remove an entity
    * Visualize the dataset on a canvas
    * Query entities within a specified rectangle and visualize the results

## API Endpoints
    Base URL

    http://localhost:3001
    
    Endpoints
    
    * GET /entities
        * Retrieves the list of entities.
        * Example: curl http://localhost:3001/entities

    * POST /entities
        * Adds a new entity.
        * Example:bash
    
    * PUT /entities/
        * Updates an existing entity.
        * Example: curl -X PUT -H "Content-Type: application/json" -d '{"name":"Entity2","coordinate":[3,6],"labels":["labelC","labelD","labelX"]}' http://localhost:3001/entities/2

    * DELETE /entities/
        * Removes an entity.
        * Example: curl -X DELETE http://localhost:3001/entities/2

## Available Scripts

In the project directory, you can run:

    - npm start
        Runs the app in the development mode.
        Open http://localhost:3000 to view it in the browser.

        The page will reload if you make edits.
        You will also see any lint errors in the console.

    - npm test
        Launches the test runner in the interactive watch mode.

    - npm run build
        Builds the app for production to the build folder.
        It correctly bundles React in production mode and optimizes the build for the best performance.

        The build is minified and the filenames include the hashes.
        The app is ready to be deployed!