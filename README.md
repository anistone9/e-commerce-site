# e-commerce-site
Back End Project for E-Commerce Site Using Express.js and MySQL   

## User Story   

AS A manager at an internet retail company   
I WANT a back end for my e-commerce website that uses the latest technologies   
SO THAT my company can compete with other e-commerce companies   

## Acceptance Criteria    

GIVEN a functional Express.js API   
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file   
THEN I am able to connect to a database using Sequelize   
WHEN I enter schema and seed commands   
THEN a development database is created and is seeded with test data   
WHEN I enter the command to invoke the application   
THEN my server is started and the Sequelize models are synced to the MySQL database   
WHEN I open API GET routes in Insomnia for categories, products, or tags   
THEN the data for each of these routes is displayed in a formatted JSON   
WHEN I test API POST, PUT, and DELETE routes in Insomnia   
THEN I am able to successfully create, update, and delete data in my database        

# Table of Contents   
- [Description](#description)   
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Credits](#credits)  
- [License](#license)     

## Description     
This project consisted in building the back end for an e-commerce site, by configuring the provided Express.js starter code to use Sequelize in order to interact with the MySQL database. The back end includes models and API routes for Products, Categories, and Tags. Object Relational Mapping (ORM) techniques were used to connect the relational database to the object-oriented programming language.   

## Installation   
Clone the repository in GitHub, and install Node.js. MySQL2, Sequelize, Express, and dotenv are imported and used for this application.              

# Usage    
To use this application, first open the .env file and use environment variables to store your MySQL sensitive data such as username, password, and database name.   
Next, open the integrated terminal at db level and run 'npm install' (npm i). Then use 'mysql -y root -p' and password, and run 'source schema/sql.' Exit and run 'npm run seed.'     
Last step is to run 'node server' and then open Insomnia to run the API routes.     

## Demo   

https://user-images.githubusercontent.com/58886869/228431608-5c522d3a-b995-4215-9735-4abc3983421a.mp4
   

## Credits   
University of Arizona Coding Bootcamp starter code, mock-up and lesson examples.    

## License  

MIT License

Copyright (c) 2023 anistone9

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.  


