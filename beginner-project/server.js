const express = require('express');
const app = express();
const PORT = 2128;

let data = ['sankar'];

app.use(express.json());

// Endponits => HTTP methods(verbs) + routes (path) 
app.get('/', (req, res) => {
    // endpoint for GET request - 01
    console.log('GET request received');
    res.sendStatus(200);
})

app.get('/about', (req, res) => {
    // endpoint for GET request - 02
    console.log('GET request received');
    res.send("About Us");
})

app.get('/html', (req, res) => {
    // endpoint for get request - 03
    console.log('HTML request received');
    res.send(`
        <body>
            <h1>HTML Page data</h1>
            <p>${JSON.stringify(data)}</p>
        </body>
        
        `);
})

// API Endpoints (Non visual endpoints)
app.get('/api/data', (req, res) => {
    // endpoint for GET request - 04
    console.log('API request received');
    res.send(data);
})

// crud operations
// Create - POST, Read - GET, Update - PUT, Delete - DELETE

app.post('/api/data', (req, res) => {
    const newEntry = req.body;
    console.log('POST request received');
    data.push(newEntry.name);
    res.sendStatus(201);
})

app.delete('/api/data', (req, res) => {
    data.pop();
    res.sendStatus(203);
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})