import express from 'express';
import bodyParser from 'body-parser';
import './config/db.js';

//Routes

import authRouter from './routes/authRoutes.js';

const app = express();
const port = 3000;

//middlewares

app.use(bodyParser.json());

app.use('/api', authRouter);

app.listen(port, () => {
    console.log(
        `Server is running on port ${port} and started on http://${port}`
    );
});
