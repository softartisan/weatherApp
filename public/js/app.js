



const weatherForm = document.querySelector('form');
const searchInput = document.querySelector('input');

weatherForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    document.querySelector('#actualTemperature').textContent = 'Cargando...';
    document.querySelector('#maxTemperature').textContent = '';
    document.querySelector('#minTemperature').textContent = '';
    document.querySelector('#place').textContent = '';
    document.querySelector('#error').textContent = '';
    document.querySelector('#precipProbability').textContent = '';
    const searchValue = searchInput.value;
    fetch(`/weather?address=${searchValue}`).then((response) =>{
    return response.json();
    }).then((weather) => {
        if(weather.error){
            document.querySelector('#error').textContent = weather.error;
            document.querySelector('#actualTemperature').textContent = '';
        }else{
            document.querySelector('#place').textContent = `Lugar: ${weather.place}`;
            document.querySelector('#actualTemperature').textContent = `Temperatura actual: ${weather.actualTemperature}°`;
            document.querySelector('#maxTemperature').textContent = `Maxima: ${weather.maxTemperature}°`;
            document.querySelector('#minTemperature').textContent = `Minima: ${weather.minTemperature}°`;
            document.querySelector('#precipProbability').textContent = `Probabilidad de lluvia: ${weather.precipProbability}%`;
        }
    });

});
