## youtube:
    Docker Tutorial for Beginners [FULL COURSE in 3 Hours]
    https://www.youtube.com/watch?v=3c-iBn73dDE&list=PLvFBAcs5-Ef6SifJ4JZzy5j1N8H0yQb7M&index=17&t=135s

## github: 
    https://gitlab.com/nanuchi/techworld-js-docker-demo-app/-/blob/master/docker-compose.yaml

## Notes:
    // use when starting application locally/@localhost / @mongodb inside the same docker network [container-to-container]
    // let mongoUrlLocal = "mongodb://admin:password@localhost:27017";  // app is local and outside of the docker network
    //let mongoUrlLocal = "mongodb://admin:password@mongodb:27017";     // app is inside the docker network, together with mongodb and mongo-express
    let mongoUrlLocal = "mongodb://admin:password@mongodb"; // same as @mongodb:27017

    - Dockrize my-app:1.0 .. see code_docker.txt
    - to run >docker compose up -d


## Dockerize all + my-app:
    - make code changes
    - remove old container and it's image
    - log into docker hub:
        >docker login
        -zakguler/Zgul8999
    - >docker build -t zakguler/my-app:1.0 .
    - >docker push  zakguler/my-app:1.0
    - rebuild the whole thing
    - >docker compose up -d
    - >cd z_techworld-js-docker-demo-app-master/app
    - >npm start
    - [browser] localhost:3000


## dockerize mongodb and mongo-express and run my-app locally
    - server.js:
        - uncomment //let mongoUrlLocal = "mongodb://admin:password@localhost:27017";  // app is local and outside of the docker network
        - comment out //let mongoUrlLocal = "mongodb://admin:password@mongodb"; // same as @mongodb:27017
    - remove all containers
    - run >docker compose -f docker-compose-LOCAL.yaml up -d
    - >cd z_techworld-js-docker-demo-app-master/app
    - >set MONGO_DB_USERNAME=admin
    - >set MONGO_DB_PWD=password
    - >npm start



## demo app - developing with Docker

This demo app shows a simple user profile app set up using 
- index.html with pure js and css styles
- nodejs backend with express module
- mongodb for data storage

All components are docker-based

### With Docker

#### To start the application

Step 1: Create docker network

    docker network create mongo-network 

Step 2: start mongodb 

    docker run -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongodb --net mongo-network mongo    

Step 3: start mongo-express
    
    docker run -d -p 18081:8081 -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=password --net mongo-network --name mongo-express -e ME_CONFIG_MONGODB_SERVER=mongodb mongo-express   

_NOTE: creating docker-network in optional. You can start both containers in a default network. In this case, just emit `--net` flag in `docker run` command_

Step 4: open mongo-express from browser

    http://localhost:18081

Step 5: create `user-account` _db_ and `users` _collection_ in mongo-express

Step 6: Start your nodejs application locally - go to `app` directory of project 

    npm install 
    node server.js
    
Step 7: Access you nodejs application UI from browser

    http://localhost:3000

### With Docker Compose

#### To start the application

Step 1: start mongodb and mongo-express

    docker-compose -f docker-compose.yaml up
    
_You can access the mongo-express under localhost:8080 from your browser_
    
Step 2: in mongo-express UI - create a new database "my-db"

Step 3: in mongo-express UI - create a new collection "users" in the database "my-db"       
    
Step 4: start node server 

    npm install
    node server.js
    
Step 5: access the nodejs application from browser 

    http://localhost:3000

#### To build a docker image from the application

    docker build -t my-app:1.0 .       
    
The dot "." at the end of the command denotes location of the Dockerfile.
