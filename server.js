import express from 'express';
import bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';
import './config/db.js';
import swaggerSpec from './config/swagger.js';
//Routes

import authRouter from './routes/authRoutes.js';
import taskRouter from './routes/taskRoutes.js';

const app = express();
const port = 3000;

//middlewares

app.use(bodyParser.json());
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use('/api', authRouter);
app.use('/api', taskRouter);

app.listen(port, () => {
    console.log(
        `Server is running on port ${port} and started on http://localhost:${port}`
    );
});
