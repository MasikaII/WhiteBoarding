import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();  // enables us to use the dotenv variables

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

// creating an instance of apenai
const openai = new OpenAIApi(configuration);

// initializing our express application
const app = express();

// setting up cors
app.use(cors()); // allows for cross origin requests and for a server to be called from the frontend

app.use(express.json()); // allows us to pass json from frontend to backend

// dummy route
app.get('/', async (req, res) => {
    res.status(200).send({
        message: 'Hello From Codex',
    });
});

// post route
app.post('/', async (req, res) => {
    try {
        const prompt = req.body.prompt;

        // getting response from openai
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        });

        // sending response to the frontend
        res.status(200).send({
            bot: response.data.choices[0].text
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({ error })
    }
})

// making sure server always listens for new requests
app.listen(5000, () => console.log('Server is running on port http://localhost:5000'));