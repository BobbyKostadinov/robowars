## RoboWars

[![Build Status](https://travis-ci.org/BobbyKostadinov/robowars.svg?branch=master)](https://travis-ci.org/BobbyKostadinov/robowars)

This repository is a programming exercise to deliver an application that given a matrix x,y and an array of robots with starting coordinates and a series of commands, responds with the robots end destination

### Tech Stack
- Node.JS
- Express
- ES6 runs though babel
- unit and integration tests with mocha and should.js
- API tests provided though Postman
- Gulp for task management - used to run test and integration test
- Travis used to test on git events

### Running The Application
    npm install
    npm start

Install the dependency then use "npm run" to start the Express server

In order to run unit tests (100% unit coverage)

    gulp test

The following runs integration tests (located in /itest)

    gulp itest

To run both in combination and to validate that the package passes requirements run

    npm test

### Try Out the Aapplication Live

I've deployed the application in AWS using Elastic Beanstalk. The location is http://robowars.eu-west-1.elasticbeanstalk.com/

In the repository, look for the directory "postman". This contains a set of Postman tests that make calls to the API and validate expected results.


### Application API

     GET /_health

Responds with "ok" to be used for load balancing or monitoring

     PUT /move

Endpoint to process full board.
Accepted input:

    {
    	"upperX": {{Upper X coordinate}},
    	"upperY": {{Upper Y coordinate}},
    	"robots": [{
    		"name": {{Robot Identifier}},
    		"startPos": {
    			"x": {{Robot's initial position}},
    			"y": {{Robot's initial position}},
    			"orientation": {{Robot's initial orientation}}
    		},
    		"commands": [{{Robot's initial position. Array of characters}}]
    	}]
    }

Possible values for orientation: "N", "E", "S", "W"

Possible values for commands:

  - "M" - Move according with current orientation;
  - "L" - Rotate Left without moving position ("N" becomes "W");
  - "R" - Rotate Right without moving position ("N" becomes "W");

The endpoint output is an array of robots, with the addition of currentPos and an empty array of commands. For example:

    [
      {
        "name": "Giskard",
        "startPos": {
          "x": 1,
          "y": 2,
          "orientation": "N"
        },
        "currentPos": {
          "x": 1,
          "y": 3,
          "orientation": "N"
        },
        "commands": []
      }
    ]

### Application Files and Folders Structure

**/lib/resource**

Resources are functions exported to use with Express router. They accept req, res and next parameters and are responsible for calling the service to handle the request

**/lib/service**
Service is the top layer of application logic responsible for providing the interface for the application. Two services are provided here:
  - **robo_factory**: this is a function that accepts the input array of robots and returns an array of Robot model objects
  - **move**: this is a function that accepts a grid model and array of robot model objects and responds with an array of robot model objects that have exhausted their movements

**/lib/model**
This folder holds application models. They are:
  - **grid**: this is a class that accepts grid top right X,Y coordinates and returns an object that contains a matrix of true/false values representing the move grid and the boolean value states if a cell is occupied or not at the moment. Grid object comes with supporting function such as isCellOccupied used to determine if a robot is allowed to move to a specific cell
  - **robot**: constructor that returns a JavaScript object. Used by the robot_factory to create structured objects to use for move processing
  - **command**: This model exports two functions: **rotate** and **changePostition**. rotate accepts the current orientation and the move command (left rotate or right rotate). the function calculates the final orientation while converting the orientation to an angle value, ensuring it remains within 0:360 degrees. The response is a character rather than an angle number value.


Each folder contains a **/test** folder. Here is the location of the unit tests, written with mocha and should.js for assertion.

**/itest**
The location for integration tests. The goal for those tests is to run functions together, rather than in isolation and ensure higher level testing.



### TODO:
- Find a better way to mock ES6 modules. As a new tool, I have not found a good enough mocking tool and a dependency injection would suit better rather than raw import statements however due to the size of the application this seems an overkill
I have used proxyquire but as this works with Node's require I've had to use require statements rather than ES6 imports.

- Performance test for calculations - ensure calculations would not take long in extreme data ranges as this would block the event loop. I've tested with 50 concurrent requests using the Postman tests and that responds within 20ms which is good enough, but the grids used are small.
