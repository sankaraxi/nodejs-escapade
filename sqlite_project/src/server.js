import express from 'express';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const app = express();
const PORT = process.env.PORT || 5000;

//get the file name from the url of the current module
const __filename = fileURLToPath(import.meta.url);
//get the directory name from the file name
const __dirname = dirname(__filename);

//Middleware
app.use(express.json());
// Serves the HTML file from the /public directory
// Tells express to serve all files from the public folder as static assets / file. Any requests for the css files will be resolved to the public directory.
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});