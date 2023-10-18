import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

// intialise the app 
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// nodemon used to refresh the server
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})

app.get('/', (req, res) => {
    console.log('[TEST]!');

    res.send("Hello World!");
})

// Create an API for user data
// GET endpoint - find all users
// POST endpoint - create a user 
// GET endpoint - use id to grab specific user
// DELETE endpoint - use id to delete user
app.use('/users', usersRoutes)


// UPDATE endpoint - use id to update the user

