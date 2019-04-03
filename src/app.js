const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

//Defino path para la config de Express
const publicDirectoryPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Configuro el view engine a hbs y agrego el path a las view
app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);
//Configuro el directorio para acceder a paginas estaticas
app.use(express.static(publicDirectoryPath));



app.get('', (req, res) => {
    res.render('index',{
        title: 'Weather',
        name: 'Sebastian'
    });
});

app.get('/help',(req, res) =>{
    res.render('help',{
        title: 'Help',
        name: 'Sebastian'
    });
});

app.get('/help/*',(req,res) => {
    res.render('errorPage',{
        error: 'Help article not found',
        title: 'Error 404',
        name: 'Sebastian'
    });
});

app.get('/about',(req, res) =>{
    res.render('about',{
        title: 'About',
        name: 'Sebastian'
    });
});

app.get('/weather',(req, res) =>{
    res.send({
        forecast: 'Lluvioso',
        location:'Santiago'
    });
});

app.get('*', (req, res) => {
    res.render('errorPage',{
        error: 'Page not found',
        title: 'Error 404',
        name: 'Sebastian'
    });
});

app.listen(3000,() =>{
    console.log('Server is up on port 3000');
});