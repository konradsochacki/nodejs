// node app.js --id=3
const argv = require('yargs').argv;
const getUser = require('./user');
const getWeather = require('./weather');

const userId = argv.id;

getUser(userId, (user) => {
    console.log(user.name);
    console.log('lat', user.address.geo.lat);
    console.log('lng', user.address.geo.lng);
    getWeather(user.address.geo.lat, user.address.geo.lng, (weather) => {
        console.log(weather.main.temp);
    });
});