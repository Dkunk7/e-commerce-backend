# E-commerce Backend Project
  
  ## Description
  This application provides the backend for a generic ecommerce site, connected to a SQL databse that contains information about products, categories, and tags. It has routes that allow a user to access, alter, create and delete this information.

  

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Questions](#questions)

  ## Installation
  Run `npm i` to install the necessary node packages. This should include `dotenv`, `express`, `mysql2`, and `sequelize`. You'll need to create a `.env` file to hold your user-info to connect to the database. It'll contain three variables, `DB_NAME=`, `DB_USER=`, and `DB_PW=`, followed respectively (in quotes) by your database name, user, and password.
  

  ## Usage
  In order to run it properly, you'll need to log into the mysql shell by typing `mysql -u root -p` in the command line, and entering your password as per the prompt. Next, you'll run `SOURCE db/schema.sql;` in order to create the database. Then, type `quit` to exit the mysql shell. Now, run `npm run seed` in order to seed the database. Finally, `npm start` will start up the application. Here's a <a href="https://drive.google.com/file/d/1X8otqBWAUOo29GUgNdN07bhpqQo39kjO/view">video</a> showing this process.

  
  ## Testing
  Here's a <a href ="https://drive.google.com/file/d/1ahxdXQU4ydrqi73AxvmPSUHPWoLvIW_c/view">video</a> showing the usage of Insomnia Core to successfully test all of the routes.
  

  ## Questions
  If you have any questions:

  Find me on <a href = "http://www.github.com/Dkunk7" target = "_blank">GitHub</a>

  or

  Contact me at drkunkel7@gmail.com.
