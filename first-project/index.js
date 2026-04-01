const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
// console.log('Hello, World!');

app.set('view engine', 'ejs');
app.use(express.json()); //midedleware to parse JSON body
app.use(express.urlencoded({ extended: false })); //midedleware to parse URL-encoded body

app.get('/', (req, res) => {
    res.send('Hello, World Anil !');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
});

app.get('/about/user', (req, res) => {
    res.send('<h1>User Page</h1>');
});

app.get('/user/:userid/book/:bookid', (req, res) => {
    res.send(`<h1>User Page</h1><p>User ID: ${req.params.userid}</p><p>Book ID: ${req.params.bookid}</p>`);
});

app.get('/user/:userid-:bookid', (req, res) => {
    res.send(req.params);
});

app.get('/search', (req, res) => {
    res.send(req.query);
});

app.get('/contact', (req, res) => {
    res.redirect('/about');
});

app.get('/data', (req, res) => {
   res.json({ name: 'Anil', age: 30, city: 'New York' });
});

app.get('/render', (req, res) => {
    res.render('user');
});

app.get('/download', (req, res) => {
   res.download('./files/file-sample.pdf' , 'sample.pdf');
});

app.get('/savefile', (req, res) => {
   res.sendFile(__dirname + '/files/file-sample.pdf');
});

app.get('/end', (req, res) => {
res.write('This is the first part of the response. ');
   res.end();
});

app.get('/error', (req, res) => {
res.sendStatus(500);
});

app.get('/check', (req, res) => {
console.log(res.headersSent); // false
res.sendStatus(500);
console.log(res.headersSent); // true
});

app.get('/header', (req, res) => {
res.set('X-Custom-Header', 'MyValue');
console.log(res.get('X-Custom-Header')); // MyValue
res.send('Header set!');
});

app.post('/user', (req, res) => {
res.send(req.body);
});

app.post('/user-form', (req, res) => {
res.send(req.body);
});