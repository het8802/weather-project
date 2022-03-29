express = require('express');
const app = express();
app.use(express.static('public'));
var bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: true }))
var jsonParser = bodyParser.json()

const data = require('./data.json');

let cityData;
let city;

app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(3000, 'localhost', () => {
    console.log('listening to port 3000');
});


app.get('/', (req, res) => {
    res.render('home', {cityData});
})

app.post('/', (req, res) => {
    console.log(req.body.city);
    city = req.body.city;
    cityData = data[city];
    console.log("city data 2");
    res.render('weather', {cityData, city});
})
