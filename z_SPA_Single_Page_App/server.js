import express from 'express';	//<====== to use 'import' instead of 'request', add   "type": "module", to package.json file
import path from 'path';

const app = express();
const PORT = 3000;

// point to the static directory
const __dirname = path.resolve(path.dirname('./'));
// app.use('static', express.static(path.resolve(__dirname, 'static'))); //first 'static' is causing an error
app.use(express.static(path.resolve(__dirname, 'frontend', 'static')));
// app.use(express.static(path.resolve('static')));

// all calls go back to index.html
app.get('/*', (req, res) => {
    res.sendFile(path.resolve('frontend', 'index.html'));
});







app.listen(PORT || 3000, () =>console.log(`z_Server running on port: http://localhost:${PORT}`));
