import express from 'express'; // type:module to use 'import' in javascript code
import bodyParser from "body-parser";
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;


app.use(bodyParser.json());
app.use('/users', usersRoutes);


app.get('/', (req, res) => {
    res.send('Hello from Homepage...')
});





app.listen(PORT, () =>console.log(`z_Server running on port: http://localhost:${PORT}`));
