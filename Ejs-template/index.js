import express from 'express'
const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us', message: 'Welcome to the about page!'});
});

app.get('/form',(req,res)=>{
    res.render('form', {message: null });
});

app.post('/submit',(req,res)=>{
    const name = req.body.myname;
    const message =`Form submitted successfully! Hello, ${name}!`;
    res.render('form', {message: message });
})