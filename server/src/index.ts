import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import faker from 'faker';
import { jobsRouter, processRouter } from './routers'

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
// random delay on response to see some spinners
app.use((req, res, next) => {setTimeout(next, faker.random.arrayElement([300, 500, 700]))});

app.use('/processes', processRouter);
app.use('/jobs', jobsRouter);


app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
