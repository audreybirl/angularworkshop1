# projecttest1
AngularJs -> Workshop Part I

## Project Test 1 - AngularJS boiler plate

This project includes the use of following
	* Node
	* Bower
	* Gulp
	* MongoDb (Connects to an api that uses)
	* Sails 

### Steps to run this project
 
1. Install node from here http://nodejs.org can also use nvm to swap between versions of Node https://github.com/creationix/nvm 

2. Download and run MongoDb from here https://www.mongodb.org/downloads
	
	Create a testtable and add a few records to it
	```
	use sailsDb

	db.testtable.insert( { firstname: 'Audrey', lastname: 'Bennouar' } );

	db.testtable.find({}); //list all added records

	Show dbs
	show collections
	```

3. Install sails
   Create sails project
	* mkdir sails
	* cd sails
	* sudo npm -g install sails

	* sails new testProject

   Lift the server
   	* sails lift
   	* Go to http://localhost:1337/
    
    * Connect to MongoDb
    * cd testProject
    * npm install sails-mongo --save
    * cd config
    * vi connections.js
    * Add the following code

	```
    someMongodbServer: {
	    adapter: 'sails-mongo',
	    host: 'localhost',
	    port: 27017,
	    // user: 'username',
	    // password: 'password',
	    database: 'sailsDb'
	  },
	```
	vi models.js add the following

	```
		module.exports.models = = {
			connection: ‘someMongodbServer’
		};
	```
	* sails generate api testTable
	* sails lift
		* Choose safe 1.

	Test the api is bringing back data go to http://localhost:1337/testtable/
	Should list the records you added in step 2 above

4. Do an npm install & bower install in the projecttest1 directory and run gulp



