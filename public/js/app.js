



const weatherForm = document.querySelector('form');
const searchInput = document.querySelector('input');

weatherForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    document.querySelector('#temperature').textContent = 'Cargando...';
    document.querySelector('#place').textContent = '';
    document.querySelector('#error').textContent = '';
    document.querySelector('#precipProbability').textContent = '';
    const searchValue = searchInput.value;
    fetch(`/weather?address=${searchValue}`).then((response) =>{
    return response.json();
    }).then((weather) => {
        if(weather.error){
            document.querySelector('#error').textContent = weather.error;
            document.querySelector('#temperature').textContent = '';
        }else{
            document.querySelector('#place').textContent = `Lugar: ${weather.place}`;
            document.querySelector('#temperature').textContent = `Temperatura actual: ${weather.temperature}°`;
            document.querySelector('#precipProbability').textContent = `Probabilidad de lluvia: ${weather.precipProbability}%`;
        }
    });

});
