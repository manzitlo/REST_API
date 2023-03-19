import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/user.js';

const app = express();
const PORT = 5005;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from my first APP.GET()'));

app.listen(PORT, (req,res) =>
            console.log(`Server Running on port: http://localhost: ${PORT}`));


