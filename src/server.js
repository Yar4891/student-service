import express from 'express';
import dotenv from 'dotenv';
import studentsRoutes from "./routes/studentsRoutes.js";
import {MongoClient} from 'mongodb';
import {init} from './repository/studentRepository.js'

dotenv.config();

const port = process.env.PORT || 3000;

const client = new MongoClient(process.env.MONGO_URI);

const app = express();

app.use(express.json());

app.use(studentsRoutes);

app.use((req, res) =>
    res.status(404).type('text/plane; charset=utf8').send('Not Found'));

async function startServer() {
    try {
        await client.connect();
        const database = client.db(process.env.DB_NAME);
        init(database);
        app.listen(port, () => console.log(`Server running on port ${port}. Press Ctrl+C to stop.`));
    } catch (e) {
        console.log('Failed connection to MongoDB: ', e);
    }
}

startServer();

