================================================================================================
### [Basic Template]

    >install node

- create the following folders:
    /server.js
    /public
    /views


- start a new project:
    >npm init -y	<=== will generate package.json file


- install express:
    >npm i express
    >npm fund
  
    >npm i ejs
    >npm i --save-dev nodemon

    >npm install line-reader

- install nodemon
    >npm i --save-dev nodemon	<=== hot deploy

- add the following in package.json file:

        "type": "module",
        "scripst": {
            "start": "nodemon server.js"
        },

- to run:
  >npm start    
  >node .\js\readJsonFile.js
