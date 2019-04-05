const request = require('request');

const forecast = (latitude,longitude,callback) => {

    const url = `https://api.darksky.net/forecast/d5f7c915baf2d03c6d366af271805fdf/${latitude},${longitude}?lang=es&units=si`;

    request({url, json: true}, (error,{body}) =>{
        if(error){
            callback('no se pudo conectar al servicio del tiempo',undefined);
        }else if(body.error){
           callback('No se pudo encontrar esa dirección',undefined);
        }else{
            const currently = body.currently;
            const dailyData = body.daily.data[0];
            callback(undefined,{
                summary: dailyData.summary,
                actualTemperature: currently.temperature,
                precipProbability: currently.precipProbability,
                maxTemperature: dailyData.temperatureHigh,
                minTemperature: dailyData.temperatureLow
            });
        }
    });
}

module.exports = forecast;