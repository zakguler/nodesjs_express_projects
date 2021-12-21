```bash'
 >npm init -y
 >npm install --save express
 >npm install --save-dev nodemon <=== hot deployment/auto restart on save
 >npm install uuid  <=== "https://www.npmjs.com/package/uuid" generate unique id 

```
## run:
```bash'
 >npm start
 >node index.js
```

## Notes:
- for (template-string) string-output, use the 'tick' ` instead of the single quote:
```bash'
  res.send(`User name: [${user.firstName}] added to the database`);
```

## since this app has no config for user/password,
    -web-admin 9100
    -config-user manager
    -update user 'ANONYMOUS'
        >turn on 'FHIR Client' and 'FHIR Client (Superuser)
