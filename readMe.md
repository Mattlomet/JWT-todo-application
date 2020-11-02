README table of contents

	1. photo overview
	2. structure
	3. how to run yourself

![alt text](./assets/overview.png)
![alt text](/assets/overview.png)
![alt text](/assets/overview.png)
![alt text](/assets/overview.png)





TODO APPLICATION STRUCTURE


	BACKEND
	
		EUREKA SERVER
		AUTH SERVICE
		TODO SERVICE
		
	FRONTEND
	
		ReactJS w/Bootstrap
		(redux + hooks)
		
	TESTING
	
		CYPRESS
		
		
HOW TO RUN YOURSELF


	git clone project
	
	
	
	FRONT END
	
		open terminal
		cd into 'todo-frontend'
		npm install
		npm start
		
		
	BACKEND
	
		FOR BOTH TODO & AUTH SERVICE
		
			check application.properties files
			update mysql information
				spring.datasource.username
				spring.datasource.password
				
			update spring.datasource.url on what you name your database
			
			spring.jpa.hibernate.ddl-auto set to-
				-create (for the first start)
				-update (after first run)
			
		
	MYSQL
	
		you will need to add roles into database of auth service
		
		INSERT INTO roles(name) VALUES('ROLE_USER');
		INSERT INTO roles(name) VALUES('ROLE_MODERATOR');
		INSERT INTO roles(name) VALUES('ROLE_ADMIN');
		
		
	RUN TESTS
		
		start all 3 backend services
		
		open two terminals
		
			terminal #1
				cd into 'todo-frontend'
				npm start
			
			terminal #2
				cd into 'todo-frontend'
				npx cypress open
	
	
	
	
	
	
	
	
