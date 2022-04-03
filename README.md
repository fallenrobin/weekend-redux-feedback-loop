# Full Stack React-Redux Feedback Loop

## Description

_Time spent learning Redux before project: about 4 days_

_Time to execute project: about 5 hours for basic functionality, another 10ish adding MUI_

This project had us finally piece together React-Redux with the full stack so user input could be stored in a database. 

One challenge here was deciding how to approach the reducers for Redux. I decided to use just one reducer and then use a switch statement that looked at the dispatch action type. This way each form populated a property for the appropriate keys for the 'feedback' object to eventually POST to the database. One thing I've realized at the end is that the 'back' button does work fine and keeps the values, but manually refreshing any of the pages wipes previous user input.

I was able to complete the base functionality of the app pretty quickly, and then I spent a LOT of time getting more familiar with MUI. I'm very happy with the result of using cards as form boxes, and also custom icons for the rating systems.

## Screen Shot

![First form](/public/images/screenshot1.png?raw=true "First form")
![Second form](/public/images/screenshot2.png?raw=true "Second form")
![Second form alert](/public/images/screenshot3.png?raw=true "Second form alert")


### Prerequisites

- [Node.js](https://nodejs.org/en/)

## Installation

1. Create a database named `prime_feedback`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!


## Built With

- React
- Redux
- PostgreSQL
- Postico
- Material UI


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality!