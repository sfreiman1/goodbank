# Good Bank

Good Bank is software to manage a very simple bank that allows accounts to be created and allows users to deposit or withdraw funds from their accounts. An administrator may see all customer data. Very simple security ensures that users have a valid password to log in.

Good Bank has a front end and a back end. It was built for a final project for the MIT "Professional Certificate in Coding: Full Stack Development with MERN" class.

# Installation

To install the software:

* Use git to pull the entire goodbank repo. 
* In goodbankFE
*   Run **npm build** to ensure all necessary software (express, cors, node) is installed.
* Execute the command: **docker run -p 27017:27017 --name goodbank -d mongo** to install Mongodb

# To start the front end

* cd goodbankFE
* npm start

# To start the back end

* cd goodbankBE
* npm run dev

# Administrator account 
(Note that this would NEVER be put in Github in a real application.)

* login: admin@goodbank.com
* password: 12345678

# Technology used
* Node.js
* Express
* Cors
* React
* Mongodb
