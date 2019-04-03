const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic29mdGFydGlzYW4iLCJhIjoiY2p0eHZmbHk0MHpjMzQ1bzZmeTR0Y3RrbCJ9.4snb3kFv1S1ribB50moauA&language=es&limit=1`;

    request({url, json:true},(error,{body}) => {
        if(error){
            callback('No se pudo conectar al servicio de direcciones',undefined);
        }else if(body.features.length < 1){
            callback('No se pudo encontrar la dirección',undefined);
        }else{
            const longitude = body.features[0].center[0];
            const latitude = body.features[0].center[1];
            const place = body.features[0].place_name;
            callback(undefined,{longitude, latitude, place});
        }
    });
}

module.exports = geocode;