import 'dotenv/config';
import * as prompt from './prompt_model.mjs';
import express from 'express';
import asyncHandler from 'express-async-handler';
import cors from 'cors';

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/genre', asyncHandler(async (req, res) => {
    const result = await prompt.findRandomGenre();

    res.send(result);
}));

app.get('/protagonist', asyncHandler(async (req, res) => {
    const result = await prompt.findRandomProtagonist();

    res.json(result);
}));

app.get('/conflict', asyncHandler(async (req, res) => {
    const result = await prompt.findRandomConflict();

    res.json(result);
}));

app.get('/antagonist', asyncHandler(async (req, res) => {
    const result = await prompt.findRandomAntagonist();

    res.json(result);
}));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
});