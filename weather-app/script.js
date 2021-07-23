document.querySelector('.busca').addEventListener('submit', async (e)=>{
  e.preventDefault();

  let input = document.querySelector('#searchInput').value;
  
  if(input !== '') {
    clearInfo()
    showWarning('Carregando...')

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=abd0f90eb71ba31a0e74e6509cffc0cf&units=metric&lang=pt_br`);
    let json = await response.json()
    
    if(json.cod !== 200) {
      clearInfo();
      showWarning('Cidade não encontrada');
    } else {
      showWarning('');
      showResults({
        name: json.name,
        country: json.sys.country,
        temp: json.main.temp,
        tempIcon: json.weather[0].icon,
        windSeed: json.wind.speed,
        windAngle: json.wind.deg
        });
    };
  } else {
    clearInfo()
  }
});


function showWarning(msg) {
  document.querySelector('.aviso').innerHTML = msg;
}


function showResults(json) {
  console.log(json.windAngle);
  document.querySelector('.resultado').style.display = 'block';
  document.querySelector('.resultado .titulo').innerHTML = `${json.name}, ${json.country}`;
  document.querySelector('.info .tempInfo').innerHTML = `${json.temp}<sup>ºC</sup>`;
  document.querySelector('.info .temp img').src = `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`;
  document.querySelector('.ventoInfo').innerHTML = `${json.windSeed} <span>km/h</span>`;
  document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle}deg)`;
}

function clearInfo() {
  document.querySelector('.resultado').style.display = 'none';
}